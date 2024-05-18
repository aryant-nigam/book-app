import React from "react";
import classes from "./single_book_page.module.css";
import { Book } from "@/types";
import Link from "next/link";
import DownloadButton from "./components/download_btn";
export default async function SingleBookPage({
  params,
}: {
  params: { bookId: number };
}) {
  let book: Book | null = null;

  //   console.log(
  //     params,
  //     `https://potterapi-fedeperin.vercel.app/en/books?index=${params.bookId}`
  //   );

  try {
    const response = await fetch(
      `https://potterapi-fedeperin.vercel.app/en/books?index=${params.bookId}`
    );
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    book = await response.json();
  } catch (err: any) {
    throw new Error("Error fetching book");
  }

  if (book)
    return (
      <div className={classes["single-book-page"]}>
        <div className={classes.left}>
          <h1 className={classes.title}>{book.title}</h1>
          <p className={classes.release}>Released on {book.releaseDate}</p>
          <p className={classes.description}>{book.description}</p>
          <DownloadButton fileLink={book.cover} fileName={book.title} />
        </div>
        <div className={classes.right}>
          <img className={classes.cover} src={book.cover}></img>
        </div>
      </div>
    );
  else {
    <div>
      <h1 style={{ color: "red" }}>ERROR WHILE FETCHING THE BOOK</h1>
    </div>;
  }
}
