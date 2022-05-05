/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react"
import styles from '../../styles/Home.module.scss'
import Header from "../components/Header"
import api from "../services/api"
import Link from 'next/link'


export interface MoviesProps {
  id: string
  autor: string
  title: string
  image: string
  descripion: string
}

export default function Home() {
  const [movies, setMovies] = useState<MoviesProps[]>([])

  console.log(movies)
  useEffect(() => {
    async function getMovies() {
      const response = await api.get("/movie")
      setMovies(response.data)
    }
    getMovies()

  }, [])


  return (
    <div>
      <Header />

      <div className={styles.Content}>
        <h1>Últimos filmes adicionados</h1>

        <p className={styles.titleMovies}>Filmes</p>

        <div className={styles.ContainerMovie}>
          {
            movies.map((movies, index) => (

              <div key={movies.id} className={styles.movieCollumn}>
                <Link href={`Movie/${movies.id}`}>
                  <img src={movies.image} alt='Foto da categoria' />
                </Link>
                <p>{movies.autor}</p>

              </div>
            ))
          }
        </div>


      </div>

    </div>
  )
}
