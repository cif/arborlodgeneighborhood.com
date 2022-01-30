import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import styles from '../styles/MainLayout.module.css';

export const PageText = ({ content, title }) => (
    <div className={styles.update}>
    {title ? <h1>{title}</h1> : null}
     {content && renderRichText(content)}
   </div>
)
