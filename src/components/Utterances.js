import React, { useEffect, useRef } from 'react';

const Utterances = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Prevent duplicate script injection
        if (document.getElementById('twikoo-script')) {
            // If script exists, just init again if needed, or let it be.
            // Twikoo might need re-init on route change.
            if (window.twikoo) {
                window.twikoo.init({
                    envId: 'https://cityu-twikoo.vercel.app', // User provided envId or placeholder
                    el: containerRef.current,
                });
            }
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.staticfile.net/twikoo/1.6.44/twikoo.all.min.js';
        script.id = 'twikoo-script';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
             if (window.twikoo) {
                window.twikoo.init({
                    envId: 'https://cityu-twikoo.vercel.app', // User provided envId or placeholder
                    el: containerRef.current,
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though Twikoo is usually global
        };
    }, []);

    return <div ref={containerRef} />;
};

export default Utterances;