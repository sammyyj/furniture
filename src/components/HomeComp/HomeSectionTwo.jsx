import React, { useState } from 'react'
import './HomeSectionTwo.css'
import { TiStarFullOutline } from "react-icons/ti";
import { dataOne } from '../module';
import { dataTwo } from '../module';
import Image from 'next/image';
import image10 from '../images/product-banner-img-4.png'
import image11 from '../images/product-banner-img-5.png'
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { RiShareForward2Fill } from "react-icons/ri";

const HomeSectionTwo = () => {

    const [showDetailsOne, setShowDetailsOne] = useState(true)
    const [showDetailsTwo, setShowDetailsTwo] = useState(false)
    const [showDetailsThree, setShowDetailsThree] = useState(false)
    const [showDetailsFour, setShowDetailsFour] = useState(false)

    const handClickOne = () => {
        setShowDetailsOne(true)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }

    const handClickTwo = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(true)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }


    const handClickThree = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(true)
        setShowDetailsFour(false)
    }


    const handClickFour = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(true)
    }


    // console.log(dataOne);
    // console.log(dataTwo);

  return (
    <div className='homeSectionTwo'>

        <div className='featuredDiv'>
            <h2>Featured Collections</h2>
            <p>
                Globally drive principle-centered 
                strategic theme areas vis-a-vis 
                goal-oriented <br /> best practices state 
                of the Dynamically.
            </p>
        </div>


        {/* ======= Sectiom Two First Div ==== */}
        <div>
            <ul className='listClass'>
                
                <li onClick={handClickOne} className={showDetailsOne === true ? 'activeList' : ''}>Gaming Chair <sup>12</sup></li>
                <li onClick={handClickTwo} className={showDetailsTwo === true ? 'activeList' : ''}>Dining Set <sup>10</sup></li>
                <li onClick={handClickThree} className={showDetailsThree === true ? 'activeList' : ''}>Office Table <sup>20</sup></li>
                <li onClick={handClickFour} className={showDetailsFour === true ? 'activeList' : ''}>Office Desk <sup>09</sup></li>
            </ul>

            <div className='productDiv'>

                {showDetailsOne === true && (
                    <>
                        {dataOne.map((firstData, index)=>(
                            <div key={index} className='eachProduct'>
                                <Image src={firstData.image} alt="" className='images'/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsTwo === true && (
                    <>
                        {dataTwo.map((firstData, index)=>(
                            <div key={index} className='eachProduct'>
                                <Image src={firstData.image} alt="" className='images'/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsThree === true && (
                    <>
                        {dataOne.map((firstData, index)=>(
                            <div key={index} className='eachProduct'>
                                <Image src={firstData.image} alt="" className='images'/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsFour === true && (
                    <>
                        {dataTwo.map((firstData, index)=>(
                            <div key={index} className='eachProduct'>
                                <Image src={firstData.image} alt="" className='images'/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                                


                                <div className='displayIcons showDisplayIcons'>
                                    <div>
                                        <MdFavoriteBorder />
                                    </div>

                                    <div>
                                        <FaRegEye />
                                    </div>

                                    <div>
                                        <RiShareForward2Fill />
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </>
                )}
            </div>
        </div>


        {/* ====== Section Two second div == */}
        <div className='saleDiv'>
            <div className='saleDivOne'>
                
              <Image src={image10}  alt='' className='images1'/>
              
              <div className='saleDivOneText'>
                  <h4>MEGA SALE 65% OFF</h4>
                  <h2>New Sofa Collections</h2>
                  <p>Assertively target market-driven intellectual capital <br /> free text quiz Bibendum holistic.</p>
                  <button>Shop Now </button>
                </div>
            </div>

            <div className='saleDivTwo'>
            <Image src={image11}  alt='' className='images2'/>

            <div className='saleDivTwoText'>
                  <h4>MEGA SALE 65% OFF</h4>
                  <h2>Chair Collections</h2>
                  <button>Shop Now </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSectionTwo