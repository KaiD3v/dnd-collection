"use client";

import { useEffect } from "react";
import styles from "./NavBar.module.css";
import { SiDungeonsanddragons } from "react-icons/si";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo__container}>
        <h2>
          <SiDungeonsanddragons /> D&D <b>Collection</b>
        </h2>
      </div>
      <div className={styles.nav__content__container}>
        <ul className={styles.list}>
          <li>
            <Link href={"/"}>Docs</Link>
          </li>
          <li>
            <Link href={"/"}>Github</Link>
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
