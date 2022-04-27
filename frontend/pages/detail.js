import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const detail = () => {
    return (<Layout>

        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2>รายละเอียดสินค้าและราคา</h2>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
<br></br>
            ตู้เสื้อผ้า <br></br>
            <a href="https://www.instagram.com/p/CN-2oLNBYmd/?igshid=1c69w86q6ghga&fbclid=IwAR1HFpgyB6Utxt9vs4BUQARhIWsvkRUYpLCEbxfzqyvCsUdjDIjYqNlpiRs">
                <img  src="https://th-test-11.slatic.net/p/b31ffbeebbf3770af475723c1c17e50a.jpg_720x720q80.jpg_.webp"  width="250" height="250" ></img></a>   
                <br></br>
         เจลดับกลิ่นโถส้วม <br></br>
            <a href="https://www.instagram.com/p/CN-oCcwB5JS/?igshid=1lnarv6lyi038&fbclid=IwAR0AkNoq7QI571BxpqCo2JeNsUK-cG7bLQTjSi637AOsgBg0-UL1bLvkD6g">
                <img  src="https://cf.shopee.co.th/file/042ee8dad0fb6f29f874785a2809c57d"  width="250" height="250" ></img></a>   
                <br></br>
                โต๊ะเครื่องแป้ง <br></br>
            <a href="https://www.instagram.com/p/CN3pLMyhju-/?igshid=128ge498mz7n1&fbclid=IwAR0IJkkfL4GHhK_3FCoehB_1pTKNrqO49SEIAR6hoXWc7_Qef5IlvfrZZLc">
                <img  src="https://cf.shopee.co.th/file/1094041b0a88333b91bce7d123f8a4fc_tn"  width="250" height="250" ></img></a>   
                <br></br>
                เครื่องซักผ้ามินิ <br></br>
            <a href="https://www.instagram.com/p/CN-5KiNhYYO/?igshid=txpawdn7hmxp&fbclid=IwAR0HdAefM_j1amqNZwWbOcKqaal_APf22DT3oVMUww5NbrojbHLa257-nbs">
                <img  src="https://th-test-11.slatic.net/p/8e2afcc5818506ecf589a194d837cc9d.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                ถุงใส่ผ้า <br></br>
            <a href="https://www.instagram.com/p/CN72niXBnvE/?igshid=4i1ki8hzzzad&fbclid=IwAR1TCoEIA3wMSq-WwC6paJejsFlO2xtsPE0gMs-I0Dx08b9cGs6HobNxbW8">
                <img  src="https://cf.shopee.co.th/file/742ccdb1ee03475d4b1712f1918dc002"  width="250" height="250" ></img></a>   
                <br></br>

        </div>
        <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>

    </Layout>)
}

export default detail