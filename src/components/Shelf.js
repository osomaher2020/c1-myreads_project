import Books from "./Books"
import PropTypes from "prop-types"

const Shelf = ({title, shelf_books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Books books={shelf_books} changeShelf={handleChangeShelf} />
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    shelf_books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Shelf