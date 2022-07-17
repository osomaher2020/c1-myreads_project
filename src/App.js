import "./App.css";
import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import * as BooksAPI from "./BooksAPI"

function App() {

  const shelfs = ["currentlyReading", "wantToRead", "read"];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    }

    getBooks();
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ListPage shelfs={shelfs} books={books} />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
