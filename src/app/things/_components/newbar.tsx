import { useState } from 'react';
import Link from 'next/link';

const IndexPage = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div>
            <button onClick={() => setShowContent(!showContent)}>
                {showContent ? '숨기기' : '보이기'}
            </button>

            {showContent && (
                <div>
                    <h2>라우팅되는 부분</h2>
                    <Link href="/another-page">
                        <a>다른 페이지로 이동</a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default IndexPage;
