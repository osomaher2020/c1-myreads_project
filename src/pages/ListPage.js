import Shelfs from "../components/Shelfs";

const ListPage = ({shelfs, books, changeShelf}) => {

  const handleChangeShelf = (book, selectedShelf) => {
      changeShelf(book, selectedShelf)
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelfs shelfs={shelfs} books={books} changeShelf={handleChangeShelf} />
      </div>

      <div className="open-search">
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  )
}

export default ListPage