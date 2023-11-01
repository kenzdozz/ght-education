import React, { useEffect, useRef, useState } from 'react'

function useScrollReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        let animAnchors = ref.current?.querySelectorAll(':scope [data-anim-container]');
        // console.log(animAnchors, 'refs', animAnchors?.length);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // console.log(entry.target, 'targets');
                    // @ts-ignore
                    entry.target.dataset.animate_targets = true
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 });
        animAnchors?.forEach((animAnchor) => {
            observer.observe(animAnchor)

        });
        return () => observer.disconnect()
        // }
    }, []);


    return (
        [ref]
    )
}

export default useScrollReveal