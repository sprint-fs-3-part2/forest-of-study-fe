import { ToastProps } from './Toast.types';

const CodeSnippet = ({ variant, children }: ToastProps) => `
/** 경로는 상황에 맞게 사용 **/
import { Toast } from '@/components/common/Toast/Toast';


    <Toast
    variant="${variant}">
      ${children}
    </Toast>
`;

export const codeExample = (props: ToastProps) => `
# Toast.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
