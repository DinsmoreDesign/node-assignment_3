const fs = require('fs');

const homeHandler = (req, res) => {

    if (req.url === '/') {

        res.write(`
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Home Page</h1>
                </body>
            </html>
        `);

        return res.end();

    }

}

module.exports = homeHandler;