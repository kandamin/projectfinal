import Link from 'next/link'
import styles from '../styles/menu.module.css'
const Navbar = () => (

    
    <div >

<meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
    <div class="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark ">
  <div class="container-fluid" >
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link href="/register"><a class="nav-link active"> ลงทะเบียน </a></Link>  
            </li>
            <li class="nav-item">
               <Link href="/login"><a class="nav-link active"> เข้าสู่ระบบ </a></Link>
            </li>
            <li class="nav-item">
               <Link href="/"><a class="nav-link active"> หน้าหลัก </a></Link> 
            </li>
            <li class="nav-item">
               <Link href="/profile"><a class="nav-link active"> เกี่ยวกับเรา </a></Link> 
            </li>
            <li class="nav-item">
               <Link href="/detail"><a class="nav-link active"> รายละเอียดสินค้า </a></Link> 
            </li>
            <li class="nav-item">
               <Link href="/shops"><a class="nav-link active"> รายการสินค้า </a></Link> 
            </li>
            <li class="nav-item">
               <Link href="/admin"><a class="nav-link active"> เพิ่มรายการ </a></Link> 
            </li>
            

            <li class="nav-item">
            <div className={styles.dropdown}>
                <span>
                   <a class="nav-link active">วิธีการสั่งซื้อ</a> 
                </span>
                <div className={styles.content}>
                    <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/delivery">วิธีจัดส่ง</a></p>
                    <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/order">แจ้งที่อยู๋</a></p>
                    <p><a class="nav-link active btn btn-sm btn-outline-secondary" href="/Transfermoney">โอนเงิน</a></p>
                    
                </div>
            </div>
            </li>


            <li class="nav-item">
               <Link href="/comment"><a class="nav-link active"> แสดงความคิดเห็น </a></Link> 
            </li>
            <li class="nav-item">
               <Link href="/logout"><a class="nav-link active"> Logout </a></Link> 
            </li>
     </ul>
    </div>




    </div>
    <br/>
    <br/>
    </div>
)

export default Navbar
