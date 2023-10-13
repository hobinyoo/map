"use client";

import Image from "next/image";
// import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  return (
    // <div className="relative w-fullbg-black z-50 h-auto text-white">
    //   <Image
    //     src={"/images/map.jpg"}
    //     layout="fill"
    //     style={{ objectFit: "contain", height: "100%" }}
    //     alt=""
    //   />
    //   gd
    // </div>
    <Image
      src={"/images/map.jpg"}
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
