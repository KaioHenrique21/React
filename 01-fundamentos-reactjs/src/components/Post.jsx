import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

const Comments = [
	1,
	2,
];

export function Post({ author, publishedAt, content }) {
	const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
		locale: ptBR,
	})

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment() {
		event.preventDefault()

		Comments.push(3);
		console.log(Comments)
	}

	return(
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					if(line.type === 'paragraph') {
						return <p>{line.content}</p>
					} else if (line.type === 'link') {
						return <p><a href="#">{line.content}</a></p>;
					}
				})}				
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe o seu feedback</strong>

				<textarea placeholder='Deixe um comentário' />
				
				<footer>

					<button type="submit">Publicar</button>
	
				</footer>

			</form>

			<div className={styles.commentList}>
				{Comments.map(comments => {
					return <Comment />
				})}				
			</div>
		</article>
	)
}