import styles from '../styles/MainLayout.module.css'
import { Pages } from './Pages'
import { Socials } from './Socials'

export const Footer = ({ items }) => (
    <footer className="footer">
        <div className="inner">
            <Pages items={items} display={true} />
            <p>All content &copy;1889 - {new Date().getFullYear()} Arbor Lodge Neighborhood Association</p>
            <Socials isFooter={true} />
        </div>
    </footer>
)