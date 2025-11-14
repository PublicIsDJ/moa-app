import { BigSizeFormList } from "@/shared/ui/bigSize-formList";


const friendFields = [
    { label: "내게 가장 오래된 사람은?", placeholders: ['없다면 가장 오래된 이야기나 사진 속 인물을 떠올려 보세요!'] },
    { label: "가장 최근에 만난 사람은?", placeholders: ['어디서, 어떤 이유로 만났나요?'] },
    { label: "반려동물을 키우는 사람은?", placeholders: ['반려동물을 키우는 지인이 있나요?'] },
    { label: "혼자 살고 있는 사람은?", placeholders: ['혼자 살고있는 지인이 있나요?'] },
    { label: "내게 밥을 사준 사람은?", placeholders: ['누가 밥을 사줬나요?'] },
    { label: "내가 밥을 사준 사람은?", placeholders: ['누구에게 밥을 사줬나요?'] }
];

export function FriendForm() {
    return <BigSizeFormList textareaClassName="h-8" fields={friendFields} />;
}