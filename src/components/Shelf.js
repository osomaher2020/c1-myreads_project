import ShelfBooks from "./ShelfBooks"

const Shelf = ({title, shelf_books}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ShelfBooks shelf_books={shelf_books} />
            </div>
        </div>
    )
}

export default Shelf