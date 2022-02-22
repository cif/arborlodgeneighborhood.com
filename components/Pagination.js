
import styles from '../styles/Forms.module.css'

export const Pagination = ({ baseUrl, page, total, pageSize }) => {
    
    const pagesToShow = 10
    const totalPages = Math.ceil(total / pageSize)
    const showNextButton = page < totalPages
    let showRightDots = false
    let showLeftDots = false

    const range = (startAt = 0) => 
        [...Array(pagesToShow).keys()].map(i => i + startAt);
    

    let displayRange;
    // start of the range
    if (page < pagesToShow / 2) {
        displayRange = range(1);
        showRightDots = true
    }
    if (page > pagesToShow / 2 && page < totalPages - pagesToShow / 2) {
        displayRange = range(page - pagesToShow / 2)
        showRightDots = true
        showLeftDots = true
    }
    if (page > totalPages - pagesToShow / 2) {
        displayRange = range(totalPages - pagesToShow + 1)
        showLeftDots = true
    }

    return (
        <div> 
            <div className={styles.pagination}>   
                {page > 1 && <a href={`/?p=${1}`}>First</a>} {' '}
                {page > 1 && <a href={`/?p=${page - 1}`}>Previous</a>} {' '}
                {showLeftDots && <span> ... </span> }
                {displayRange.map(i => <a key={`page${i}`} href={`/?p=${i}`}>{i} </a>)}
                {showRightDots && <span> ... </span> }
                {showNextButton && <a href={`/?p=${page + 1}`}>Next</a>}
                {showNextButton && <a href={`/?p=${totalPages}`}>Last</a>}
            </div>
            <span className={styles.pageText}>Page {page} of {totalPages}</span>
        </div>
    )
}
    