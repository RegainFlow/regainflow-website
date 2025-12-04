import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: 'fade-in' | 'slide-up' | 'scale-up';
    delay?: number;
    threshold?: number;
    className?: string;
}

export default function ScrollAnimation({
    children,
    animation = 'slide-up',
    delay = 0,
    threshold = 0.1,
    className = ''
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in':
                return 'animate-fade-in';
            case 'slide-up':
                return 'animate-slide-up';
            case 'scale-up':
                return 'animate-scale-up';
            default:
                return 'animate-slide-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: '1200ms', // Slower, smoother transition
                transitionProperty: 'opacity, transform',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' // Smooth ease-out
            }}
        >
            {children}
        </div>
    );
}
