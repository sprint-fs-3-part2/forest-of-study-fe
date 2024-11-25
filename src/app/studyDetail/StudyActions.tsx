// 공유, 수정, 삭제 컴포넌트

import { useRouter } from "next/navigation";
import { useState } from "react";
//import { toast } from "react-hot-toast";

interface StudyActionProps {
  studyId: string;
  currentTitle: string;
  currentDescription: string;
}

export default function StudyAction({
  studyId, currentTitle, currentDescription
}: StudyActionProps) {

  const router = useRouter();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [editedTitle, setEditTitle] = useState(currentTitle);
  const [editedDescription, setEditDescription] = useState(currentDescription);

  const handleShare = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
    .then(() => {
      //toast.success('URL이 복사되었습니다.');
    })
    .catch(err => {
      //toast.error('복사에 실패했습니다.');
    });
  };

  const handleDelete = async () => {
    setIsPasswordModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      //const response = await
    } catch(err){

    }
  }
}
