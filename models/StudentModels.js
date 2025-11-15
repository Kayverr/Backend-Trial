import pool from "../config/db.js";

export const getStudents = async () => {
    const[rows] =  await pool.query("SELECT * FROM tblstudent");
    return rows;
}

export const insertStudents = async (Name, SR_Code, Course) =>{
    const [result] = await pool.query(
        "INSERT INTO tblstudent(Name, SR_Code, Course) VALUES (?, ?, ?)",
        [Name, SR_Code, Course]
    );
    return result.insertId;
}

export const updateStudents = async (Name, SR_Code, Course, studentId) =>{
    const [result] = await pool.query(
        "UPDATE tblstudent SET Name= ?, SR_Code= ?, Course= ? WHERE id= ?",
        [Name, SR_Code, Course, studentId]
    );
    console.log(Name, SR_Code, Course, studentId)
    return result.affectedRows;
}

export const deleteStudent = async (studentId) =>{
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE id= ?",[studentId]
    );
    return result.affectedRows
}