import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt}) {
//    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
//        day: '2-digit',
//        month: 'long',
//        hour: '2-digit',
//        minute: '2-digit'
//    })
    
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='10 de Agosto às 09:22' dateTime='2022-05-11 09:22:58'>
                    
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '} <a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto </a>{' '} 
                    <a href=''>#nlw</a>{' '} 
                    <a href=''>#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea
                placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}
