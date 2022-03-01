
import styles from '../styles/Menu.module.css'

export const Submenu = ({ page, menu }) => {
    
    const currentMainPage = () => {
        
        for(const item of menu) {
            if (item.children.find(c => c.url == page.url)) {
                return item
            }
        }
        return {
            title: page.title,
            children: page.children 
                ? page.children.map(item => ({
                    url: item.fields.url,
                    title: item.fields.title,
                })) 
                : null
        }
    }
    const mainPage = currentMainPage()
    return mainPage.children 
    ? (
        <div className={styles.submenu}>
            <h2>{mainPage.title}</h2>
            <ul>
                {mainPage.children.map(subMenuItem => (
                    <li key={subMenuItem.url} className="sub-menu-item">
                        <a href={`/${subMenuItem.url}`} className="menu-link">{subMenuItem.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
    : null
}