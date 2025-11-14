'use client';

import { useRouter } from 'next/navigation';
import { CardDetailView } from '@/features/cardThema/me/ui/card-detail-view';
import { RythmForm } from '@/features/cardThema/time/ui/rythm-form';
import { Button } from '@/shared/ui/button';

export default function CardOfRythmPage() {
  const router = useRouter();
  return (
    <>
    <CardDetailView
      cardNumber={3}
      totalCards={5}
      title='나의 리듬'
      description='내 삶의 리듬은 무엇인가요?'
      frontImage='/cards-time/rythm.svg'
    />
    <RythmForm/>
    <Button
      className='py-[19px] rounded-[12px] mt-5'
      onClick={()=>router.push('/time/cd-009')}
    >다음카드</Button>
    </>
  );
}