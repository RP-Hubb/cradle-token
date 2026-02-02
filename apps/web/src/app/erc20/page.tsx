
import { ERC20InteractionPanel } from '@/components/ERC20InteractionPanel';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ERC20Page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-black text-white">
            <div className="w-full max-w-5xl mb-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                <h1 className="text-2xl font-bold">ERC20 Interaction</h1>
            </div>

            <div className="w-full max-w-md">
                <ERC20InteractionPanel />
            </div>
        </main>
    );
}
