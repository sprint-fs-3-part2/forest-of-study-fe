import { CommonBtnProps } from './CommonBtn.types';

const CodeSnippet = ({ variant, widthType, heightType }: CommonBtnProps) => `
/** 경로는 상황에 맞게 사용 **/
import { CommonBtn } from '@/components/common/CommonBtn/CommonBtn';

    <CommonBtn
        variant=${variant}
        widthType=${widthType}
        heightType=${heightType}
    />
`;

export const codeExample = ({
  variant,
  widthType,
  heightType,
}: CommonBtnProps) => `
# CommonBtn.tsx
\`\`\`tsx
${CodeSnippet({ variant, widthType, heightType })}
\`\`\`
`;
