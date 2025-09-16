import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Success() {

    const [showContent, setShowContent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleBackToHome = () => {
        router.push('/');
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900 px-4">

            <div className={`text-center transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                {/* Animated Check Circle */}
                <div className="relative mx-auto mb-8">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-green-500 flex items-center justify-center transform transition-all duration-700 ${showContent ? 'scale-100' : 'scale-0'}`}>
                        <svg
                            className={`w-16 h-16 text-white transform transition-all duration-500 delay-300 ${showContent ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                                className={`${showContent ? 'animate-draw-check' : ''}`}
                            />
                        </svg>
                    </div>

                    {/* Ripple Effect */}
                    <div className={`absolute inset-0 rounded-full bg-green-400 animate-ping ${showContent ? 'opacity-20' : 'opacity-0'}`}></div>
                    <div className={`absolute inset-0 rounded-full bg-green-400 animate-pulse ${showContent ? 'opacity-10' : 'opacity-0'}`}></div>
                </div>

                {/* Success Message */}
                <div className={`transform transition-all duration-700 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-300 mb-4">
                        Payment Successful!
                    </h1>
                    <p className="text-xl text-green-600 dark:text-green-400 mb-2">
                        Thank you for your purchase
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                        Your order has been confirmed and you'll receive an email confirmation shortly.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className={`space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center transform transition-all duration-700 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <button
                        onClick={handleBackToHome}
                        className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors duration-200 transform hover:scale-105"
                    >
                        Continue Shopping
                    </button>

                    <button
                        onClick={() => window.print()}
                        className="w-full sm:w-auto px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
                    >
                        Print Receipt
                    </button>
                </div>

                {/* Floating Particles Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-2 h-2 bg-green-400 rounded-full animate-float-${i + 1} ${showContent ? 'opacity-30' : 'opacity-0'}`}
                            style={{
                                left: `${20 + i * 12}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i * 0.5}s`
                            }}
                        />
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes draw-check {
          0% {
            stroke-dasharray: 0 50;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 50 50;
            stroke-dashoffset: -50;
          }
        }
        
        .animate-draw-check {
          animation: draw-check 0.8s ease-in-out 0.3s both;
        }

        @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(180deg); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(180deg); } }
        @keyframes float-4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-35px) rotate(180deg); } }
        @keyframes float-5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-28px) rotate(180deg); } }
        @keyframes float-6 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-32px) rotate(180deg); } }

        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 3.5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 3s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 4s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 3.5s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 4s ease-in-out infinite; }
            `}</style>

        </div>

    );

}