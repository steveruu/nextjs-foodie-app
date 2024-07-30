"use client";

import Link from "next/link";
import classes from "./NavLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }: { children: React.ReactNode, href: string }) {
    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    )
}