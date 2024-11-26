import { ERROR_FONT } from '@/constants/createStudyStyle';

type ErrorMessageProps = {
  errorKey: string;
  error: string;
  className?: string;
};

const ErrorMessage = ({ errorKey, error }: ErrorMessageProps) => {
  return (
    <p
      key={errorKey}
      className={ERROR_FONT}
    >
      *{error}
    </p>
  );
};

export default ErrorMessage;
