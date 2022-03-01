import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tamkiin</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/tamkiinrlt.css" />
    <link rel="stylesheet" href="css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"></link>
    <div className="header" id="header">
      <div className="container">
        <a href="#" className="logo"><img src="imgs/logo.png" alt="" />
</a>
        <ul className="main-nav">
        <li><a href="#about">نبذة عن</a></li>
          <li><a href="#Partners">الشركاء</a></li>
          <li><a href="#Roadmap">خريطة العمل</a></li>

          <li><a href="https://testnet.bscscan.com/token/0xbed04c4672f2ddc77ea56e2076dda5c5588e6c66">سولانا</a></li>
          <li><a href="#details">التفاصيل</a></li>
          <li><a href="#details">الملكية </a></li>

             <div className="drop-dl">
               <ul>
                <li className="lang-item lang-item-5 lang-item-ar current-lang">
                 <Link href="/">

              <a ><img alt="English" 
              title="English" 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"/>EN</a>
         
              </Link>
              </li>
                </ul>
                </div>
        </ul>
    
      </div>
    </div>



    <div className="landing">
      <div className="container">
        <div className="text">
        <h1>أول رمز تشفير للمجتمع الفعلي</h1>
          <p>Sheltere هو رمز تم إنشاؤه بواسطة "Tmkiin". طلب المجتمع رمزًا مميزًا ، لذا ها هو. دعونا ندمج Sheltere ببطء في العملات المشفرة معًا.</p>
          <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xbed04c4672f2ddc77ea56e2076dda5c5588e6c66">PANCAKESWAP</a>
          <a className="passion" href="#">اشتري الان</a>
          
        </div>
        <div className="image">
          <img src="imgs/mining.png" alt="" />
        </div>
      </div>
      <a href="#about" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>

    <div className="about" id="about">
      <h2 className="main-title">نبذة عن</h2>
      <div className="container">
        <img src="imgs/gfx-r.png" alt="" className="image" />
        <div className="info">
          <div className="box">
            <img src="imgs/work-steps-1.png" alt="" />
            <div className="text">
            <h3>ما هو رمز Shelter</h3>
              <p>

              
                ساعد $ SHEL في الوصول إلى القمر وما فوق واكسب مكافآت Staking فقط من خلال الاحتفاظ برمز $ SHEL المميز. عملة المجتمع منخفضة العرض ، وهي انكماشية بمرور الوقت. تم تصميم كل رمز تم حرقه لضمان زيادة ثابتة في السعر. خطط تسويقية ضخمة ومساعدات ومكافآت لكل حامل SHEL دولار. انضم إلى رحلتنا الفضائية الآن!</p>
            </div>
          </div>
         
        </div>
      </div>

    </div>


    <div className="partners" id="Partners">
    <h2 className="main-title">الشركاء</h2>
    <div className="container">

      <div className="box">
        <div className="image">
          <img src="imgs/1.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/2.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/3.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/4.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/5.png" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="imgs/6.png" alt="" />
        </div>
      </div>
    </div>
  </div>

 
    <div className="roadmap" id="Roadmap">
    <h2 className="main-title">خريطة العمل 
      </h2>
      <div className="container">
        <div className="box quality">
          <h2>الجدول الزمني</h2>
          <p>يعمل فريقنا بشكل جدي ومتكامل لانجاح هذه مشاهدة تعبر الاولي التي تم انشاء بواسط شركة</p>
        </div>
        <section id="conference-timeline">
            <div className="timeline-start">تاريج اليدية </div>
            <div className="conference-center-line"></div>
            <div className="conference-timeline-content">
              <div className="timeline-article">
                <div className="content-left-container">
                  <div className="content-left">
                    <p>تاريخ الانشاء. <span className="article-number">01</span></p>
                  </div>
                </div>
             
                <div className="meta-date">
                  <span className="date">01</span>
                  <span className="month">مارس</span>
                </div>
              </div>
              
              <div className="timeline-article">
                
                <div className="content-right-container">
                  <div className="content-right">
                    <p>اطلاق الموقع التعريفي بالعملة <span className="article-number">02</span></p>
                  </div>
                </div>
                <div className="meta-date">
                  <span className="date">01</span>
                  <span className="month">مارس</span>
                </div>
              </div>
              <div className="timeline-article">
             
                <div className="content-left-container">
                  <div className="content-left">
                    <p>النسخة التجربية . <span className="article-number">02</span></p>
                  </div>
                </div>
                <div className="meta-date">
                  <span className="date">01</span>
                  <span className="month">مارس</span>
                </div>
              </div>
            </div>
            <div className="timeline-end">النهاية</div>
          </section>

      </div>
      </div>

      <div className="details" id="details">
      <h2 className="main-title">التفاصيل</h2>
      <div className="container">
        <div className="box">
          <i className="fas fa-user-shield fa-4x"></i>
          <h3>رمز العملة</h3>
          <div className="info">
            <a href="#">SHL</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-tools fa-4x"></i>
          <h3>اسم العملة</h3>
          <div className="info">
            <a href="#">Shelter </a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-map-marked-alt fa-4x"></i>
          <h3>تاريج اليدية</h3>
          <div className="info">
            <a href="#">5 مارس 2022</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-laptop-code fa-4x"></i>
          <h3>عدد الجملي للعمة </h3>
          <div className="info">
            <a href="#">10000000</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-palette fa-4x"></i>
          <h3>نسبة بيع العملة </h3>
          <div className="info">
            <a href="#">0%</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-bullhorn fa-4x"></i>
          <h3>اسم المالك</h3>
          <div className="info">
            <a href="#">تمكين</a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer">
      <div className="container">
        <div className="box">
            <a href="#" className="logo"><img src="imgs/logo.png" alt="" />
          </a>
          </div>

          <div className="box">
          <ul className="links">
          <li><a href="#about">نبذة عن</a></li>
            <li><a href="#partenrs">الشركاء</a></li>
            <li><a href="#roadmap">خريطة العمل</a></li>
          
          </ul>
        </div>
         
      
        <div className="box">
          <ul className="links">
         <br/><br/>
         <li><a href="#">سولانا</a></li>
            <li><a href="#details">التفاصيل</a></li>
           
          </ul>
        </div>
        <div className="box">
          <br/><br/>
          <div className="line">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <div className="info">info@tmkiin.com</div>
          </div>
         
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+12342324552</span>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    </>
   
  )
}
