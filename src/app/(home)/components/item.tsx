import React from "react";
import classes from "./item.module.css";
import { Book } from "@/types";
import Link from "next/link";
function Item({ book }: { book: Book }) {
  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <img className={classes.cover} src={book.cover} />
      </div>
      <div className={classes.right}>
        <h3 className={classes.title}>{book.title}</h3>
        <h4 className={classes.subtitle}>{book.releaseDate}</h4>
        <Link href={`/book/${book.index}`} className={classes["read-more-btn"]}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default Item;
