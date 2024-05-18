import React, { Suspense } from "react";
import classes from "./homepage.module.css";
import BookList from "./components/book_list";
import Loader from "@/components/loader";

export default async function Home() {
  return (
    <div className={classes["homepage"]}>
      <div className={classes["banner"]}>
        <h1 className={classes.caption}>All I need is a book and a coffee !</h1>
        <img src="cover.png"></img>
      </div>
      <Suspense fallback={<Loader />}>
        <div className={classes["books-section"]}>
          <BookList />
        </div>
      </Suspense>
    </div>
  );
}
