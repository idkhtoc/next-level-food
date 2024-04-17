import Image from 'next/image';

import styles from './index.module.css';

export default function MealDetails({
	image,
	title,
	creator,
	creator_email,
	summary,
	instructions,
}) {
	const convertText = (text) => text.replace(/\n/g, '<br />');

	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image
						src={`${process.env.IMAGES_URL}${image}`}
						alt={title}
						fill
					/>
				</div>
				<div className={styles.headerText}>
					<h1>{title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${creator_email}`}>{creator}</a>
					</p>
					<p className={styles.summary}>{summary}</p>
				</div>
			</header>
			<main>
				<p
					className={styles.instructions}
					dangerouslySetInnerHTML={{
						__html: convertText(instructions),
					}}
				></p>
			</main>
		</>
	);
}
