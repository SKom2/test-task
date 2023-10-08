import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

interface CourseDetailsProps {
    course: Course;
    allCourses: AllCourses[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, allCourses }) => {
    return (
        <>
            <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
            <CourseDetailsArea course={course}/>
            <CourseArea allCourses={allCourses}/>
            <CounterArea />
        </>
    );
};

export default CourseDetails;
