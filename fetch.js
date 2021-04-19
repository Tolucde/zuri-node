const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const url = 'https://jsonplaceholder.typicode.com/posts'
    //checking if results directory already exists
if (fs.existsSync('result')) {
    console.log('result directory already exists')
} else {
    console.log('result directory does not exists')
    fs.mkdir(path.join(__dirname, 'result'), (err) => {
        if (err) {
            return console.console.error(err)
        }
        console.log('result directory created succesfully')
    })
}
fetch(url)
    .then((res) => res.json())
    .then((json) => {
        fs.writeFile('./result/posts.json', JSON.stringify(json, null, 2), () => {
            console.log('file written')
        })
    })