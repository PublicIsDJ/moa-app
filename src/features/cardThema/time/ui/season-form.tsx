import { FormList } from "@/shared/ui/form-list";

const tasteFields = [
    { label : "보기에 없는 경우에는 계절마다 \n내가 즐겨먹던 것을 자유롭게 적어보세요!", placeholder: '자유롭게 적어주세요' },
];

export function TasteForm() {
    return <FormList fields={tasteFields} />;
}