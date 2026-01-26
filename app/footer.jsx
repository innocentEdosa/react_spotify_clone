"use client"
import styles from "./style.module.css"
import { useContext } from "react";
import { UserContext } from "./userContext";
const Footer = () => {

        const data = useContext(UserContext)


    return <footer className={styles.footer}>
        <span>Ladi bot</span><br/>
        <span> {data.profile.firstName} {data.profile.lastName}</span>
    </footer>
}

export default Footer;