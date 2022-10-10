import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({ author, publishedAt, content }) {
	const [Comments, setComments] = useState([
		'Post muito legal'
	])

	const [newCommentText, setNewCommentText] = useState('')

	const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
		locale: ptBR,
	})

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment() {
		event.preventDefault()

		const newCommentText = event.target.comment.value
		
		setComments([...Comments, newCommentText]);

	}

	function handleNewCommentChange() {
		setNewCommentText(event.target.value);
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
						return <p key={line.content}>{line.content}</p>
					} else if (line.type === 'link') {
						return <p key={line.content}><a href="#">{line.content}</a></p>;
					}
				})}				
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe o seu feedback</strong>

				<textarea
					name="comment"
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={handleNewCommentChange}
				/>
				
				<footer>

					<button type="submit">Publicar</button>
	
				</footer>

			</form>

			<div className={styles.commentList}>
				{Comments.map(comments => {
					return <Comment key={Comment} content={comments} />
				})}				
			</div>
		</article>
	)
}