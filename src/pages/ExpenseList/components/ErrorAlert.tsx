import { Alert, Button, Stack } from "@mui/material";

interface Props {
  onRetry: () => void;
}

const ErrorAlert: React.FC<Props> = ({ onRetry }: Props) => {
  return (
    <Stack padding={1} className="error-alert">
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={onRetry}>
            Retry
          </Button>
        }
      >
        Failed to fetch Expense data.
      </Alert>
    </Stack>
  );
};

export default ErrorAlert;
