interface Review {
    id: number;
    img: string;
    name: string;
    review_text: string;
    review_time: string;
}

interface Course {
    id: number;
    img: string;
    icon: string;
    title: string;
    cls_text: string;
    st_text: string;
    start_text: string;
    course_title: string;
    course_link: string;
    course_name: string;
    course_price: string;
    course_duration: string;
    course_reviews: string,
    review_content: Review[];
    lessons_number: string;
    quizess_number: string;
    students_number: string;
    skill_level: string;
    language: string;
    certificate: string;
    instructors_rate: string;
    instructors_reviews: string;
    instructors_name: string;
    instructors_title: string;
    instructors_text: string;
    instructors_classes: string;
    instructors_st: string;
    about_first_p: string;
    about_second_p: string;
}

interface AllCourses {
    allCourses: Course[]
}
