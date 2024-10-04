import React from 'react'
import moodystudio from '../../Assets/MOODY STUDIO.svg'
import vector from '../../Assets/Vector.svg'
import group1 from '../../Assets/Group (1).svg'
import group40 from '../../Assets/Group 40.svg'
import group from '../../Assets/Group.svg'
import vector1 from '../../Assets/Vector1.png'
import vector2 from '../../Assets/Vector2.png'
import vector3 from '../../Assets/Vector3.png'
import hero from '../../Assets/hero.png'
import chair from '../../Assets/chair.jpg'
import Vase from '../../Assets/Vase.jpg'
import towel from '../../Assets/towel .png'
import star from '../../Assets/star.svg'
import star1 from '../../Assets/star1.svg'
import glassbox from '../../Assets/glassbox.png'
import plat from '../../Assets/plat.png'
import glassbox1 from '../../Assets/glassbox1.png'
import placemant from '../../Assets/placemant.png'
import basket from '../../Assets/basket.png'

import '../../App.css'

function Navbar() {
    return (
        <>
            <nav className='navbar container mx-auto'>
                <div className="top-nav flex justify-between pt-[34px] pb-[19px] border-b border-black">
                    <a href="...">
                        <img src={moodystudio} alt="" className='' />
                    </a>
                    <div className='flex items-center space-x-5'>
                        <a href="...">
                            <img src={vector} alt="" />
                        </a>
                        <a href="...">
                            <img src={group40} alt="" />
                        </a>
                        <a href="...">
                            <img src={group} alt="" />
                        </a>
                        <a href="...">
                            <img src={group1} alt="" />
                        </a>
                    </div>
                </div>
                <div className='bottom-nav border-b border-black'>
                    <ul className='py-[38px] flex flex-wrap justify-evenly'>
                        <li>
                            <a href="..." className='text-base font-bold'>HOME</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>STORE</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>ACCESSORIES</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>BRAND</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>PAGES</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>NEWS</a>
                        </li>
                        <li>
                            <a href="..." className='text-base font-bold'>CONTACT US</a>
                        </li>
                    </ul>
                </div>
                <div className='pt-[20px] pb-[29px] flex items-center justify-around'>
                    <div className='flex items-center space-x-4'>
                        <img src={vector1} alt="" />
                        <p className='text-xs font-bold'>FREE SHIPPING</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src={vector2} alt="" />
                        <p className='text-xs font-bold'>100% MONEY BACK</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src={vector3} alt="" />
                        <p className='text-xs font-bold'>SUPPORT 24/7</p>
                    </div>
                </div>
            </nav>

            <section className='hero-section py-14 mb-6'>
                <div className='container lg:px-10 mx-auto flex items-center'>
                    <div className=''>
                        <img src={hero} alt="" className='' />
                    </div>
                    <div className='hero'>
                        <p className='text-xl font-bold mb-[25px]'>HOT DEALS THIS WEEK</p>
                        <h1 className='hero-text text-5xl font-bold mb-[40px]'>SALE UP 50% MODERN FURNITURE</h1>
                        <button className='w-[124px] h-[48px] border border-black text-sm font-bold'>VIEW NOW</button>
                    </div>
                </div>
            </section>


            <section className="container px-5 md:px-10 lg:px-10 mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
                <div className="card-left flex items-center">
                    <div>
                        <img src={chair} alt="INY Vintage Chair" className="sm:size-40 w-64 h-64 object-cover" />
                    </div>
                    <div>
                        <h2 className="sm:text-lg lg:text-2xl font-bold sm:mb-5 mb-10">INY VINTAGE CHAIR</h2>
                        <button className="w-[124px] h-[48px] border border-black text-sm font-bold">
                            VIEW DETAILS
                        </button>
                    </div>
                </div>
                <div className="card-right flex items-center">
                    <div>
                        <img src={Vase} alt="Large Terracotta Vase" className="sm:size-40 w-64 h-64 object-cover" />
                    </div>
                    <div>
                        <h2 className="sm:text-lg text-2xl font-bold sm:mb-5 mb-10">LARGE TERRACOTA VASE</h2>
                        <button className="w-[124px] h-[48px] border border-black text-sm font-bold">
                            VIEW DETAILS
                        </button>
                    </div>
                </div>
            </section>

            <section className='container px-10 md:px-10 lg:px-10 mx-auto card-group'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:justify-center'>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={towel} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Linen Beach Towel</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={glassbox} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={plat} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={plat} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={glassbox1} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={placemant} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={basket} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>
                    <div className='crad'>
                        <div className='card-img mb-8'>
                            <img src={basket} alt="" className='sm:w-[100%]' />
                        </div>
                        <div className='card-body space-y-3'>
                            <p className='mb-3 text-lg font-bold'>Square Clear Glass Box</p>
                            <div className='flex space-x-1'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star1} alt="" />
                            </div>
                            <h3 className='text-2xl font-bold'>30$</h3>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Navbar
