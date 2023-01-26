import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Switch } from 'halfmoon';
import UPDATE_NOTIFICATION from '../gql/mutations/updateNotification';

function ToggleSwitch() {
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [updateNotification, { loading }] = useMutation(UPDATE_NOTIFICATION);

  const handleChange = () => {
    setIsNotificationOn(!isNotificationOn);
    updateNotification({ variables: { isNotificationOn: !isNotificationOn } });
  };

  return (
    <Switch
      label="SMS Notifications"
      checked={isNotificationOn}
      disabled={loading}
      onChange={handleChange}
    />
  );
}

export default ToggleSwitch;
