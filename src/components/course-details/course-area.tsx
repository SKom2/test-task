import Link from "next/link";
import React from "react";

interface CourseDetailsProps {
  allCourses: AllCourses[];
}

const CourseArea: React.FC<CourseDetailsProps> = ({ allCourses }) => {
  return (
      <section className="course-area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title mb-20">Related Courses</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {allCourses.slice(0, 3).map((course, i) => {
              const {
                id,
                img,
                icon,
                ct_color,
                cn_color,
                course_link,
                course_title,
                course_name,
                title,
                cls_text,
                st_text,
                start_text,
                total_start,
                course_price,
              } = course;
              const courseLink = `${course_link}/${id}`;

              return (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                    <div
                        className="tpcourse mb-40 wow fadeInUp"
                        data-wow-duration=".8s"
                        data-wow-delay=".3s"
                    >
                      <div className="tpcourse__thumb p-relative w-img fix">
                        <Link href={courseLink}>
                          <img src={img} alt="course-thumb" />
                        </Link>
                        <div className="tpcourse__tag">
                          <Link href={courseLink}>
                            <i className="fi fi-rr-heart"></i>
                          </Link>
                        </div>
                        <div className="tpcourse__img-icon">
                          <img src={icon} alt="course-avatar" />
                        </div>
                      </div>
                      <div className="tpcourse__content-2">
                        <div className="tpcourse__category mb-10">
                          <ul className="tpcourse__price-list d-flex align-items-center">
                            <li>
                              <Link className={ct_color} href={courseLink}>
                                {course_title}
                              </Link>
                            </li>
                            <li>
                              <Link className={cn_color} href={courseLink}>
                                {course_name}
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__ava-title mb-15">
                          <h4 className="tpcourse__title tp-cours-title-color">
                            <Link href={courseLink}>{title}</Link>
                          </h4>
                        </div>
                        <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                              />{" "}
                              <span>{cls_text}</span>
                            </li>
                            <li>
                              <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                              />{" "}
                              <span>{st_text}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                          <div className="tpcourse__rating-icon">
                            <span>{start_text}</span>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <i
                                    key={index}
                                    className={`fi ${
                                        index < total_start ? "fi-ss-star" : "fi-rs-star"
                                    }`}
                                ></i>
                            ))}
                            <p>({total_start})</p>
                          </div>
                          <div className="tpcourse__pricing">
                            <h5 className="price-title">${course_price}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default CourseArea;
