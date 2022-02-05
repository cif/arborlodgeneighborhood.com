
import { useState } from 'react'
import styles from '../styles/Search.module.css'

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = ({ target }) => {
        setSearchTerm(target.value)
    }
    const openSearch = ({ nativeEvent }) => {
        const dest = 'https://www.google.com/search?q=site:www.arborlodgeneighborhood.com ' + searchTerm
        if (nativeEvent.shiftKey || nativeEvent.ctrlKey || nativeEvent.metaKey) {
            window.open(dest)
        } else {
            window.location = dest
        }     
    }

    return (
        <div className={styles.searchWrap}>
            <input 
                type="text" 
                placeholder="Search" 
                className={styles.search} 
                value={searchTerm}
                onChange={handleSearchChange} 
            />
            <button 
                className={styles.searchButton}
                onClick={(e) => openSearch(e)}
            >
                <span className={styles.searchIcon}>
                    <span>Search</span>
                </span>
            </button>
        </div>
    )
}