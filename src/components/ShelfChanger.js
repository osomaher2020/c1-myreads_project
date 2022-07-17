const ShelfChanger = ({book, changeShelf}) => {

    const shelfs = ["currentlyReading", "wantToRead", "read"];

    const handleChange = (event) => {
        changeShelf(book, event.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={handleChange} value={book.shelf}>
                <option value="none" disabled>Move to...</option>
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

export default ShelfChanger