import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddBook from "./components/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Books from "./components/Book/Books";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <header>
      <Header />
      </header>
     <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/books/:id" element={<BookDetail />} exact />

        <Route path="/about" element={<About />} exact />
        
      </Routes>
     </main>
    </React.Fragment>
    
      
    
  );
}

export default App;
