import React, { useEffect, useRef } from 'react';

const Utterances = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.setAttribute('repo', 'penjc/CityU');
        script.setAttribute('issue-term', 'title');
        script.setAttribute('theme', 'github-light');
        script.setAttribute('crossorigin', 'anonymous');
        containerRef.current.appendChild(script);
    }, []);

    return <div ref={containerRef} />;
};

export default Utterances;