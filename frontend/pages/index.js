import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

import { useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import Link from 'next/link'

 // export default function Home({ token }) {
  export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div className={styles.gridContainer}>
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }
 
  return (
    <Layout>
    <Head>
        <title>Home Page</title>
    </Head>
    <div className={styles.container}>
        <Navbar />
        <br></br>

        <h1>TANYONG SEAFOOD</h1>
        <h1>welcome</h1>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>


        <img  src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.6435-9/p843x403/175096253_2893848187520098_2695457136069938488_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MhrCpVD3CUsAX8matxO&_nc_ht=scontent.fbkk14-1.fna&tp=6&oh=206d6df77fa83dcbf9f47a6477fb2698&oe=60A32CB6" alt="Trulli" width="500" height="500"></img>
<p>
        <a href="https://www.facebook.com/"><img  src="https://i.pinimg.com/564x/8e/4d/e1/8e4de115653dbdb20efa34b9d5dcec35.jpg"  width="50" height="50" ></img></a>

        <a href="https://www.instagram.com/">
          <img  src="https://i.pinimg.com/564x/77/02/ad/7702ad7624932f6d1ea20022c4002b67.jpg"  width="50" height="50" ></img></a>      

          <a href="https://line.me/R/ti/p/%40zhv2221x"><img  src="https://i.pinimg.com/564x/d4/3d/38/d43d38144d427db1a75973a213678fba.jpg"  width="50" height="50" ></img></a>   
        </p>
        
        
    </div>
    <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
    
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
