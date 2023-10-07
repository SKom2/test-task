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
                        <span>The Path to Personal Growth</span>
                        <h2 className="hero-title mb-35 text-black">Empowering Coders, <i>Building Futures.</i></h2>
                        <p>Welcome to your new learning journey. Explore our courses and unlock new opportunities.</p>
                        <div className="tp-banner-btn">
                           <Link href="/course-list" className="tp-btn">Read more about courses</Link>
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
