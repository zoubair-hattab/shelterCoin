
import Link from 'next/link'


export default function Home() {
  return (
    <>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tamkiin</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/elzero.css" />
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
          <li><a href="#about">About</a></li>
          <li><a href="#Partners">Partners</a></li>
          <li><a href="#Roadmap">Roadmap</a></li>

          <li><a href="https://testnet.bscscan.com/token/0xbed04c467
            2f2ddc77ea56e2076dda5c5588e6c66">Solana</a></li>
             <li><a href="#details">Details</a></li>
             <li><a href="#details">White Paper</a></li>

             <div className="drop-dl">
               <ul>
               <Link href="/ar_index">

                <a>  <img alt="العربية" title="العربية" width="17" height="12"  src="data:image/png;base64,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"/>AR</a>

</Link>
              
                </ul>
                </div>
        </ul>
    
      </div>
    </div>



    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>The 1st Actual Community Crypto Token</h1>
          <p>Sheltere is a token created by  Tmkiin .
            The community asked for a token so here
            it is. Let s slowly intergrate Sheltere into
            crypto together.</p>
          <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xbed04c4672f2ddc77ea56e2076dda5c5588e6c66">PANCAKESWAP</a>
          <a className="passion" href="#">Buy</a>
          
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
      <h2 className="main-title">About</h2>
      <div className="container">
        <img src="imgs/gfx-r.png" alt="" className="image" />
        <div className="info">
          <div className="box">
            <img src="imgs/work-steps-1.png" alt="" />
            <div className="text">
              <h3>WHAT IS Shelter TOKEN</h3>
              <p>
                Help $SHEL  reach
                the moon & above
                And earn staking rewards just by holding $SHEL  token
                
                Fomotion is an experimental community-driven token, which goal is to set new records for market cap and media mentions. Low supply community coin, which is deflationary over time. Each token burned is designed to ensure constant price increase.
                
                Huge marketing plans, aidrops and rewards for each $SHEL  holder. Join our space journey now!
              </p>
            </div>
          </div>
         
        </div>
      </div>

    </div>

  <div className="partners" id="Partners">
    <h2 className="main-title">Partners</h2>
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
      <h2 className="main-title">Road Map</h2>
      <div className="container">
        <div className="box quality">
          <h2>TIMELINE</h2>
          <p>Our team working hardly to make archive lorem ipsum dolor sit amet, consectetur amet, consectetur adipiscing elit.</p>
        </div>

          <section id="conference-timeline">
            <div className="timeline-start">Start</div>
            <div className="conference-center-line"></div>
            <div className="conference-timeline-content">
              <div className="timeline-article">
                <div className="content-left-container">
                  <div className="content-left">
                    <p>Token launch. <span className="article-number">01</span></p>
                  </div>
                </div>
             
                <div className="meta-date">
                  <span className="date">1</span>
                  <span className="month">Mr</span>
                </div>
              </div>
            
              <div className="timeline-article">
                
                <div className="content-right-container">
                  <div className="content-right">
                    <p>Website launch. <span className="article-number">02</span></p>
                  </div>
                </div>
                <div className="meta-date">
                  <span className="date">1</span>
                  <span className="month">Mr</span>
                </div>
              </div>
          
              <div className="timeline-article">
             
                <div className="content-left-container">
                  <div className="content-left">
                    <p>Whitepaper V1 release. <span className="article-number">02</span></p>
                  </div>
                </div>
                <div className="meta-date">
                  <span className="date">1</span>
                  <span className="month">Mr</span>
                </div>
              </div>
            </div>
            <div className="timeline-end">End</div>
          </section>

      </div>
      </div>

      <div className="details" id="details">
      <h2 className="main-title">Details</h2>
      <div className="container">
        <div className="box">
          <i className="fas fa-user-shield fa-4x"></i>
          <h3>Token Symbol</h3>
          <div className="info">
            <a href="#">SHL</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-tools fa-4x"></i>
          <h3>Token Name</h3>
          <div className="info">
            <a href="#">Shelter </a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-map-marked-alt fa-4x"></i>
          <h3>Launch Date</h3>
          <div className="info">
            <a href="#">5 FEB 2022</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-laptop-code fa-4x"></i>
          <h3>Total Supply</h3>
          <div className="info">
            <a href="#">10000000</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-palette fa-4x"></i>
          <h3>Max Buy	</h3>
          <div className="info">
            <a href="#">0%</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-bullhorn fa-4x"></i>
          <h3>Company Name</h3>
          <div className="info">
            <a href="#">Tmkiin</a>
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
            <li><a href="#">About</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Roadmap</a></li>
          
          </ul>
        </div>
         
      
        <div className="box">
          <ul className="links">
         <br/><br/>
            <li><a href="#">Solana</a></li>
            <li><a href="#">Details</a></li>
           
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
