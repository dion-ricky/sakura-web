const express = require('express')
const eta = require('eta')
const app = express()
const port = 3000

app.engine('eta', eta.renderFile)
app.set('view engine', 'eta')
app.set('views', './dist/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})