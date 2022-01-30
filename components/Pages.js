

export const Pages = ({ items, ulStyle, display }) => display 
    ? (
        <ul className={ulStyle}>
            {items.map(item => (
                <li key={item.url} className="menu-item">
                    <a href={`/${item.url}`} className="menu-link">
                        <span className="menu-link-text">{item.title}</span>
                    </a>
                </li>
            ))}
        </ul> 
    )
    : null