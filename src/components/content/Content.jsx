import React from 'react';
import illustration1 from "../../assets/illustration-1.svg";
import illustration2 from "../../assets/illustration-2.svg";
import iconArrow from "../../assets/icon-arrow.svg";
import iconQuotes from "../../assets/icon-quotes.svg";
import avatarTestimonial from "../../assets/avatar-testimonial.jpg";
import curveDesktop from "../../assets/bg-curve-desktop.svg";
import curveMobile from "../../assets/bg-curve-mobile.svg";

function Content() {
    return (
        <>
            <section className='flex flex-col-reverse px-8 py-20 md:grid md:grid-cols-2 gap-8 max-w-7xl mx-auto md:place-items-center'>
                <article className='text-center md:text-left'>
                    <h1 className='font-bold text-4xl mb-8 '>All your files in one secure location, accessible anywhere.</h1>
                    <p className='mb-10'>Fylo stores your most important files in one secure location.
                        Access them wherever you need, share and collaborate with friends,
                        family, and co-workers.</p>
                    <form className='lg:flex items-center gap-2'>
                        <input type="email" name='email' id='email' placeholder='Enter your email..' required
                            className='border border-gray-800 rounded py-3 px-4 text-sm w-full lg:w-9/12' />
                        <button type="submit" className='btn w-full py-3 px-4 mt-4 lg:mt-0 text-sm text-white font-bold tracking-wide rounded shadow lg:w-auto'>Get Started</button>                </form>
                </article>
                <article>
                    <img src={illustration1} alt="" />
                </article>
            </section>

            {/* <div>
                <source media='(min-width:768px)' srcSet={curveDesktop} />
                <img src={curveMobile} alt="" className='w-full' />
            </div> */}


            <section style={{ backgroundColor: "#f8f8fe" }} className="px-8 py-20 flex flex-col-reverse gap-16 md:grid md:grid-cols-2 md:gap-16 max-w-7xl mx-auto">

                <article className=''>
                    <h2 className='text-center font-bold text-3xl mb-8 md:text-left'>Stay productive, wherever you are</h2>
                    <p className='mb-4 '>Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.</p>
                    <p className='mb-10'>Securely share files and folders with friends, family and colleagues for
                        live collaboration. No email attachments required!</p>
                    <a href="#" className='link flex items-center gap-2 underline'>See how Fylo works <img src={iconArrow} className='w-5' alt="" /></a>

                    <div className='mt-10 p-8 bg-white shadow rounded '>
                        <img src={iconQuotes} alt="" className='w-5 mb-4' />
                        <p className='mb-10'>Fylo has improved our team productivity by an order of magnitude. Since
                            making the switch our team has become a well-oiled collaboration machine.</p>
                        {/* aside */}
                        <div className='flex items-center justify-start'>
                            <img src={avatarTestimonial} alt="" srcset="" className='w-12 h-12 rounded-full' />
                            <ul>
                                <li className='font-bold text-lg text-gray-800'>Kyle Burton</li>
                                <li className='text-gray-600 text-small'>Founder & CEO, Huddle</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article>
                    <img src={illustration2} alt="" />
                </article>
            </section>
        </>
    )
}

export default Content