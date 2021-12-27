import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'
import { Socials } from '../components/Socials'

export const Menu = ({ items }) => {
    const [isMenuExpanded, setMenuExpanded] = useState(false)
    return (
        <div class={styles.wrapper}>
            <div class={styles.top}>
                <a href="/" className={styles.logo} >
                    <Image 
                        src="/arbor_lodge_association_logo.png" 
                        alt="Logo" 
                        width={100}
                        height={120}
                    />
                </a>
                <div className={styles.flexExpander}></div>
                <div className={styles.subscribe}>
                    <a href="">Get Email Updates</a>
                </div>
                <Socials />
                <div className={styles.toggle} onClick={() => setMenuExpanded(!isMenuExpanded)}>
                    <a href="javascript:void(0)" className={!isMenuExpanded ? styles.hamburger : styles.close}>
                        <span>Toggle Menu</span>
                    </a>
                </div>
            </div>
            <div className={styles.bar}>
                <ul className={styles.menu}>
                    {items.map(item => (
                        <li className="menu-item">
                            <a href={`/${item.url}`} className="menu-link">
                                <span className="menu-link-text">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

