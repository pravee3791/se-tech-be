import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import loggerMiddleware from './middlewares/logger';
import { corsMiddleware } from './middlewares/cors';
import swaggerDocs from './swagger/swagger';
import statusMonitor from 'express-status-monitor';
import activitiesRoutes from './routes/activitiesRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3100;

// Middleware
app.use(loggerMiddleware);
app.use(corsMiddleware);
app.use(statusMonitor());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/activities', activitiesRoutes);

// Default route
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
