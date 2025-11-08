import * as BookModel from "../models/BookModels.js";

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getBooks();
        res.status(200).json({succes: true, message: books});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            succes: false,
            message: "Internal Server Error"
        });
    }
}