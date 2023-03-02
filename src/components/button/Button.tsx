import { PrimaryButton } from "@platform/react-components";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const Button = () => {
  return (
    <>
    <PrimaryButton
      label="Primary Button"
      startIcon={null}
    />
    <hr />
    <PrimaryButton
      label="Primary Button"
      startIcon={<AccessAlarmIcon/>}
    />
    
    </>
  );
};
