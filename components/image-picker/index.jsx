'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './index.module.css';

export default function ImagePicker({ label, name }) {
	const [image, setImage] = useState(null);
	const imageInput = useRef();

	const clickRedirectHandler = () => imageInput.current.click();

	const imageInputHandler = (event) => {
		const file = event.target.files[0];

		if (!file) {
			setImage(null);
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => setImage(fileReader.result);

		fileReader.readAsDataURL(file);
	};

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{image ? (
						<Image
							src={image}
							alt='The image selected by the user'
							fill
						/>
					) : (
						<p>No image picked yet.</p>
					)}
				</div>
				<input
					className={styles.input}
					type='file'
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInput}
					onChange={imageInputHandler}
					required
				/>
				<button
					className={styles.button}
					type='button'
					onClick={clickRedirectHandler}
				>
					Pick an image
				</button>
			</div>
		</div>
	);
}
