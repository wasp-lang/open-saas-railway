import { type HealthCheck } from 'wasp/server/api';

export const healthCheck: HealthCheck = (_req, res, _context) => {
  res.status(200).send('Server is healthy 😎');
};
