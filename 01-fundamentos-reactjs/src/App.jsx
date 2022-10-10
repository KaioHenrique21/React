import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
	{
		id: 1,
      author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Kaio Henrique',
			role: 'Web Developer @ Eng4Tech'
		},
		content: [
		  { type: 'paragraph', content: 'Fala galeraa 👋'} ,
			{ type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'} 
		],
    publishedAt: new Date('2022-10-06 20:00:00')
	},
	{
		id: 2,
      author: {
			avatarUrl: 'https://github.com/KaioHenrique21.png',
			name: 'João Caliman',
			role: 'Back-End Developer @ Eng4Tech'
		},
		content: [
		  { type: 'paragraph', content: 'Fala galeraa 👋'} ,
			{ type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'} 
		],
    publishedAt: new Date('2022-10-07 20:00:00')
	},
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

       <main>
          {posts.map(posts => {
            return (
            <Post 
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div> 
    
  )
}


