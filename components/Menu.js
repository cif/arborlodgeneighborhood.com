import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Menu.module.css'
import { Socials } from '../components/Socials'
import { Pages } from './Pages'

export const Menu = ({ items }) => {
    
    const defaultMenuState = global.window ? global.window.innerWidth > 768 : false
    const [isMenuExpanded, setMenuExpanded] = useState(defaultMenuState)
    
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
                <div className={styles.headerButtons}>
                    <div className={styles.headerButton}>
                        <a href="">
                            <span className={`${styles.buttonIcon} ${styles.donate}`} />
                            <span className={styles.headerButtonText}>Donate</span>
                        </a>
                    </div>
                    <div className={styles.headerButton}>
                        <a href="">
                        <span className={`${styles.buttonIcon} ${styles.envelope}`} />
                            <span className={styles.headerButtonText}>Subscribe</span>
                        </a>
                    </div>
                </div>
                <Socials />
                <div className={styles.toggle} onClick={() => setMenuExpanded(!isMenuExpanded)}>
                    <a href="javascript:void(0)" className={!isMenuExpanded ? styles.hamburger : styles.close}>
                        <span>Toggle Menu</span>
                    </a>
                </div>
            </div>
            <div className={styles.bar}>
                <Pages 
                    items={items} 
                    ulStyle={styles.menu}
                    display={isMenuExpanded} 
                />
            </div>
        </div>
    )
}

