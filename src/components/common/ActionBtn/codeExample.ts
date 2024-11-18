import { ActionBtnProps } from './ActionBtn.types';

const CodeSnippet = ({ variant, icon, disabled }: ActionBtnProps) => `
/** 경로는 상황에 맞게 사용 **/
import { ActionBtn } from '@/components/common/ActionBtn/ActionBtn';
import playIcon from '@/public/icons/play_icon.png'; // 시작
import stopIcon from '@/public/icons/stop_icon.png'; // 정지
import pauseIcon from '@/public/icons/pause_icon.png'; // 일시정지
import restartIcon from '@/public/icons/restart_icon.png'; // 재시작

    <ActionBtn
        variant=${variant}
        icon=${icon}
        disabled=${disabled}
    >
      {children}
    </ActionBtn>
`;

export const codeExample = (props: ActionBtnProps) => `
# ActionBtn.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
