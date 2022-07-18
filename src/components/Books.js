import Book from "./Book"
import PropTypes from "prop-types"

const Books = ({books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        books.map((book) => <Book key={book.id} book={book} changeShelf={handleChangeShelf} />)
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Books