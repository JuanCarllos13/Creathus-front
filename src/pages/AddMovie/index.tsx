import React from "react";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function AddMovie() {
  return (
    <div>
      <Header />

      <div className={styles.Content}>
        <div className={styles.main}>
          <div className={styles.areImage}></div>

          <div className={styles.areInput}>
            <textarea
             style={{resize: 'none'}}
              placeholder={"Autor"}
              className={styles.input}
            />
            <textarea
              style={{resize: 'none'}}
              placeholder={"Título "}
              className={styles.input}
            />
            <textarea
              style={{resize: 'none'}}
              placeholder={"Descrição"}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.areaFile}>
          <input type={"file"} />
        </div>

          <button className={styles.post}>Postar</button>
          <button className={styles.cancel}>Cancelar</button>
      </div>
    </div>
  );
}
