require('svelte/register')

const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 3030

const App = require('./src/App.svelte').default

 const { html } = App.render({
     name: 'letconst'
 })

app.use('/static', express.static('./public'))

app.get('/', (req, res) => {
    const indexFileContent = fs.readFileSync(path.resolve(__dirname, 'public', 'index.html'))

    res.send(indexFileContent.toString().replace('<div id="svelte_app"></div>', `<div id="svelte_app">${html}</div>`))
})

app.listen(PORT, () => console.log('The server started at localhost:3000'))
