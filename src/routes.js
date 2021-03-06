import { Router } from 'express';
/**
 * Contains all API routes for the application.
 */
const router = Router();
/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

export default router;
