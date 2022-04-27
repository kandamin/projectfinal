import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const delivery = () => {
    return (<Layout>
        <Head>
            <title>วิธีจัดส่ง</title>
            <meta charset="utf-8"></meta>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
           
        </Head>
        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2> วิธีจัดส่ง </h2>
            <b> ร้านเรามีขนส่งให้เลือกมากมายทั้งไปรษณีย์, Kerry, DHL, J&t, Flash Express </b> 
            <ul>
            <br></br>
            <img  src="https://image.freepik.com/vector-gratis/repartidor-plano-personaje-dibujos-animados-entrega-scooter_78354-60.jpg" alt="Trulli" width="500" height="500"></img>
            <br></br>
            <br></br>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">

    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
         Item #1 Ems ราคา 60 บาท
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>Ems</code><br></br>
        ส่งแบบ Ems ในจังหวัดเดียวกันใช้เวลาจัดส่ง 2 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 2-3 วัน
        </div>
    </div>
  </div>
  <div class="accordion-item">


    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Item #2 ลทบ ราคา 40 บาท
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>ลทบ</code> <br></br>
      ส่งแบบ ลทบ ในจังหวัดเดียวกันใช้เวลาจัดส่ง 3 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 3-5 วัน
      </div>
    </div>
  </div>
  <div class="accordion-item">


    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Item #3 Kerry ราคา 60 บาท
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>Kerry</code><br></br>
      ส่งแบบ Kerry ในจังหวัดเดียวกันใช้เวลาจัดส่ง 1 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 2-3 วัน
       </div>
      
  </div>
  <div class="accordion-item">
       

       <h2 class="accordion-header" id="flush-headingfour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      Item #4 DHL ราคา 60 บาท
      </button>
    </h2>
    <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>DHL</code> <br></br>
      ส่งแบบ DHL ในจังหวัดเดียวกันใช้เวลาจัดส่ง 3 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 2-3 วัน
      </div>
    </div>
  </div>
  <div class="accordion-item">

  <h2 class="accordion-header" id="flush-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
      Item #5 J&t ราคา 60 บาท
      </button>
    </h2>
    <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>J&t</code> <br></br>
      ส่งแบบ J&t ในจังหวัดเดียวกันใช้เวลาจัดส่ง 3 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 2-3 วัน
      </div>
    </div>
  </div>
  <div class="accordion-item">

  <h2 class="accordion-header" id="flush-headingfive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
      Item #6 Flash Express ราคา 60 บาท
      </button>
    </h2>
    <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">วิธีจัดส่ง ที่ลูกค้าเลือก คือ <code>Flash Express</code> <br></br>
      ส่งแบบ Flash Express ในจังหวัดเดียวกันใช้เวลาจัดส่ง 2 วัน นับวันที่จัดส่ง, ต่างจังหวัดใช้เวลา 1-2 วัน
      </div>
    </div>
  </div>
  <div class="accordion-item">


    </div>
  </div>
</div>
            </ul><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </div>



        <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    </Layout>)
}

export default delivery