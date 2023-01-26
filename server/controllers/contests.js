import axios from 'axios';

const getUpcomingContests = async () => {
  try {
    const { data } = await axios.get('https://codeforces.com/api/contest.list');
    return data.result.filter((contest) => new Date(contest.startTime) > new Date());
  } catch (e) {
    throw new Error(e);
  }
};

export default getUpcomingContests;
