import Link from "next/link"

export const Pages = ({ items, ulStyle, display }) =>
  display ? (
    <ul className={ulStyle}>
      {items.map((item) => (
        <li key={item.url} className="menu-item">
          <Link href={`/${item.url}`}>
            <a className="menu-link">
              <span className="menu-link-text">{item.title}</span>
            </a>
          </Link>
          {item.children.length > 0 ? (
            <Pages items={item.children} ulStyle={{}} display={true} />
          ) : null}
        </li>
      ))}
    </ul>
  ) : null
