import React, { useReducer, useState } from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: '',
      password: 0,
      'rememberMe': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function Login(props) {

  const [errorMsg, seterrorMsg] = useState('');
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useReducer(formReducer, {
    'rememberMe': true
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    seterrorMsg("")

    await axios.post(`/auth/login`, formData).then((res) => {
      console.log(res.data);
      props.history.push('/admin')
    }).catch((err) => {
      console.log(err.response);

      seterrorMsg("Invalid E-mail or Password")
      setLoading(false)
      // eslint-disable-next-line no-console
      console.log(formData);
      setFormData({
        reset: true
      })

    })

  };

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Collapse in={errorMsg ? true : false}>
              <Alert variant="standard" sx={{ mt: 1, mb: 2 }} severity="error">
                {errorMsg}
              </Alert>
            </Collapse>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              disabled={loading}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              disabled={loading}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value={true} color="primary" />}
              label="Remember me"
              name="rememberMe"
              checked={formData['rememberMe'] || false}
              disabled={loading}
              onChange={handleChange}
            />
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In {loading && <CircularProgress sx={{ ml: 1 }} size={20} />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}