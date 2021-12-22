import React from 'react'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'
import { Socials } from '../components/Socials'

export const Menu = ({ items }) => {
    return (
        <div class={styles.wrapper}>
            <a href="/" className={styles.logo} >
                <Image 
                    src="/arbor_lodge_association_logo.png" 
                    alt="Logo" 
                    width={100}
                    height={120}
                />
            </a>
            <div class={styles.items}>
                <ul className={styles.menu}>
                    {items.map(item => (
                        <li className="menu-item">
                            <a href={`/${item.url}`} className="menu-link">
                                <span className="menu-link-text">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <Socials />
            </div>    
        </div>
    )
}

