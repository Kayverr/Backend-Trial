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

export const createStudents = async(req, res) =>{
    const {Name, SR_Code, Course} = req.body
    try {
        const studentId = await StudentModels.insertStudents(Name, SR_Code, Course);
        res.status(200).json({succes: true, data: studentId});
    }catch (e) {
        console.log(e)
        res.status(500).json({succes: false, message: "Internal Server Error"});
    }
}

export const editStudents = async(req, res) =>{
    const {Name, SR_Code, Course} = req.body
    const {studentId} = req.params;
    try {
        const updateId = await StudentModels.updateStudent(Name, SR_Code, Course, studentId);
        res.status(200).json({succes: true, data: updateId});
    }catch (e) {
        console.log(e)
        res.status(500).json({succes: false, message: "Internal Server Error"});
    }
}

export const deleteStudent = async(req, res) =>{
    const {studentId} = req.params;
    try {
        const deletedId = await StudentModels.deleteStudent(studentId);
        res.status(200).json({succes: true, data: deletedId});
    }catch (e) {
        console.log(e)
        res.status(500).json({succes: false, message: "Internal Server Error"});
    }
}