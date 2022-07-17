import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Books from "../components/Books"
import * as BooksAPI from "../BooksAPI"

const SearchPage = ({books, changeShelf}) => {

    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(books);
    }, [])


    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }


    const handleSearchChange = (event) => {
        let searchVal = event.target.value;
        setSearchText(searchVal)

        searchVal = searchVal.trim();

        // search the API
        if(searchVal.length) {
            const getSearchResult = async() => {
                const searchResult = await BooksAPI.search(searchVal, 5);

                if(searchResult.length){
                    setFilteredBooks(searchResult)
                }
                else{
                    setFilteredBooks([])
                }
            }

            getSearchResult()
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <Books books={filteredBooks} changeShelf={handleChangeShelf} />
                </ol>
            </div>
        </div>
    )
}

export default SearchPage