import express from 'express';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/user', auth, (req, res) => {
  res.send(req.user);
});

export default router;
