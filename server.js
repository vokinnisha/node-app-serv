const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const personRouter = require( "./routes/person.js" );
const swaggerUi = require( 'swagger-ui-express' );
const swaggerFile = require( './swagger_output.json' );


const app = express();
const port = 3300;
const host = "127.0.0.1";

app.use( "/person", personRouter );
app.use( bodyParser.json() );
app.use( '/doc', swaggerUi.serve, swaggerUi.setup( swaggerFile ) );

app.listen( port, host, () => {
    console.log( `Example app listening on port ${ port }` );
} );