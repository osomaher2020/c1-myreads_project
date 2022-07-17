import { Link } from "react-router-dom"
import Books from "../components/Books"
import * as BooksAPI from "../BooksAPI"
import { useState } from "react";

const SearchPage = ({books, changeShelf}) => {

    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }


    const handleSearchChange = (event) => {
        let searchVal = event.target.value;
        setSearchText(searchVal)

        // search the API
        if(searchVal.length) {
            const getSearchResult = async() => {
                const searchResult = await BooksAPI.search(searchVal.trim(), 5);

                if(searchResult.length){

                    // update result shelfs with shelfs on [books]
                    searchResult.map((b) => {
                        const foundBook = books.find((book) => book.id === b.id)
                        if(foundBook){
                            b.shelf = foundBook.shelf
                        }
                        return null
                    })

                    setFilteredBooks(searchResult)
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
                    <Books books={(searchText)? filteredBooks : []} changeShelf={handleChangeShelf} />
                </ol>
            </div>
        </div>
    )
}

export default SearchPage