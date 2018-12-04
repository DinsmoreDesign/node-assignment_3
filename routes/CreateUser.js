const createUser = (req, res) => {

    if (req.url === '/CreateUser' && req.method === 'POST') {
       
        const body = [];

        req.on('data', (chunk) => body.push(chunk));

        return req.on('end', () => {

            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];

            console.log('New User Created: ' + userName);

            res.writeHead(302, {
                location: '/'
            });
    
            return res.end();

        });

    }

}

module.exports = createUser;