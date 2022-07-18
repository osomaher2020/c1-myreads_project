import Shelf from "./Shelf"
import PropTypes from "prop-types"

const Shelfs = ({shelfs, books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        shelfs.map(
            (shelf) =>
                (shelf !== "none") &&
                <Shelf
                key={shelf}
                title={shelf}
                shelf_books={books.filter((b) => b.shelf === shelf)}
                changeShelf={handleChangeShelf}
                />
        )
    )
}

Shelfs.propTypes = {
    shelfs: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Shelfs