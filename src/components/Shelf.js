import Books from "./Books"

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

export default Shelf