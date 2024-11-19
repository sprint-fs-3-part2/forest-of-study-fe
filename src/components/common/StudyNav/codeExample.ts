import { StudyNavProps } from './StudyNav.types';

const CodeSnippet = ({ nickname, studyName }: StudyNavProps) => `
/** 경로는 상황에 맞게 사용 **/
import { StudyNav } from '@/components/common/StudyNav/StudyNav';


    <StudyNav
    nickname="${nickname}"
    studyName="${studyName}"
    />
`;

export const codeExample = (props: StudyNavProps) => `
# Modal.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
