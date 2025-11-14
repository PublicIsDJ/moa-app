'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CardDetailView } from '@/features/cardThema/me/ui/card-detail-view';
import { Button } from '@/shared/ui/button';
import { TIME_SEASON } from '@/features/cardThema/time/constant/season';
import { TasteForm } from '@/features/cardThema/time/ui/season-form';
import { FriendForm } from '@/features/cardThema/time/ui/friend-form';
import { TIME_FRIEND, TIME_FRIEND_WITH } from '@/features/cardThema/time/constant/friend';

export default function CardOfFriendPage() {
    const router = useRouter();
    const [selectedFriend, setSelectedFriend] = useState<number | null>(null);

    return (
        <>
            <CardDetailView
                cardNumber={4}
                totalCards={5}
                title='나의 지인'
                description='나의 지인들을 누가 있을까요?'
                frontImage='/cards-time/friend.svg'
            />
            {/* TODO: feature or widget로 분리 */}
            <div className='flex-1 flex flex-col gap-8 bg-[#F6F6F6] rounded-[20px] px-6 py-10'>
                {/* MARK: 자연 */}
                <FriendForm></FriendForm>
                

                {/* MARK: 동물 */}
                <section>
                    <h1 className='text-lg font-semibold mb-4'>지인과 하고싶은것은?</h1>
                    <div className='grid grid-cols-3 gap-3'>
                        {TIME_FRIEND_WITH.map((item, index) => (
                            <button
                                key={index}
                                type='button'
                                onClick={() => setSelectedFriend(index)}
                                className={`w-full aspect-[149/80] rounded-[12px] flex flex-col items-center justify-center gap-1 transition-all ${
                                    selectedFriend === index
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
            
            <footer className='w-full flex gap-4 mt-5'>
                <Button className='flex-1 py-[19px] rounded-[12px]' onClick={()=>router.push('/time/cd-010')}>다음으로</Button>
            </footer>
        </>

    );
}