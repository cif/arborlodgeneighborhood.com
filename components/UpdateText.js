import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import styles from '../styles/MainLayout.module.css';

export const UpdateText = ({ title, published, summary, description }) => (
    <div className={styles.update}>
     {published ? <h4>{published}</h4> : null}
     {title ? <h1>{title}</h1> : null}
     {summary ? <h2>{summary}</h2> : null}
     {description && renderRichText(description)}
   </div>
)
