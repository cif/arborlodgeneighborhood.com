
import styles from '../styles/Forms.module.css'

export const Pagination = ({ baseUrl = '/', page, total, pageSize }) => {
    
    const MAX_DISPLAY = 10; 
    const totalPages = Math.ceil(total / pageSize)
    const areLessPagesThanMax = totalPages <= MAX_DISPLAY;
    const pagesToShow = areLessPagesThanMax ? totalPages : MAX_DISPLAY
    const showNextButton = page < totalPages
    let showRightDots = false
    let showLeftDots = false

    const range = (startAt = 0) => 
        [...Array(pagesToShow).keys()].map(i => i + startAt);
    

    let displayRange = [];
    let halfPageRange = areLessPagesThanMax ? totalPages : Math.ceil(pagesToShow / 2);
    
    // start of the range
    if (page < halfPageRange) {
        displayRange = range(1);
        showRightDots = !areLessPagesThanMax
    }
    if (page > pagesToShow / 2 && page < totalPages - halfPageRange) {
        displayRange = range(page - halfPageRange)
        showRightDots = true
        showLeftDots = true
    }
    if (page > totalPages - pagesToShow / 2) {
        displayRange = range(totalPages - pagesToShow + 1)
        showLeftDots = !areLessPagesThanMax
    }
    

    if (totalPages <= 1) return null

    
    return (
        <div> 
            <div className={styles.pagination}>   
                {page > 1 && <a href={`${baseUrl}?p=${1}`}>First</a>} {' '}
                {page > 1 && <a href={`${baseUrl}?p=${page - 1}`}>Previous</a>} {' '}
                {showLeftDots && <span> ... </span> }
                {displayRange.map(i => <a className={i == page ? styles.currentPage : null}  key={`page${i}`} href={`${baseUrl}?p=${i}`}>{i} </a>)}
                {showRightDots && <span> ... </span> }
                {showNextButton && <a href={`${baseUrl}?p=${Number(page) + 1}`}>Next</a>}
                {showNextButton && <a href={`${baseUrl}?p=${totalPages}`}>Last</a>}
            </div>
            <span className={styles.pageText}>Page {page} of {totalPages}</span>
        </div>
    )
}
    