import express from 'express';
import getUpcomingContests from '../apis/contests';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const upcomingContests = await getUpcomingContests();
    res.send(upcomingContests);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;
