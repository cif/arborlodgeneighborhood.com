
import styles from '../styles/Socials.module.css'

export const Socials = ({ isFooter = false}) => {
    const bgColor = !isFooter 
        ? { backgroundColor: `rgba(82, 125, 82, 0.844)` }
        : { backgroundColor: `rgba(50,50,50,0.5)` }

    return (
        <div 
            className={styles.socialsWrapper}
            style={isFooter ? { marginLeft: -5, marginTop: 50 } : { }}
        >
            <a 
                style={bgColor}
                href="https://www.instagram.com/arborlodgenbhdassoc/" 
                className={styles.insta}
            >
                <span>Instagram</span>
            </a>
            <a 
                style={bgColor}
                href="https://www.facebook.com/ArborLodgeNeighborhoodAssociation"
                className={styles.face}
            >
                <span>Facebook</span>
            </a>
            <a 
                style={bgColor}
                href="https://nextdoor.com/neighborhood/arborlodge--portland--or/"
                className={styles.nextdoor}
            >
                <span>Nextdoor</span>
            </a>
        </div>
    )
}