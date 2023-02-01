const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
app.use(fileUpload());
app.set('view engine', 'ejs');
app.use(express.static("public"));






app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    if (req.files) {
        const file = req.files.file
        const fileName = file.name
        file.mv(`${__dirname}/store/${fileName}`, err => {
            if (err) {
                console.log(err)
                res.send('There is error' , err)
            } else {
                res.send('uploaded successfully')
            }
        })
    } else {
        res.send('There are no files')
    }
})
app.listen(process.env.PORT, () => {
    console.log('server started')
})
