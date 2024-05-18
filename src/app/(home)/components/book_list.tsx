import { Book } from "@/types";
import React from "react";
import Item from "./item";

async function BookList() {
  const response = await fetch(
    "https://potterapi-fedeperin.vercel.app/en/books"
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetchung the books");
  }

  const books: Book[] = await response.json();

  console.log(books);
  return (
    <>
      {books.map((book) => (
        <Item key={book.index} book={book}></Item>
      ))}
    </>
  );
}

export default BookList;
