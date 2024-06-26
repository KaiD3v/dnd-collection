"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";
import { SiDungeonsanddragons } from "react-icons/si";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

export default function NavBar() {
  const [searchOpened, setSearchOpened] = useState(false);

  const handleOpenSearch = (e: any) => {
    e.preventDefault();
    setSearchOpened(!searchOpened);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo__container}>
        <div className={styles.nav__mobile__content}>
          <IoMdMenu size={40} />
        </div>
        <h2>
          <Link href="/">
            D&D <b>Collection</b> <SiDungeonsanddragons />
          </Link>
        </h2>
      </div>
      <div className={styles.nav__content__container}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Docs</Link>
          </li>
          <li>
            <a href="https://github.com/KaiD3v/dnd-collection">Github</a>
          </li>
        </ul>
        <form
          className={`${styles.search__form} ${searchOpened
            ? styles.visible
            : ""}`}
        >
          <div className={styles.search__container}>
            <CgSearch />
            <input type="text" placeholder="Search" />
          </div>
        </form>
      </div>
      <div className={styles.nav__mobile__content}>
        <CgSearch
          className={searchOpened ? styles.inactive : ""}
          onClick={handleOpenSearch}
        />
        <form className={searchOpened ? styles.active : styles.inactive}>
          <div>
            <CgSearch
              onClick={handleOpenSearch}
              className={searchOpened ? "" : styles.inactive}
            />
            <input type="text" />
          </div>
        </form>
      </div>
    </nav>
  );
}
