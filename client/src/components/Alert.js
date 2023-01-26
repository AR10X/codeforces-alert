import React, { useState, useEffect } from 'react';
import { useSubscription } from '@apollo/client';
import { Alert } from 'halfmoon';
import UPCOMING_CONTESTS from '../gql/subscriptions/upcomingContests';

function Alerts() {
  const [upcomingContests, setUpcomingContests] = useState([]);
  const { data, loading, error } = useSubscription(UPCOMING_CONTESTS);

  useEffect(() => {
    if (data) {
      setUpcomingContests(data.upcomingContests);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {upcomingContests.map((contest) => (
        <Alert key={contest.id} type="info">
          Upcoming Codeforces contest: {contest.name} starting at {contest.startTime}
        </Alert>
      ))}
    </>
  );
}

export default Alerts;
