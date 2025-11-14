'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CardDetailView } from '@/features/cardThema/me/ui/card-detail-view';
import { Button } from '@/shared/ui/button';
import { TIME_SEASON } from '@/features/cardThema/time/constant/season';
import { TasteForm } from '@/features/cardThema/time/ui/season-form';

export default function CardOfFeaturePage() {
    const router = useRouter();
    const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
    const [selectedTaste, setSelectedTaste] = useState<number | null>(null);

    return (
        <>
            <CardDetailView
                cardNumber={1}
                totalCards={5}
                title='좋아하는 계절'
                description='내가 좋아하는 계절이 있나요?'
                frontImage='/cards-time/season.svg'
            />
            {/* MARK: 입력 폼 */}
            {/* TODO: feature or widget로 분리 */}
            <div className='flex-1 flex flex-col gap-8 bg-[#F6F6F6] rounded-[20px] px-6 py-10'>
                {/* MARK: 자연 */}
                <section>
                    <h1 className='text-lg font-semibold mb-4'>내가 좋아하는 계절은?</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {TIME_SEASON.season.map((item, index) => (
                            <button
                                key={index}
                                type='button'
                                onClick={() => setSelectedSeason(index)}
                                className={`w-full aspect-[149/80] rounded-[12px] flex flex-col items-center justify-center gap-1 transition-all ${
                                    selectedSeason === index
                                        ? 'bg-[#4466D1] text-white'
                                        : 'bg-white text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <p className='text-2xl'>{item.icon}</p>
                                <p className='font-medium'>{item.title}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* MARK: 동물 */}
                <section>
                    <h1 className='text-lg font-semibold mb-4'>그 계절에 내가 가장 좋아하는 맛은?</h1>
                    <div className='grid grid-cols-3 gap-3'>
                        {TIME_SEASON.taste.map((item, index) => (
                            <button
                                key={index}
                                type='button'
                                onClick={() => setSelectedTaste(index)}
                                className={`w-full aspect-[149/80] rounded-[12px] flex flex-col items-center justify-center gap-1 transition-all ${
                                    selectedTaste === index
                                        ? 'bg-[#4466D1] text-white'
                                        : 'bg-white text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <p className='text-2xl'>{item.icon}</p>
                                <p className='font-medium'>{item.title}</p>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
            
            <TasteForm></TasteForm> {/* TODO: 글 내려쓰기 구현-> FormList 변경 해야 할 것 같아서 보류*/}
            <footer className='w-full flex gap-4 mt-5'>
                <Button className='flex-1 py-[19px] rounded-[12px]' onClick={()=>router.push('/time/cd-007')}>다음으로</Button>
            </footer>
        </>

    );
}