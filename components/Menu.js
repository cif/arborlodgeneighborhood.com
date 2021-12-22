import React from 'react'
import Image from 'next/image'

export const Menu = ({ items }) => {
    return (
        <ul className="menu">
            <li className="logo">
                <a href="/">
                    <Image 
                        src="/arbor_lodge_association_logo.png" 
                        alt="Logo" 
                        width={100}
                        height={120}
                    />
                </a>
            </li>
            {items.map(item => (
                <li className="menu-item">
                    <a href={`/${item.url}`} className="menu-link">
                        <span className="menu-link-text">{item.title}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

