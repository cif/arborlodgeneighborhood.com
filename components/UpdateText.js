import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styles from '../styles/MainLayout.module.css';
import slugify from 'slugify';
import moment from 'moment';

export const UpdateText = ({ title, published, summary, description, id }) => (
    <div className={styles.update}>
     {published ? <h4>{moment(published, "YYYY-MM-DD").format("MM/DD/YYYY")}</h4> : null}
     {title ? <h1>
                  <a href={`/post/${id}/${moment(published, "YYYY-MM-DD").format("MM/DD/YYYY")}/${slugify(title)}`}>
                    {title}
                  </a>
              </h1> 
            : null
      }
     {summary ? <h2>{summary}</h2> : null}
     {description && renderRichText(description, {
       renderNode: { [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // check to see if it is PDF
        if (node.data.target.fields.file.contentType === 'application/pdf') {
          return (
            <p style={{ textAlign: 'center', lineHeight: '3px' }}>
              <a href={`https://${node.data.target.fields.file.url}`} >
                <span>{node.data.target.fields.title}</span>
                <img
                  className={styles.document}
                  src="/pdf-icon.png"
                  width="25%"
                  alt={`Download/ view ${node.data.target.fields.description}`}
                />
            </a>
          </p>
          );
        }

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
