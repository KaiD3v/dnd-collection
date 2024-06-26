"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { api } from "../api/api.config";

export default function Home() {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await api.get("/monsters");
        const data = res.data;
        setMonsters(data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className={styles.main}>
      <h1>Lista de Regras</h1>
      <ul>
        {monsters.map(monster =>
          <div key={monster.index}>
            <h2>
              {monster.name}
            </h2>
          </div>
        )}
      </ul>
    </main>
  );
}
