// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import course_data from "@/src/data/course-data";

export default function handler(req, res) {
  res.status(200).json(course_data)
}

