"use client";

import styles from "./NavBar.module.css";
import { SiDungeonsanddragons } from "react-icons/si";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__mobile__content}>
        <IoMdMenu />
      </div>
      <div className={styles.logo__container}>
        <h2>
          <Link href={"/"}>
            <SiDungeonsanddragons /> D&D <b>Collection</b>
          </Link>
        </h2>
      </div>
      <div className={styles.nav__content__container}>
        <ul className={styles.list}>
          <li>
            <Link href={"/"}>Docs</Link>
          </li>
          <li>
            <a href="https://github.com/KaiD3v/dnd-collection">Github</a>
          </li>
        </ul>
        <form className={styles.search__form}>
          <div>
            <CgSearch />
            <input type="text" placeholder="Search" />
          </div>
        </form>
      </div>
    </nav>
  );
}