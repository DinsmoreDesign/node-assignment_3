const users = (req, res) => {

    if (req.url === '/users') {

        res.write(`
            <html>
                <head>
                    <title>Users Page</title>
                </head>
                <body>
                    <h1>All users:</h1>
                    <ul>
                        <li>Me</li>
                        <li>You</li>
                        <li>That other guy</li>
                    </ul>
                </body>
            </html>
        `);

        return res.end();

    }

}

module.exports = users;