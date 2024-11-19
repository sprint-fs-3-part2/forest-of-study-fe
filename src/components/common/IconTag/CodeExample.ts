import { IconTagProps } from './IconTag.types';

const CodeSnippet = ({
  variant,
  parentComponent,
  fillColor,
  backgroundType,
  text,
  icon,
  className,
}: IconTagProps) => `
/** 경로는 상황에 맞게 사용 **/
/** 반응 추가 버튼은 icon에 addReactionIcon 입력 **/
/** 포인트태그는 icon에 pointIcon 입력 **/
import { IconTag } from '@/components/common/IconTag/IconTag';
import addReactionIcon from '@/public/icons/add_reaction_icon.png';
import pointIcon from '@/public/icons/point_icon.png';

    <IconTag
        variant=${variant}
        parentComponent=${parentComponent}
        fillColor=${fillColor}
        text=${text}
        ${(backgroundType && `backgroundType=${backgroundType}`) || ''}
        ${(icon && `icon=${icon}`) || ''}
        ${(className && `className=${className}`) || ''}
    />
`;

export const codeExample = (props: IconTagProps) => `
# IconTag.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
