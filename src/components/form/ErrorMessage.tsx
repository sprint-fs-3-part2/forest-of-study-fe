import { ERROR_FONT } from '@/constants/createStudyStyle';

type ErrorMessageProps = {
  id: string;
  error: string;
};

const ErrorMessage = ({ id, error }: ErrorMessageProps) => {
  return (
    <p
      key={id}
      className={ERROR_FONT}
    >
      *{error}
    </p>
  );
};

export default ErrorMessage;
