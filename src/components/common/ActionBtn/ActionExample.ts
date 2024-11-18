import { ActionBtnProps } from './ActionBtn.types';

const CodeSnippet = ({ variant, icon }: ActionBtnProps) => `
/** 경로는 상황에 맞게 사용 **/
import { ActionBtn } from '@/components/common/ActionBtn';

    <ActionBtn
        variant=${variant}
        icon=${icon}
    />
`;

export const codeActionExample = ({ variant, icon }: ActionBtnProps) => `
# ActionBtn.tsx
\`\`\`tsx
${CodeSnippet({ variant, icon })}
\`\`\`
`;
