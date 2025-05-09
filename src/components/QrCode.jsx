import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function QrCode(props){
    return(
        <div className="flex flex-col items-center justify-center p-3 m-2 w-full">
          <h2 className="text-white font-extrabold text-xl">
            Your QR Code
          </h2>
          <QRCodeCanvas
            value={props.value}
            size={120}
            bgColor={"#16222A"}
            fgColor={"white"}
          />
          <p className="text-white font-medium text-md max-sm:text-sm mt-2 text-align-center">
            Scan the QR to access content
          </p>
        </div>
    )
}

export default QrCode;