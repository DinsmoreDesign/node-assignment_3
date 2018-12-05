const home = (req, res) => {

    if (req.url === '/') {

        res.write(`
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Welcome!</h1>
                    <p>Wanna create a user...?</p>
                    <form action="/CreateUser" method="POST">
                        <label>User Name:</label>
                        <input type="text" name="user-name">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);

        return res.end();

    }

}

module.exports = home;