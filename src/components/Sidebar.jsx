import { PencilSimpleLine } from "phosphor-react";

import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="src\assets\mengao-torcida.jpg" alt="" 
            />

            <div className={styles.profile}>
                <Avatar src="src\assets\profile-pic.jpg"/>

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