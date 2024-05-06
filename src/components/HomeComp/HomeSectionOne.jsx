import Image from 'next/image'
import React, { useState } from 'react'
import image1 from '../images/hero-img-1 (1).png'
import image2 from '../images/hero-img-2.png'
import banner1 from '../images/product-banner-img-1.png'
import banner2 from '../images/product-banner-img-2.png'
import banner3 from '../images/product-banner-img-3.png'
import './HomeSectionOne.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import { PiArmchair } from "react-icons/pi";
import { PiChairThin } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { GiDesk } from "react-icons/gi";
import Navbar from '../Navbar'

const HomeSectionOne = () => {

  const [showSection1, setShowSection1] = useState(true)
  const [showSection2, setShowSection2] = useState(false)

  const handleShowSection1 = () => {
    setShowSection1(true);
    setShowSection2(false);
  };


  const handleShowSection2 = () => {
    setShowSection1(false);
    setShowSection2(true);
  };

  
  const [lightModeState, setLightModeState] = useState(true)
    
  const colorChangeFunc = () => {
    setLightModeState(!lightModeState)
  }



  return (
    <div>
    <Navbar theColorFunc={colorChangeFunc} navBarcolor = {lightModeState}/>

    <div className={lightModeState === true ? 'lightMode' : 'darkMode'}>

      <div className='dotDiv'>
        {showSection1 === true ? (
          <p onClick={handleShowSection1} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
        ) : (
          <p onClick={handleShowSection1}><GoDotFill /></p>
        )}
        

        {showSection2 === true ? (
          <p onClick={handleShowSection2} style={{color : 'orange', fontSize : 20}}><FaRegDotCircle /></p>
        ) : (
          <p onClick={handleShowSection2}><GoDotFill /></p>
        )}
        
      </div>


      {showSection1 === true && 

        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button className='slide-button'>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image1}  alt='' className='images'/>
            </div>
          </div>
        </div>
      }
      

      {
        showSection2 === true &&
        <div className='firstSectionDiv'>
          <div className='leftAndRightDiv'>

            <div className='leftSectionOne'>
                <h2 >Unique & Stylish</h2>
                <h2 className='furnDesign'>Furniture</h2>
                <p>
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. 
                </p>

                <button>Shop Now <FaLongArrowAltRight /></button>
            </div>

            <div className='rightSectionOne'>
              <Image src={image2}  alt='' className='images'/>
            </div>
          </div>
        </div>
      }


      <div className='categorySection'>
        <h2>Choose Your Category</h2>

        <div className='categoryDiv'>
          <div className='eachCategory'>
            <div><LuArmchair /></div>
            <h3>Chair</h3>
            <p><GoDotFill />25 Items Chair</p>
          </div>


          <div className='eachCategory'>
            <div><PiArmchair /></div>
            <h3>Chair</h3>
            <p><GoDotFill />25 Items Chair</p>
          </div>


          <div className='eachCategory'>
            <div><PiChairThin /></div>
            <h3>Chair</h3>
            <p><GoDotFill />25 Items Chair</p>
          </div>



          <div className='eachCategory'>
            <div><IoBedOutline /></div>
            <h3>Chair</h3>
            <p><GoDotFill />25 Items Chair</p>
          </div>


          <div className='eachCategory'>
            <div><GiDesk /></div>
            <h3>Chair</h3>
            <p><GoDotFill />25 Items Chair</p>
          </div>
        </div>
      </div>


      <div className='bannerSection'>
        <div className='bannerDivOne'>
          <Image src={banner1} alt='' className='bannImage'/>

          <div className='banerDivOneText'>
            <h4>UP TO 20% OFF</h4>
            <h2>Modern & Minimal</h2>
            <p>Don’t miss avail the saving opportunity</p>
            <button>Shop Now </button>
          </div>
        </div>

        <div className='bannerDivTwo'>
          <Image src={banner2} alt='' className='bannImage'/>

          <div className='banerDivTwoText'>
            <h4>UP TO 20% OFF</h4>
            <h2>Modern & Minimal</h2>
            <p>Don’t miss avail the saving opportunity</p>
            <button>Shop Now </button>
          </div>
        </div>
      </div>


      <div className='bannerSection2'>
        <Image src={banner3} alt='' className='bannerImage2'/>
        
        
        <div className='bannerDiv2'>
          <h3>UP TO 20% OFF</h3>
          <h2>New Sofa Collections</h2>
          <p>Don’t miss avail the saving opportunity</p>
          <button>Shop Now</button>
        </div>
      </div>
      
    </div>
  </div>
)
}

export default HomeSectionOne