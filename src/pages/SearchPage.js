import { Link } from "react-router-dom"
import Books from "../components/Books"
import * as BooksAPI from "../BooksAPI"
import { useRef, useState } from "react";
import PropTypes from "prop-types"
import {debounce} from 'lodash';

const SearchPage = ({books, changeShelf}) => {

    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);


    const getSearchResult = async(searchVal) => {
        const searchResult = await BooksAPI.search(searchVal.trim(), 5);

        if(searchResult.error){
            setFilteredBooks([])
        }
        else if(searchResult.length){

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


    // debounce
    const debouncedSave = useRef(debounce(searchVal => getSearchResult(searchVal), 500)).current;


    const handleChangeShelf = (book, selectedShelf) => {
        changeShelf(book, selectedShelf)
    }


    const handleSearchChange = (event) => {
        let searchVal = event.target.value;
        setSearchText(searchVal)

        // search the API
        if(searchVal.length) {
            // debounce
            debouncedSave(searchVal);
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


SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}


export default SearchPage