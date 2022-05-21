// Using swagger-autogen to create api-docs
// for swagger-ui-express to serve

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Minimalist Project Manager API',
    description: 'An API to help manager cards and users of a project manager'
  },
  host: 'thor-project-wks5-8.herokuapp.com',
  schemes: ['https']
}

const outputFile = './api-doc-output.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);