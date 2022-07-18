import PropTypes from "prop-types";

const ShelfChanger = ({book, changeShelf}) => {

    const shelfs = ["currentlyReading", "wantToRead", "read", "none"];

    const handleChange = (event) => {
        changeShelf(book, event.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={handleChange} value={book.shelf??"none"}>
                <option value="" disabled>Move to...</option>
                {
                    shelfs.map((shelf) =>
                        <option key={shelf} value={shelf}>
                            {shelf}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ShelfChanger