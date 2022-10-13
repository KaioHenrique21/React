import styles from './Comment.module.css';
import{ ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1
		});
	}

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

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Apludir<span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}