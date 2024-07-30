import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import MainHeaderBackground from ".//MainHeaderBackground";
import classes from "./MainHeader.module.css";
import NavLink from "./NavLink";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} alt="NextLevel Food Logo" priority />
                    NextFood
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href="/meals">Browse Meals</NavLink></li>
                        <li><NavLink href="/community">Community</NavLink></li> 
                    </ul>
                </nav>
            </header>
        </>

    );
}