import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Utterances from '@site/src/components/Utterances';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function FooterWrapper(props) {
    // Optional: Check if comments should be disabled for specific pages using frontmatter
    // const {metadata} = useDoc();
    // const {frontMatter} = metadata;
    // const {hide_comment} = frontMatter;

    return (
        <>
            <Footer {...props} />
            <div style={{ marginTop: '3rem' }}>
                <hr style={{ marginBottom: '2rem' }} />
                <Utterances />
            </div>
        </>
    );
}
