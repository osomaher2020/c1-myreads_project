import Shelf from "./Shelf"

const Shelfs = ({shelfs, books}) => {
    return (
        shelfs.map(
            (shelf) => <Shelf key={shelf} title={shelf} shelf_books={books.filter((b) => b.shelf === shelf)} />
        )
    )
}

export default Shelfs