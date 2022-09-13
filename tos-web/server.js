//server.js
const { default: axios } = require('axios')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/login', (res,req) => {
        let curUrl = `${process.env.API_HOST}/api/auth/google/self/url`
        let curParams = {}
        axios
            .get(curUrl, {
                params: curParams,
            })
            .then(({data}) => {
                const url = data?.data?.url
                res.redirect(url);
            })
    })

    server.listen(3000, function (){
        console.log('listening on 3000')
    });

})




