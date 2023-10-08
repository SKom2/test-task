import React from "react";
import SEO from "../../common/seo";
import CourseDetails from "../../components/course-details";
import WrapperFour from "../../layout/wrapper-4";

export async function getServerSideProps(context) {
    const { id } = context.params;

    const response = await fetch(`${process.env.API_HOST}/courses/${id}`);
    const courseData = await response.json();

    const allCoursesResponse = await fetch(`${process.env.API_HOST}/courses/`);
    const allCoursesData = await allCoursesResponse.json();

    if (!courseData || !allCoursesData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            course: courseData,
            allCourses: allCoursesData,
        },
    };
}

const Course = ({ course, allCourses }) => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Course Details"} />
            <CourseDetails course={course} allCourses={allCourses} />
        </WrapperFour>
    );
};

export default Course;
