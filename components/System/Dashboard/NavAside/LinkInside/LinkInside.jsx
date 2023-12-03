import Link from "next/link";
import React from "react";

const LinkInside = ({ children, path }) => {
  return <Link href={path}>{children}</Link>;
};

export default LinkInside;
