import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id:1,
    author: {
      avatarUrl:'src/assets/paulo-profile-pic.jpg',
      name: 'Paulo Lima',
      role: 'Messias da Tecnologia'
    },
    content:[
      {type: 'paragraph', content: 'Peidos deveriam se chamar cocô aerosol, "peido" é muito informal.'},
      {type: 'link', content: '#VaiTomarNoCuCLT!'},
    ],
    publishedAt: new Date('2023-07-19 10:25:48'),
  },
  {
    id:2,
    author: {
      avatarUrl:'src/assets/josi-profile-pic.jpg',
      name: 'Josi',
      role: '...'
    },
    content:[
      {type: 'paragraph', content: 'Gente onde ficam os vídeos de receita nesse negócio? 🤔'},
      {type: 'link', content: '#confusa'},
    ],
    publishedAt: new Date('2023-07-22 12:42:21'),
  },
]

export function App () {
  return(
    <div>

      <Header />
      
      <div className={styles.wrapper}>

      <Sidebar />

        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </div>
    
  )
}