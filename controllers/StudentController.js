import * as StudentModels from "../models/StudentModels.js";

export const fetchStudents = async (req, res) => {
    try {
        const students = await StudentModels.getStudents();
        res.status(200).json({succes: true, message: students});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            succes: false,
            message: "Internal Server Error"
        });
    }
}