import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    function circleClassName(size) {
        return `circle circle_size_${size} circle__${size}_animated`;
    }

    return (
        <>
     <section className="banner-area fix p-relative">
         <div className="banner-bg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="hero-content">
                        <span>Learn New Skills & Popular Courses</span>
                        <h2 className="hero-title mb-35 text-black">For Every Student, Every <i>Classroom</i>.</h2>
                        <p>Dramatically supply transparent deliverables before backward<br />comp internal or "organic"
                           sources. Competently leverage other.</p>
                        <div className="tp-banner-btn">
                           <Link href="/course-list" className="tp-btn">Explore Courses</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="banner-info d-none">
                        <ul>
                           <li><span>235K</span>Worldwide Students</li>
                           <li><span>3.5K</span>Free Pro Courses</li>
                           <li><span>4.7<i className="fi fi-rr-star "></i></span>Worldwide Review</li>
                        </ul>
                     </div>
                  </div>
                  <div className="banner-shape d-none d-lg-block">
                     <img src="/assets/img/banner/banner-shape-01.png" alt="banner-shape" className="b-shape" />
                  </div>
               </div>
            </div>
         </div>
         <div className='background'>
             <div className={circleClassName('s')} />
             <div className={circleClassName('l')} />
             <div className={circleClassName('m')} />
             <div className={circleClassName('xs')} />
         </div>
      </section>
        </>
    );
};

export default HeroBanner;
