import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>  
        
            <header>
                <div className={styles.author}>
                    <Avatar src="src\assets\paulo-profile-pic.jpg" alt="" />
                    <div className={styles.authorInfo}>
                        <strong> Paulo Lima </strong>
                        <span> A Porra Toda </span>
                    </div>
                </div>

                <time title='09 de Julho de 2023 às 17:25h'> Publicado a um tempinho </time>
            </header>

            <div className={styles.content}>

            <p>Peidos deveriam se chamar cocô aerosol, "peido" é muito informal.</p>
               
            <p>
                <a href="https://www.youtube.com/watch?v=wko2BMFyVF8" target='blank'>#VaiTomarNoCuCLT!</a> {' '} 
                <a href="https://www.youtube.com/watch?v=pu0Gh3uJcH8" target='blank'>#NeuroCiência</a>
            </p> 
            
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea placeholder=' Deixe um comentário ' />

                <footer>
                    <button type="submit" >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>
    
        </article>
    );
}