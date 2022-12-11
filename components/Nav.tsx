import React from "react";
import Image from "next/image";
import logo from "../public/Icon.svg";
import Link from "next/link";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav>
      <Link href="/">
        <Image src={logo} alt="Picture of the author" width={50} height={50} />
      </Link>
    </nav>
  );
}
