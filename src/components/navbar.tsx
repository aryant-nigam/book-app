import Link from "next/link";
import React from "react";
import classes from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link href={"/"} className={classes["app-logo-container"]}>
        <img src="book.png" className={classes.logo} />
        readers hub
      </Link>

      <div className={classes.right}>
        <Link
          href={"/"}
          className={classes["nav-actions"]}
          id={classes["sign-in"]}
        >
          sign in
        </Link>
        <Link
          href={"/"}
          className={classes["nav-actions"]}
          id={classes["sign-up"]}
        >
          sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
