import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
    return(
        <div className={styles.comment}>
            <img src="src\assets\anivan-profile-pic.jpg" alt="" /> 
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anivan</strong>
                            <time title='09 de Julho de 2023 às 22:25h'> Cerca de um tempinho atrás </time>
                        </div>

                        <button title='Excluir comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p> Vai te fuder Paulo </p>
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