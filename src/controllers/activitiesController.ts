import { Request, Response } from 'express';
import { Activity } from '../models/activity';
import { Supplier } from '../models/supplier';
import { ActivityWithSupplierName } from '../models/activityWithSupplier';
import { ActivitiesService } from '../services/activitiesService';

const activitiesService = new ActivitiesService();

/**
 * @swagger
 * tags:
 *   name: Activities
 *   description: API endpoints for activities
 */

/**
 * @swagger
 * /activities:
 *   get:
 *     summary: Get all activities
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ActivityWithSupplier'
 */
export const getAllActivities = (req: Request, res: Response) => {
  const activities: ActivityWithSupplierName[] = activitiesService.getAllActivities();
  res.json(activities);
};

/**
 * @swagger
 * /activities/search:
 *   get:
 *     summary: Search activities by title
 *     tags: [Activities]
 *     parameters:
 *       - in: query
 *         name: query
 *         description: Search term for activity title
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ActivityWithSupplier'
 */
export const searchActivitiesByTitle = (req: Request, res: Response) => {
  const { query } = req.query;
  const searchTerm: string | undefined = query?.toString().toLowerCase();

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  const activities: ActivityWithSupplierName[] = activitiesService.searchActivitiesByTitle(searchTerm);
  res.json(activities);
};

