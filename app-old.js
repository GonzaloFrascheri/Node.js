
const http = require('http');

http.createServer( (req, res) => { //req -> todas las solicitudes a mi servidor, res -> lo que mi servidor le responde al cliente

    //res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('Hola Mundo');

    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);