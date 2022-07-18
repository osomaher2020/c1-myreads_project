import ShelfChanger from "./ShelfChanger"
import PropTypes from "prop-types"

const Book = ({book, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    {(book.imageLinks) &&
                        <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url(${book.imageLinks.smallThumbnail})`,
                        }}
                        ></div>
                    }

                    <ShelfChanger book={book} changeShelf={handleChangeShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book