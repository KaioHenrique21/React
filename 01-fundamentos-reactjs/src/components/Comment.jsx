import styles from './Comment.module.css';
import{ ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';


export function Comment() {
	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/82170004?v=4" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Kaio Henrique</strong>
							<time title="10 de outubro ás 11:00" dateTime="2022-10-05 11:00:00">Cerca há 1hr atrás</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Kaio, parabéns!!! 👏👏</p>
				</div>

				<footer>
					<ThumbsUp />
					Apludir<span>20</span>
				</footer>
			</div>
		</div>
	)
}