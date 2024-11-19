import { ModalProps } from './Modal.types';

interface CodeSnippetProps extends ModalProps {
  childrenText: string;
}

const CodeSnippet = ({ isOpen, childrenText }: CodeSnippetProps) => `
/** 경로는 상황에 맞게 사용 **/
import { Modal } from '@/components/common/Modal/Modal';


    <Modal isOpen=${isOpen}>${childrenText}</Modal>
`;

export const codeExample = (props: CodeSnippetProps) => `
# Modal.tsx
\`\`\`tsx
${CodeSnippet(props)}
\`\`\`
`;
