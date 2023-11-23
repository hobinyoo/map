"use client";

import Image from "next/image";

export default function Home() {
  return (
    <Image
      src={"/images/twin_image.jpg"}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto md:w-[70%] m-auto"
      alt=""
    />
  );
}
