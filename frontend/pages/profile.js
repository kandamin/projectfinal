import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>เกี่ยวกับเรา</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>เกี่ยวกับเรา</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     LittlepigShop เป็นร้านขายของที่ขายทุกอย่างที่แม่ค้าอยากจะขาย มีทุกอย่างตั้งแต่เครื่องสำอางค์ยันเฟอนิเจอร์แต่งบ้าน<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; หากลูกค้าอยากได้อะไร แม้ในร้านเราไม่มีแม่ค้าก็สรรหามาให้จนได้ เพราะฉนั้นไว้ใจร้านเราได้ ร้านเราจัดส่งได้ทุกประเภท<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แล้วแต่ลูกค้ารีเควสมา <br></br>
                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                    <img  src="https://media.allonline.7eleven.co.th/pdmain/363415_01_baby_bright_lip_cheek_velvet_cherry_blossom_2_4_g.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://online.karmarts.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/1/01.lip_cheekcolor-stain-essence-01.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://cf.shopee.co.th/file/23062df871c4c570e586dca25025ea47" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://images-na.ssl-images-amazon.com/images/I/61UqvcCJGwL._SL1001_.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://img.joomcdn.net/e7d22913e36fb642ac21f9c345c90b60b0fca410_original.jpeg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://th-test-11.slatic.net/p/478da9fc972809962979db1713947e7d.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    ติดต่อเราได้ที่<br></br>
                    เบอร์โทรศัพท์ 083-394-9319<br></br>
                    Facebook : Peejara Pajaree<br></br>
                    Lind Id : @zhv2221x<br></br>
                    <img  src="https://img.icons8.com/bubbles/2x/facebook-new.png"  width="50" height="50"></img> 
                    <img  src="https://i.pinimg.com/originals/2f/8b/6b/2f8b6be58b676791c6948de91ef4fd00.png"  width="50" height="50"></img>
                    <img  src="https://img.icons8.com/bubbles/2x/instagram.png"  width="50" height="50"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
