import express, { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';
const router: Router = express.Router();

/* GET users clubs  */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get data from specific club 
router.get('/:id', (req, res) => {
  const clubId = req.params.id;
})

// Create group
router.post('/createGroup', (req: Request, res: Response) => {
  const receivedData = req.body;
})

// Create group
router.post('/createGroup', (req: Request, res: Response) => {
  const receivedData = req.body;
})

export default router;