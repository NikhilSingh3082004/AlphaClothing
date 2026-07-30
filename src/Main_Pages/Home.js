import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate();

  function goto(e){
    navigate('/men')
  }



  return (
    <div >
     <div className="m1">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Link to="/women"><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" className="d-block w-100" alt="..."/></Link>
                  </div>
                  <div className="carousel-item">
                    <Link to="/men"><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" className="d-block w-100" alt="..."/></Link>
                  </div>
                  <div className="carousel-item">
                    <Link to="/men"><img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg " className="d-block w-100" alt="..."/></Link>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
        </div>
        <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-Sectionheader.jpg"className="m1" alt=" "  />
            <div className="brands " onClick={goto}>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png" className="brandImg" alt=""/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png"  className="brandImg" alt=""/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png" className="brandImg" alt=""/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png" className="brandImg" alt=""/> 
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png" className="brandImg" alt=""/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png" className="brandImg" alt=""/>
            </div>

        </div>
        <div >
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-TodaysTopHits-Sectionheader.jpg" className="m1"/>
            <div className="brands" onClick={goto}>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/9/27/91ba6f01-8b03-42ea-a56b-f7b1ae9955821695813688671-unnamed--18-.png"  className="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/26/845f5ff3-ea20-4b4a-9054-6bea864971291695728676810-image_png_28699550.png" className="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/23/ae8b7bc0-8d33-49b6-a27a-cd603cedf7db1695482096735-image_png1772110962.png" className="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/22/ac252347-7082-4716-b008-3a1a37cf89641695381651437-image_png_1793986078.png" className="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/9/27/ce64c71e-65c2-46fd-be0a-7024216cb8541695795383910-image_png_1413216380.png" className="brandImg"/>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/22/801521ae-0867-45f5-b187-b7de6da1b5fa1695381521158-image_jpeg_75093811.jpg" className="brandImg"/>
            </div>
        </div>
        <footer className="footer-distributed">

<div className="footer-left">
    <img src="Utilities/vector.png" className="logo"/>

    <p className="footer-links">
        <a href="MCargos.html">Men</a>
        |
        <a href="Saree.html">Women</a>
        |
        <a href="Kshirt.html">Kids</a>
        |
        <a href="Sofa.html">Living</a>
    </p>

    <p className="footer-company-name">Copyright &copy; 2021 Alpha Clothing All rights reserved</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Rajkot</span>
            Gujarat</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 74**9**258</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:nikhilsingh118089@gmail.com">nikhilsingh118089@gmail.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the company</span>
        Alpha clothing is the best website for clothing accros the internet where you can get your most personallinzed clothes.
        This website is made by <mark>Nikhil</mark>
    </p>
    <div className="footer-icons">
        <a href="https://www.facebook.com" target = "_blank"  rel="noopener noreferrer" ><i className="fa fa-facebook"></i></a>  
        <a href="https://www.instagram.com/harsh_kumar739/?hl=en" target = "_blank"  rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-singh-2a5a61269/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.x.com" target = "_blank"  rel="noopener noreferrer"><i className="fa fa-twitter"  rel="noopener noreferrer"></i></a>
        <a href="https://www.youtube.com" target = "_blank"  rel="noopener noreferrer"><i className="fa fa-youtube"  rel="noopener noreferrer"></i></a>
    </div>
</div>
</footer>
        </div>
  )
}
