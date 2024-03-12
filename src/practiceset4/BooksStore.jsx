import React, { useState } from "react";

const BooksStore = ({ books }) => {
  const [bookList, SetBookList] = useState(books);
  return (
    <div>
      <button
        onClick={() => {
          SetBookList(books);
        }}
      >
        All Genres
      </button>
      <button
        onClick={() => {
          SetBookList(
            books.filter((book) => (book.genre === "Classic")));
        }}
      >
        Classics
      </button>
      <button
        onClick={() => {
          SetBookList(
            books.filter(({ genre }) => genre === "Dystopian"));
        }}
      >
        Dystopian
      </button>
      <button
        onClick={() => {
          SetBookList(
            books.filter(({ genre }) => genre === "Young Adult"));
        }}
      >
        Young Adult
      </button>
{
    console.log(bookList)
}
      {bookList.map(({ id, title, author }) => {
        return (
          <div key={id}>
            <h2 style={{ fontSize: "25px" }}>{title}</h2>
            <p style={{ fontSize: "18px" }}>{author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BooksStore;
