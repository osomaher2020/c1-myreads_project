import Book from "./Book"

const Books = ({books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        books.map((book) => <Book key={book.id} book={book} changeShelf={handleChangeShelf} />)
    )
}

export default Books