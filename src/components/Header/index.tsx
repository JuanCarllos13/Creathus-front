import React from "react";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import Link from "next/link";
import styles from './style.module.scss'

export default function Header() {
    return (
        <header className={styles.headerContainer} >

            <div>
                <h1>C</h1>
                
            </div>

            <a href={'/'}>
                <FiHome color="#FFF" size={24} />
                Home
            </a>

            <a href={'/AddMovie'}>
                <FiUser color="#FFF" size={24} />
                Adicionar
            </a>

        </header>
    )
}