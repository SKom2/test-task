import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";

interface CourseDetailsProps{
    courses: AllCourses[];
}


export async function getServerSideProps() {
    const response = await fetch(`${process.env.API_HOST}/courses/`);
    const courseData = await response.json();

    if (!courseData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            courses: courseData,
        },
    };
}

const index: React.FC<CourseDetailsProps> = ({ courses }) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Epora'} />
      <Home courses={courses}/>
    </Wrapper>
  );
};

export default index;
