import React from "react";
import Header from "../../components/Header";
import styles from './styles.module.scss'


export default function AddMovie() {
    return (
        <div>
            <Header />

            <div className={styles.Content}>


                <div className={styles.main}>
                    <div className={styles.areImage}>
                        hjd

                    </div>

                    <div className={styles.areInput}>
                      <input type={"text"} placeholder={'Autor'} className={styles.input} />
                      <input type={"text"} placeholder={'Autor'} className={styles.input} />
                      <input type={"text"} placeholder={'Autor'} className={styles.input} />
                    </div>

                </div>



            </div>
        </div>
    )
}