import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const delivery = () => {
    return (<Layout>
        <Head>
            <title>ส่งสลิป</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> ส่งสลิป</h2>
            <br>
            </br>
            <img  src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/p843x403/178614586_253861719811658_5261776446974463144_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFemrtvZK3VjjuoqXTBOJ_7xjtxRbIep8_GO3FFsh6nz_1bZUmXTcS2HEWLQ3ZeeMAPCHoN7bamHXx92viKcDaO&_nc_ohc=tn9iZP8x9WUAX9NtvVi&_nc_ht=scontent.fbkk5-5.fna&tp=6&oh=23529ec54e8609db780ff95eb1641cdf&oe=60AB4668" alt="Trulli" width="500" height="500"></img>        
  <br>
            </br>
            <a href="https://line.me/R/ti/p/%40zhv2221x"><img  src="https://cdn.icon-icons.com/icons2/846/PNG/512/Line_icon-icons.com_67183.png"  width="300" height="300" ></img></a>   
       
<div>
  <label for="formFileLg" class="form-label">ส่งสลิป</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file"/>
 
  
  <br></br>
  <br></br>
</div>






        </div>

    </Layout>)
}

export default delivery