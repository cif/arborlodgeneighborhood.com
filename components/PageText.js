import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styles from '../styles/MainLayout.module.css';

export const PageText = ({ content, title }) => (
    <div>
     {title ? <h1>{title}</h1> : null}
     {content && renderRichText(content, {
       renderNode: { [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            className={styles.image}
            src={`https://${node.data.target.fields.file.url}`}
            width="75%"
            alt={node.data.target.fields.description}
          />
        );
      }
     }})}
   </div>
)
