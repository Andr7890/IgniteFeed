import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App () {
  return(
    <div>

      <Header />
      
      <div className={styles.wrapper}>

      <Sidebar />

        <main>
          
          <Post 
            author='Paulo Lima'
            content='Peidos deveriam se chamar cocô aerosol, "peido" é muito informal. (vai tomar no cu CLT!)'
          />

          <Post 
            author='Anivan Alves' 
            content='Rabuja cadê? Cadê o Dééééééé' 
          />

          <Post
          author='Josi(Rosen)'
          content='Gente onde ficam os vídeos de receita nesse negócio? (🤔)'
          />

        </main>

      </div>

    </div>
    
  )
}