import React from 'react';
import ArrowPattern from './ArrowPattern';

function App() {
    return (
        <div>
            <ArrowPattern />
            <div style={{ color: 'black', padding: '20px' }}>
                <h1>React Background with Arrow Pattern</h1>
                <p>이 페이지는 화살표 패턴 배경이 적용되었습니다.</p>
            </div>
        </div>
    );
}

export default App;

const links = [
    { href: 'https://youtu.be/Js67kofnQw0?si=qZ3Kw9L0YuRabPtT', src: '/images/components/AAA.jpg' },
    { href: 'https://youtu.be/mNYHaQTpr-M?si=xlaMl3pAprHefbJl', src: '/images/components/love.jpg' },
    { href: 'https://youtu.be/aKHbqm-D62Y?si=LEoZmiyZIcu4EdPh', src: '/images/components/24.jpg' },
    { href: 'https://youtu.be/pC6tPEaAiYU?si=Wt1EgTr6gw8tmveb', src: '/images/components/23.jpg' },
    { href: 'https://youtu.be/ECMc1SB60E0?si=1l99cEXJ3JHPKQU-', src: '/images/components/22.jpg' },
    { href: 'https://youtu.be/hwSF28PG_Fo?si=lNRagcAwcGBOZTdG', src: '/images/components/pandabear.jpg' },
    { href: 'https://youtu.be/IUoTjkS242c?si=_Y3pd_aJQ776sZLV', src: '/images/components/20.jpg' },
    { href: 'https://lnk.to/aaa_album', src: '/images/components/nav-archive.svg' },
    { href: 'https://youtu.be/Js67kofnQw0?si=z7yxFKk5GZZ_t4h2', src: '/images/components/nav-video.svg' },
    { href: 'https://premier.ticketek.com.sg/shows/show.aspx?sh=HSR24', src: '/images/components/nav-stores.svg' },
    { href: 'https://www.instagram.com/hyukohofficial/', src: '/images/components/nav-contact.svg' },
];