const createUser = (req, res) => {

    if (req.url === '/CreateUser' && req.method === 'POST') {
       
        let body = '';

        req.on('data', (chunk) => {
            
            body += chunk.toString();
        
        });

        return req.on('end', () => {

            const userName = body.split('=')[1];

            console.log('New User Created: ' + userName);

            res.writeHead(302, {
                location: '/'
            });
    
            return res.end();

        });

    }

}

module.exports = createUser;