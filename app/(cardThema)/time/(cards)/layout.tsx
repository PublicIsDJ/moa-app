import { AuthHeader } from "@/features/auth/ui/auth-header";
import { Container } from "@/shared/ui/container";

export default function CardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white full-bleed">
            <Container>
                <AuthHeader title='시간' className="py-[11px]"/>
                <div className="flex-1">
                    {children}
                </div>
            </Container>
        </div>
    );
}

