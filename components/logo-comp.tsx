import Image from "next/image";
import React from "react";
import logo from "/app/logo.svg";
import logow from "/app/logow.svg";

export default function AutoLogo() {
  return (
    <div className="mb-1">
      <div className="dark:hidden">
        <Image src={logo} alt="" width={100} />
      </div>
      <div className="hidden dark:block">
        <Image src={logow} alt="" width={100} />
      </div>
    </div>
  );
}
