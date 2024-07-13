import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png"
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./main-header-link";

export default function MainHeader(){

    return <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={Logo} alt="Foodie Icon" priority/>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
}