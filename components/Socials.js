
import styles from '../styles/Socials.module.css'

export const Socials = () => {
    return (
        <div className={styles.socialsWrapper}>
            <a 
                href="https://www.instagram.com/arborlodgenbhdassoc/" 
                className={styles.insta}
            >
                <span>Instagram</span>
            </a>
            <a 
                href="https://www.facebook.com/ArborLodgeNeighborhoodAssociation"
                className={styles.face}
            >
                <span>Facebook</span>
            </a>
            <a 
                href="https://nextdoor.com/neighborhood/arborlodge--portland--or/"
                className={styles.nextdoor}
            >
                <span>Nextdoor</span>
            </a>
        </div>
    )
}