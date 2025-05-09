import { useState } from "react";
import "./App.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { TextField } from "@mui/material";
import QrCode from "./components/QrCode";
import Snackbar from "@mui/material/Snackbar";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  function handleChange(event) {
    setQrCode(event.target.value);
  }
  function handleClick() {
    if (qrCode.trim() !== "") {
      setShowQrCode(true);
    } else {
      setOpenSnack(true);
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  }

  return (
    <>
      {openSnack && <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={openSnack}
        autoHideDuration={1500}
        onClose={handleClose}
        action={
          <button
            onClick={handleClose}
            style={{
              backgroundColor: "none",
              color: "white",
              padding: "5px 10px",
              marginLeft: "10px",
            }}
          >
            <span className="text-white font-bold">X</span>
          </button>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundImage: "radial-gradient( circle 1588px at -27.3% 144%,  rgba(255,22,22,1) 0%, rgba(0,0,0,1) 43.4%, rgba(0,0,0,1) 65.8%, rgba(255,22,22,1) 100.2% )",
            color: "white",
            borderRadius: "8px",
          },
        }}
        message={
          <span style={{ color: "white" }}>
            Please enter a valid link
          </span>
        }
      />}
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          background: "#16222A",
          backgroundImage:
            "-webkit-linear-gradient(to right, #3A6073, #16222A)",
          backgroundImage: "linear-gradient(to right, #3A6073, #16222A)",
        }}
      >
        <div className="flex flex-col items-center justify-center p-10 rounded-lg shadow-lg bg-gray-900 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-white font-extrabold text-4xl mb-3">
            qrGen <QrCodeScannerIcon fontSize="large" />
          </h1>
          <p className="text-white font-medium text-xl max-sm:text-lg mb-5">
            Generate QR code for weblinks
          </p>
          <TextField
            id="outlined-basic"
            label="Enter your link here"
            variant="outlined"
            className="w-full mb-5"
            value={qrCode}
            onChange={handleChange}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3A6073",
                },
                "&:hover fieldset": {
                  borderColor: "#3A6073",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3A6073",
                },
              },
            }}
          />
          <button
            className="bg-[#16222A] hover:bg-[#3A6073] text-white font-bold py-2 px-4 rounded mt-3"
            onClick={handleClick}
          >
            Generate QR Code
          </button>

          {showQrCode && <QrCode value={qrCode} />}
        </div>
      </div>
    </>
  );
}

export default App;
