import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';
import styles from './App.module.css';

import './global.css';
 
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post 
        author= 'Felipe Daniel' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum soluta qui ex eligendi praesentium fuga vel beatae laboriosam expedita temporibus quasi ipsum modi aperiam, ullam pariatur officiis, eaque suscipit quisquam.'
      />
      <Post
        author ="Gabriel"
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum soluta qui ex eligendi praesentium fuga vel beatae laboriosam expedita temporibus quasi ipsum modi aperiam, ullam pariatur officiis, eaque suscipit quisquam.'
      />
      </main>
      </div>
    </div>
  )
}



