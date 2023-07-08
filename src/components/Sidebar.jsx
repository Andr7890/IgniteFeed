import { PencilSimpleLine } from "phosphor-react";

import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="src\assets\mengao-torcida.jpg" alt="" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="src\assets\profile-pic.jpg" alt="" />

                <strong>André "Dé"</strong>

                <span>WebDeveloperJr</span>
            </div>

            <footer>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank">
                   <PencilSimpleLine size={20}/> 
                   Edite seu perfil
                </a>
            </footer>
        </aside>
    );
}