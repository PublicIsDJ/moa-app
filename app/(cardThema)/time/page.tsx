'use client';

import { useRouter } from 'next/navigation';
import { Container } from "@/shared/ui/container";
import { BottomNavigation } from "@/shared/ui/bottom-nave";
import { CardListItem } from "@/features/cardThema/me/ui/card-list-item";


const cards = [
    { title: '좋아하는 계절', icon: '/cards-time/season.svg', route: '/time/cd-006' },
    { title: '나의 몸', icon: '/cards-time/body.svg', route: '/time/cd-007' },
    { title: '나의 리듬', icon: '/cards-time/rythm.svg', route: '/time/cd-008' },
    { title: '나의 지인', icon: '/cards-time/friend.svg', route: '/time/cd-009' },
    { title: '나의 무대', icon: '/cards-time/stage.svg', route: '/time/cd-010' }
];

export default function TimeCardsPage() {
    const router = useRouter();

    const handleCardClick = (route: string) => {
        router.push(route);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F0F0F0] full-bleed">
            <div className="flex-1 flex items-center justify-center">
                <Container>
                    <h1 className="text-2xl font-bold mb-6">시간 테마</h1>
                    <div className="flex flex-col gap-4">
                        {cards.map((card, index) => (
                            <CardListItem
                                key={index}
                                title={card.title}
                                icon={card.icon}
                                onClick={() => handleCardClick(card.route)}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </Container>
            </div>
            <BottomNavigation />
        </div>
    );
}