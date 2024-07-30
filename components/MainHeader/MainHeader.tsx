"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import MainHeaderBackground from ".//MainHeaderBackground";
import classes from "./MainHeader.module.css";
import { usePathname } from "next/navigation";

export default function MainHeader() {
    const path = usePathname();

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
                        <li><Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined} >Browse Meals</Link></li>
                        <li><Link href="/community" className={path == '/community' ? classes.active : undefined}>Community</Link></li> 
                    </ul>
                </nav>
            </header>
        </>

    );
}