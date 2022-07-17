import ShelfChanger from "./ShelfChanger"

const Shelf = ({title, shelf_books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelf_books.map((book) =>
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage:
                                            `url(${book.imageLinks.smallThumbnail})`,
                                        }}
                                        ></div>
                                        <ShelfChanger book={book} changeShelf={handleChangeShelf} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf