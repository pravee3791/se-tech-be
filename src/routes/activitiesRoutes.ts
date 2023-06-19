import { Router } from 'express';
import { getAllActivities, searchActivitiesByTitle } from '../controllers/activitiesController';

const router = Router();

router.get('/', getAllActivities);
router.get('/search', searchActivitiesByTitle);

export default router;
