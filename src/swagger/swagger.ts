import swaggerJsDoc from 'swagger-jsdoc';

// Swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Activities API',
      version: '1.0.0',
      description: 'API documentation for Activities',
    },
  },
  apis: ['./src/controllers/*.ts'],
};

// Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
