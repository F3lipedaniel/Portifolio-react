import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/f3lipedaniel.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Daniel</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='10 de Agosto às 09:22' dateTime='2022-05-11 09:22:58'>Publicado há 1 hora</time>
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
        </article>
    )
}
