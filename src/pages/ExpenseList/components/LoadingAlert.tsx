import { Alert, Stack } from "@mui/material";

const LoadingAlert: React.FC = () => {
  return (
    <Stack padding={1} className="error-alert">
      <Alert severity="info">Data is Loading</Alert>
    </Stack>
  );
};

export default LoadingAlert;
