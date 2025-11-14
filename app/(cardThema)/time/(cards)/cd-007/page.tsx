'use client';

import { useRouter } from 'next/navigation';
import { CardDetailView } from '@/features/cardThema/me/ui/card-detail-view';
import { BodyForm } from '@/features/cardThema/time/ui/body-form';
import { Button } from '@/shared/ui/button';

export default function CardOfBodyPage() {
  const router = useRouter();
  return (
    <>
    <CardDetailView
      cardNumber={2}
      totalCards={5}
      title='나의 몸'
      description='나의 몸에는 어떤 흔적들이 있나요?'
      frontImage='/cards-time/body.svg'
    />
    <BodyForm/>
    <Button
      className='py-[19px] rounded-[12px] mt-5'
      onClick={()=>router.push('/time/cd-008')}
    >다음카드</Button>
    </>
  );
}