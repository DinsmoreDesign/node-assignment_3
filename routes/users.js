const fs = require('fs');

const usersHandler = (req, res) => {

    if (req.url === '/users') {

        res.write(`
            <html>
                <head>
                    <title>Users Page</title>
                </head>
                <body>
                    <h1>Users Page</h1>
                </body>
            </html>
        `);

        return res.end();

    }

}

module.exports = usersHandler;