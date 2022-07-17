import Shelf from "./Shelf"

const Shelfs = ({shelfs, books, changeShelf}) => {

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }

    return (
        shelfs.map(
            (shelf) =>
                <Shelf
                key={shelf}
                title={shelf}
                shelf_books={books.filter((b) => b.shelf === shelf)}
                changeShelf={handleChangeShelf}
                />
        )
    )
}

export default Shelfs