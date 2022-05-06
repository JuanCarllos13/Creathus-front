/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import api from "../../services/api";
import { MoviesProps } from '../index'
import styles from './styles.module.scss'
import { FiPlay, FiHome, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-toastify";

export default function MovieInfo() {
	const [movie, setMovie] = useState<MoviesProps>()
	const [load, setLoad] = useState(true)
	const { query } = useRouter()
	const router = useRouter()

	useEffect(() => {
		async function loadMovie() {
			const response = await api.get(`/movie/id?id=${query.index}`)
			setMovie(response.data[0])
			setLoad(false)

		}
		loadMovie()
	}, [query.index])


	async function DeleteMovie() {
		try {
			await api.delete('/movie', {
				params: {
					movie_id: query.index
				}
			})
			toast.success("Deletado com Sucesso")
			router.push('/')
		} catch (err) {
			console.log(err)
			toast.error("Erro ao deletar")
		}

	}

	if (load) {
		return (
			<div>
				<h1>O filme está carregando</h1>
			</div>
		)
	}
	return (
		<div className={styles.container}>
			<div className={styles.areImage}>
				<img src={movie?.image} alt={"Image do filme"} />
			</div>

			<div className={styles.areaSinopse}>

				<div className={styles.Info}>
					<h1>{movie?.title}</h1>
					<button className={styles.play}>
						<FiPlay color="white" />
						Play</button>

					<Link href={'/'}>
						<button className={styles.home} >
							<FiHome />
							Home </button>
					</Link>

					<button className={styles.delete} onClick={DeleteMovie}>
						<FiTrash2/>
						Deletar
					</button>



				</div>

				<div className={styles.main}>
					<h2>SINOPSE INFO</h2>
					<p>{movie?.descripion}</p>
				</div>

			</div>



		</div>
	)
}