/* eslint-disable @next/next/no-img-element */
import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import { FiUpload } from 'react-icons/fi'
import { toast } from "react-toastify";
import api from "../../services/api";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function AddMovie() {
  const [Autor, setAutor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [imageAvatar, setImageAvatar] = useState(null)
  const router = useRouter()

  function handleFile(e: ChangeEvent<HTMLInputElement>) {


    if (!e.target.files) {
      return
    }

    const image = e.target.files[0];

    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageAvatar(image)
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))
    }

  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault()
    try {
      const data = new FormData()

      if (Autor === '' || title === '' || description === '' || imageAvatar === null) {
        toast.error('Preencha todos os campos')
        return
      }
      data.append('autor', Autor)
      data.append('title', title)
      data.append('descripion', description)
      data.append('file', imageAvatar)

      await api.post("/movie", data)

      toast.success("Filme cadastrado com sucesso")
      setAutor('')
      setTitle('')
      setDescription('')
      setImageAvatar(null)
      setAvatarUrl('')
      router.push('/')



    } catch (err) {
      console.log(err)
      toast.error("Erro ao cadastrar")

    }


  }

  return (
    <div>
      <Header />

      <div className={styles.Content}>

        <form onSubmit={handleRegister}>
          <div className={styles.main}>
            <div className={styles.areImage}>
              <span>
                <FiUpload size={30} color='white' />
              </span>

              {avatarUrl && (

                <img
                  className={styles.preview}
                  src={avatarUrl}
                  alt="Foto do Filme"
                  width={250}
                  height={250}
                />
              )}
            </div>

            <div className={styles.areInput}>
              <textarea
                style={{ resize: 'none' }}
                placeholder={"Autor"}
                className={styles.input}
                onChange={(e) => setAutor(e.target.value)}
              />
              <textarea
                style={{ resize: 'none' }}
                placeholder={"Título "}
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                style={{ resize: 'none' }}
                placeholder={"Descrição"}
                className={styles.input}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.line} />

          <div className={styles.areaFile}>
            <input type={'file'} accept="image/png, image/jpeg" onChange={handleFile} />
          </div>



          <button className={styles.post} type='submit' >Postar</button>
          <button className={styles.cancel} type="reset" >Cancelar</button>

        </form>


      </div>
      <Footer />
    </div>
  );
}
