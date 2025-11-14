'use client';

import { BigSizeFormList } from "@/shared/ui/bigSize-formList";


const rythmFields = [
    { label : "가장 크게 인생의 변화가 있던 시기는 언제인가요?", placeholders: ['새로운 일에 뛰어든 때 (첫직장, 유학, 창업 등)', '예상치 못한 큰 변화를 맞이했을 때']  },
    { label : "내 삶에서 가장 강한 울림이 있었다면 언제인가요?", placeholders: ['가장 큰 기쁨이나 슬픔', '잊을 수 없는 사건, 사람'] },
];

export function RythmForm() {
    return <BigSizeFormList fields={rythmFields} />;
}