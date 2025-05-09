import { useState } from 'react'
import './App.css'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { TextField } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className='flex flex-col items-center justify-center h-screen'
        style={{
          background: '#16222A',
          backgroundImage: '-webkit-linear-gradient(to right, #3A6073, #16222A)',
          backgroundImage: 'linear-gradient(to right, #3A6073, #16222A)',
        }}
      >
        <div className='flex flex-col items-center justify-center p-6 m-6 rounded-lg shadow-lg bg-gray-900 w-full md:w-1/2 lg:w-1/3'>
          <h1 className='text-white font-extrabold text-4xl mb-3'>
             qrGen   <QrCodeScannerIcon fontSize='large' />
          </h1>
          <p className='text-white font-medium text-xl max-sm:text-lg mb-5'>Generate QR code for weblinks</p>
          <TextField
            id="outlined-basic"
            label="Enter your link here"
            variant="outlined"
            className='w-full mb-5'
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#1E1E2F',
                borderRadius: '8px',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3A6073',
                },
                '&:hover fieldset': {
                  borderColor: '#3A6073',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3A6073',
                },
              },
            }}
          />
          <button
            className='bg-[#16222A] hover:bg-[#3A6073] text-white font-bold py-2 px-4 rounded mt-3'
          >
            Generate QR Code
          </button>
        </div>
      </div>
    </>
  )
}

export default App
