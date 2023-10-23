"use client";

import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  return (
    <Image
      src={"/images/mapt3.jpg"}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto md:w-[70%] m-auto"
      alt=""
    />
    // <div>
    //   <QRCodeCanvas
    //     id="qrCode"
    //     value={"https://map-nine-gamma.vercel.app/"}
    //     style={{
    //       width: "20vw",
    //       height: "auto",
    //       margin: "100px auto ",
    //     }}
    //     level={"L"}
    //   />
    // </div>
  );
}
