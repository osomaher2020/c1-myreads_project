import "./App.css";
import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import * as BooksAPI from "./BooksAPI"

function App() {

  const shelfs = ["currentlyReading", "wantToRead", "read", "none"];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();

      setBooks(result);
    }

    getBooks();
  }, []);



  const handleChangeShelf = (book, selectedShelf) => {

    // update on API
    const updatebooks = async() => await BooksAPI.update(book, selectedShelf);
    updatebooks();

    // update books State
    const selectedBook_key = Object.keys(books).find(key => books[key].id === book.id);

    // add new Book on the specefied shelf - if not in books
    if(!books[selectedBook_key]){
      book.shelf = selectedShelf;
      setBooks([...books, book])
    }
    else{
      books[selectedBook_key].shelf = selectedShelf;
      setBooks([...books]);
    }
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ListPage shelfs={shelfs} books={books} changeShelf={handleChangeShelf} />} />
        <Route path="/search" element={<SearchPage books={books} changeShelf={handleChangeShelf} />} />
      </Routes>
    </div>
  );
}

export default App;
