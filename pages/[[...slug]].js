import Head from 'next/head'
import styles from '../styles/MainLayout.module.css'
import { getLatestUpdates, getMenu, getContentById, getPageBySlug, getSlideshow } from '../contentful'
import { Menu } from '../components/Menu'
import { Slideshow } from '../components/Slideshow'
import { Footer } from '../components/Footer'
import { UpdateText } from '../components/UpdateText'
import { PageText } from '../components/PageText'
import { Submenu } from '../components/Submenu'
import { Search } from '../components/Search'
import { EmailSignup } from '../components/EmailSignup'
import { Pagination } from '../components/Pagination'
export default function Home({ 
  menu, 
  show = [], 
  slug, 
  page = {}, 
  updates = {},
  neighborhoods,
  signup 
}) {
  return (<>
      <Head>
        <title>{page && page.seoTitle || 'Arbor Lodge Neighborhood, Portland OR'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <Menu items={menu} />
      </nav>
      <Slideshow images={show} />  
      
      <main className={`${styles.main} ${styles.container}`}>
        <section className={styles.left}>
          {(page && !slug) && // homepage should just map updates
            <div>
              {updates.entries.map(update => <UpdateText key={update.title} {...update} />)}
              <div className={styles.pagination}>
                <Pagination baseUrl="/" {...updates} />
              </div>
            </div>
            
          }
          {page && slug && // found page, display title and content
            <PageText title={page.title} content={page.pageContent} />            
          }

          {slug == 'land-use' && 
            <div className={styles.landUseMargin}>
              <h2>Recent Land Use Updates</h2>
              <br />
              {updates.entries.map(update => <UpdateText key={update.title} {...update} />)}
              <div className={styles.pagination}>
                <Pagination baseUrl="/land-use" {...updates} />
              </div>
            </div>
          }
          
          {!page && // not found page, display 404
            <h1>Sorry, there doesn't seem to be anything at this URL.</h1>
          }
        </section>

        <section className={styles.right}>
          <Search />
          {slug ? <Submenu menu={menu} page={page} /> : null}
          <EmailSignup content={signup} />
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22343.47670235109!2d-122.693268!3d45.571754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a7a3b74d15c1%3A0xf60b1b34aa1f920b!2sArbor%20Lodge%2C%20Portland%2C%20OR%2097217!5e0!3m2!1sen!2sus!4v1645495845525!5m2!1sen!2sus" 
            width="100%" 
            height="350" 
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy"
          />
          
          <br /><br />
          <PageText title={neighborhoods.title} content={neighborhoods.text} />
        </section>
      </main>

      <Footer items={menu} />
    </>)
}

export const getServerSideProps = async ({ query, res }) => {
  var menu = await getMenu()
  var show = await getSlideshow()
  var neighborhoods = await getContentById('4ydMQwzKqYOJGLAeZqp9DG')
  var signup = await getContentById('kxAhXgspXuMhAeY5OqwDa')
  

  // dynamic page created by slug
  var slug = query.slug ? query.slug[0] : null
  var page = slug 
    ? await getPageBySlug(slug)
    : await getContentById('6wKUqAuj95bWl80kpUreYN')

  // 404 if we dont get a page
  if (!page) {
    res.statusCode = 404
  }

  var isLandUse = query.slug == 'land-use'
  var updates = await getLatestUpdates(query.p, isLandUse)

  return {
    props: { 
      menu, 
      page: page ? page : null,  // page undef is causing serialization error here.  
      show, 
      updates,
      slug,
      neighborhoods,
      signup 
    },
  };
}
