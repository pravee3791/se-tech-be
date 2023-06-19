import { Request, Response } from 'express';
import { ActivitiesService } from '../services/activitiesService';
import { getAllActivities, searchActivitiesByTitle } from '../controllers/activitiesController';

const activitiesData = [
  {
    id: 25651,
    title: 'German Tour: Parliament Quarter & Reichstag glass dome',
    price: 14,
    currency: '$',
    rating: 4.8,
    specialOffer: false,
    supplierId: 1,
    supplierName: 'John Doe',
  },
];

describe('Activities Controller', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      json: jest.fn(),
      status: jest.fn(() => res),
    } as unknown as Response;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllActivities', () => {
    it('should return all activities', () => {
      // Mock the ActivitiesService class and its methods
      jest.spyOn(ActivitiesService.prototype, 'getAllActivities').mockReturnValueOnce(activitiesData);

      getAllActivities(req, res);

      expect(res.json).toHaveBeenCalledWith(activitiesData);
    });
  });

  describe('searchActivitiesByTitle', () => {
    it('should return activities matching the search term', () => {
      req.query = { query: 'German' };

      // Mock the ActivitiesService class and its methods
      jest.spyOn(ActivitiesService.prototype, 'searchActivitiesByTitle').mockReturnValueOnce([
        {
          id: 25651,
          title: 'German Tour: Parliament Quarter & Reichstag glass dome',
          price: 14,
          currency: '$',
          rating: 4.8,
          specialOffer: false,
          supplierId: 1,
          supplierName: 'John Doe',
        },
      ]);

      searchActivitiesByTitle(req, res);

      expect(res.json).toHaveBeenCalledWith([
        {
          id: 25651,
          title: 'German Tour: Parliament Quarter & Reichstag glass dome',
          price: 14,
          currency: '$',
          rating: 4.8,
          specialOffer: false,
          supplierId: 1,
          supplierName: 'John Doe',
        },
      ]);
    });

    it('should return a 400 error if search term is missing', () => {
      req.query = {};

      searchActivitiesByTitle(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Search term is required' });
    });
  });
});
