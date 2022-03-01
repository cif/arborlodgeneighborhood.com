import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styles from '../styles/MainLayout.module.css';
import slugify from 'slugify';

export const UpdateText = ({ title, published, summary, description, id }) => (
    <div className={styles.update}>
     {published ? <h4>{new Date(published).toLocaleDateString()}</h4> : null}
     {title ? <h1>
                  <a href={`/post/${id}/${new Date(published).toLocaleDateString()}/${slugify(title)}`}>
                    {title}
                  </a>
              </h1> 
            : null
      }
     {summary ? <h2>{summary}</h2> : null}
     {description && renderRichText(description, {
       renderNode: { [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            className={styles.image}
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      }
     }})}
   </div>
)
