
import { useState } from 'react'
import styles from '../styles/Forms.module.css'
import { PageText } from './PageText'

export const EmailSignup = ({ content }) => {
    
    const url = `https://arborlodgeneighborhood.us3.list-manage.com/subscribe/post?u=ebf29143f036362e0c576e6ed&amp;id=e786761a57`
        
    const doSignup = ({ nativeEvent }) => {
        const dest = 'https://www.google.com/search?q=site:www.arborlodgeneighborhood.com ' + searchTerm
        if (nativeEvent.shiftKey || nativeEvent.ctrlKey || nativeEvent.metaKey) {
            window.open(dest)
        } else {
            window.location = dest
        }     
    }

    return (
        <form method="POST" action={url} target="_blank">
            <div className={styles.signupWrap}>
                <PageText content={content.text} title={content.title} />
                <input 
                    type="text"
                    name="EMAIL" 
                    placeholder="Email" 
                    className={styles.search} 
                    // value={searchTerm}
                    // onChange={handleSearchChange} 
                />
                <input 
                    type="text"
                    name="FNAME" 
                    placeholder="First Name" 
                    className={styles.search} 
                    // value={searchTerm}
                    // onChange={handleSearchChange} 
                />
                <input 
                    type="text"
                    name="LNAME" 
                    placeholder="Last Name" 
                    className={styles.search} 
                    // value={searchTerm}
                    // onChange={handleSearchChange} 
                />
                <button 
                    type="submit"
                    className={styles.searchButton}
                    // onClick={doSignup}
                >
                        <span>Subscribe</span>
                </button>
            </div>
        </form>
    )
}