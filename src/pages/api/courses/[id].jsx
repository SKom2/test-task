import course_data from "@/src/data/course-data";

export default function handler(req, res) {
    const { id } = req.query;

    const course = course_data.find((course) => course.id === parseInt(id, 10));

    if (!course) {
        return res.status(404).json({ message: "Курс не найден" });
    }

    res.status(200).json(course);
}
