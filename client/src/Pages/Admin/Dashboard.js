import { QrCodeScanner } from '@mui/icons-material'
import { Button, Container, Icon, Stack, Typography } from '@mui/material'
import ScannerModal from 'Components/ScannerModal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [scannerOutput, setScannerOutput] = useState([]);
  const handleOpenScannerModal = () => setOpen(true);

  return (
    <>
      <Container sx={{ ml: 0, mr: 0 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" >
          <Typography variant="h4" gutterBottom>
            Admin
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpenScannerModal}
            startIcon={<Icon color="error" icon={<QrCodeScanner />} />}
          >
            Scan
          </Button>
        </Stack>
        <ScannerModal open={open} setOpen={setOpen} scannerOutput={scannerOutput} setScannerOutput={setScannerOutput} />
        {scannerOutput.map((value, i) => (
          <h3>{value}</h3>
        ))}
      </Container>
    </>
  )
}

export default AdminDashboard
