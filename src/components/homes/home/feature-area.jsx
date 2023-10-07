import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
      title: "Online Courses",
    des: "Explore the world of web design and development at your own pace through our accessible online courses.",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Expert Trainer",
    des: "Learn from industry experts for top-notch training in web design and development.",
  },

  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Get Certificate",
    des: "Upon course completion, you'll receive a certificate to validate your proficiency in web design and development.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Life Time Access",
    des: "You gain the enduring benefit of unrestricted access to course content for the entirety of its existence..",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
