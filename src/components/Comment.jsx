import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="src\assets\anivan-profile-pic.jpg" alt="" /> 
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anivan</strong>
                            <time title='09 de Julho de 2023 às 22:25h'> Cerca de um tempinho atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Excluir comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}