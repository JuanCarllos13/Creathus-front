/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image"
import creathus from '../../assets/creathus1.png'
import styles from './styles.module.scss'
export default function Footer() {

	return (
		<footer className={styles.Footer}>
			<div>
				<span>Privacy Policy</span>
				<span>Terms of Use</span >
			</div>

			<Image src={creathus} width={50}
				height={50} alt={"zxv"} />
		</footer>
	)
}