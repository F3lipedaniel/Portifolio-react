import styles from './Comment.module.css';
import { ThumbsUp, Trash, HandsClapping  } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handleLikeComment () {
        setLikeCount(likeCount + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/f3lipedaniel.png'/>
        

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Felipe Daniel</strong>
                            <time title='10 de Agosto às 09:22' dateTime='2022-05-11 09:22:58'>Cerca de 1 hora atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>    
    )
}