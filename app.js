import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

try {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });

} catch (e) {
    console.log(e);  
}
 app.get('/Kayverr', async (req, res) => {
    res.status(200).json({ message: 'wassup sah kyle nga pala gangsta men from sucol ' });
 });