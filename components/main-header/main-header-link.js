"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header-link.module.css";

export default function NavLink({href, children}){
  const path = usePathname();
  console.log(path.startsWith);
  return  <Link href={href} className={path.startsWith(href) ?`${classes.navLink} ${classes.active}`: classes.navLink}>{children}</Link>
}