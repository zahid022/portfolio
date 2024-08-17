import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button className='flex fixed text-[18px] bottom-8 right-8 h-10 w-10 justify-center items-center text-white rounded-[50%]' onClick={scrollToTop}>
                    <FaChevronUp />
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
