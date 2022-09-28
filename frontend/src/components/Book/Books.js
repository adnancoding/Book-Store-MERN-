import React, { useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./book.css";


const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = React.useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div className="book">
      <ul>
        {books &&
          books.map((book, i) => (
            <div key={i}>
              <Book book={book} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Books;
