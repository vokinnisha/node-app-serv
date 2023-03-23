const swaggerAutogen = require( 'swagger-autogen' )();

const outputFile = './swagger_output.json';
const endpointsFiles = [ './routes/person.js' ];

swaggerAutogen( outputFile, endpointsFiles );