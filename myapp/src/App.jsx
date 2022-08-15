import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';
import styles from './App.module.css';

import './global.css';
 



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/f3lipedaniel.png',
      name: 'Felipe Daniel',
      role: 'Web developer',

    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('14-08-2022 15:59:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/omardepaiva.png',
      name: 'Omar Paiva',
      role: 'Web developer',

    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('10-08-2022 15:59:00'),
  },
  
]
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
          
            />
          )
        })}
      </main>
      </div>
    </div>
  )
}



