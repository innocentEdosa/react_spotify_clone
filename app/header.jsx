"use client"
import style from "./style.module.css";
import { useContext } from "react";
import {UserContext} from "./userContext";

const Header = () => {

    const data = useContext(UserContext)

    return <header className={style.header}>
        <span>Ladi bot</span>
        <aside className={style.avatar}><span>{`${data.profile.firstName?.[0]}${data.profile.firstName?.[1]}`}</span></aside>
    </header>
}

export default Header;