import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ScrollCardsProps {
    imgUrls: string[];
    sectionTitles: string[];
}

const ScrollCards: React.FC<ScrollCardsProps> = ({ imgUrls, sectionTitles }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    useEffect(() => {
        const setScrollVar = () => {
            const htmlElement = document.documentElement;
            const percentOfScreenHeightScrolled =
                htmlElement.scrollTop / htmlElement.clientHeight;
            console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
            htmlElement.style.setProperty(
                '--scroll',
                Math.min(percentOfScreenHeightScrolled * 100, 100).toString()
            );
        };

        setScrollVar();

        const observer = new IntersectionObserver((entries) => {
            for (let i = entries.length - 1; i >= 0; i--) {
                const entry = entries[i];
                if (entry.isIntersecting) {
                    const imgIndexToShow = sectionTitles.findIndex(
                        (title) => title === entry.target.getAttribute('data-title-to-show')
                    );
                    if (imgIndexToShow !== -1) {
                        setActiveImgIndex(imgIndexToShow);
                    }
                    break;
                }
            }
        });

        document.querySelectorAll('[data-title-to-show]').forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener('scroll', setScrollVar);
        window.addEventListener('resize', setScrollVar);

        return () => {
            window.removeEventListener('scroll', setScrollVar);
            window.removeEventListener('resize', setScrollVar);
        };
    }, [sectionTitles]);

    return (
        <section className='p-96'>
            <div className="imgs">
                {imgUrls.map((url, index) => (
                    <Image
                        width={100}
                        height={100}
                        key={`img-${index + 1}`}
                        src={url}
                        id={`img-${index + 1}`}
                        className={`top-section-img ${index === activeImgIndex ? 'show' : ''}`}
                        alt=""
                    />
                ))}
                {sectionTitles.map((title, index) => (
                    <section
                        key={`section-${index + 1}`}
                        className="full-screen-section"
                        data-title-to-show={title}
                    >
                        <h1>{title}</h1>
                        {/* Add your corresponding content here */}
                        <div data-img-to-show={`#img-${index + 1}`}></div>
                    </section>
                ))}
            </div>
        </section>
        
    );
};

export default ScrollCards;
