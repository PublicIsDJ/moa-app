'use client';

import { BigSizeFormList } from "@/shared/ui/bigSize-formList";


const bodyFields = [
    { label : "나의 흉터, 수술자국 등을 적어주세요", placeholders: ['편하게 원하는 만큼 적어주세요'] },
    { label : "그 흉터는 언제 생겼나요?", placeholders: ['그 흉터는 어떤 의미로 남아있나요?'] },
];

export function BodyForm() {
    return <BigSizeFormList fields={bodyFields} />;
}