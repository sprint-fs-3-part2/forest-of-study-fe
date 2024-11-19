import { ReactNode } from 'react';

const CodeSnippet = ({ children }: { children: ReactNode }) => `
/** 경로는 상황에 맞게 사용 **/
import { CommonBtn } from '@/components/common/CommonBtn/CommonBtn';

    <LinkBtn>
    ${children}
    </LinkBtn>
`;

export const codeExample = (props: { children: ReactNode }) => `
# LinkBtn.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
