import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { useState } from "react";
const Navbar=()=>{
    const [openNav,setOpenNav]= useState(false)
    return(
        <div className={styles.container}>
            <Link href="/ "> AVOCADO</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">DEVELOPMENT</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">PHTOGRAPHY</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul >
            <div className={styles.hamburger} onClick={()=>setOpenNav(!openNav)} >
                <div className={styles.line} ></div>
                <div className={styles.line} ></div>
                <div className={styles.line} ></div>
            </div>
            <ul onClick={()=>setOpenNav(false)} className={styles.menu} style={{right:openNav ? "0px" : "-50vw"}} >
                <li className={styles.menuItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">DEVELOPMENT</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/photography">PHTOGRAPHY</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;