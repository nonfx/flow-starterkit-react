import './body-section.css';

const BodySection = () => {
    // dummy data
    const data = [
        {
            icon: 'i-org',
            title: 'Component library',
            subTitle: 'Discover all Flow components, their usage in a storybook library.',
            link1: { name: 'f-button', link: '' },
            link2: { name: 'f-icon', link: '' },
            link3: { name: 'f-pictogram', link: '' },
        },
        {
            icon: 'i-table-1',
            title: 'Templates',
            subTitle: 'Find all the useful templates with their code in a single storybook.',
            link1: { name: 'top-nav', link: '' },
            link2: { name: 'side-nav', link: '' },
            link3: { name: 'slab', link: '' },
        },
        {
            icon: 'i-git',
            title: 'Dependencies',
            subTitle: 'Consume what you need by selecting logically grouped dependencies.',
            link1: { name: 'Flow system icon', link: '' },
            link2: { name: 'Flow product icon', link: '' },
            link3: { name: 'Flow forms (coming soon)', link: '' },
        },
        {
            icon: 'i-book',
            title: 'Figma design kit',
            subTitle: 'Find visual styles, components, and templates to quickly design mockups.',
            link1: { name: 'Flow UI kit', link: '' },
            link2: { name: 'Flow template library', link: '' },
        },
        {
            icon: 'i-file',
            title: 'Help and support',
            subTitle: 'Get in touch to find answers to your queries and contribute to flow community.',
            link1: { name: 'flow slack', link: '' },
            link2: { name: 'contribution deck', link: '' },
        },
    ];
    return (
        <>
            {/* control panel start */}
            <f-div data-f-id="control-panel" direction="column" padding="none" overflow="wrap">
                {/* welcome message section start */}
                <f-div
                    data-f-id="welcome-message"
                    state="subtle"
                    align="middle-center"
                    direction="column"
                    gap="large"
                    overflow="wrap"
                >
                    <f-div padding="none" align="middle-center" height="hug-content">
                        <f-pictogram source="💬" variant="square" size="x-large" state="default"></f-pictogram>
                    </f-div>
                    <f-div padding="none" align="middle-center" height="hug-content" direction="column" gap="large">
                        <f-text variant="heading" size="x-large" weight="bold">
                            Welcome to Flow
                        </f-text>
                        <f-div padding="none" align="middle-center" height="hug-content" width="388px">
                            <f-text variant="para" size="medium" weight="regular" state="default">
                                A design system that consists of principles, patterns, guidelines, and processes to
                                enable design at scale.
                            </f-text>
                        </f-div>
                    </f-div>
                </f-div>
                {/* welcome message section end */}
                {/* info section start */}
                <f-div
                    data-f-id="info-section"
                    padding="x-large"
                    gap="x-large"
                    align="middle-left"
                    overflow="wrap"
                    class="bottom-section"
                >
                    {data.map((item) => (
                        <f-div padding="none" gap="medium" width="hug-content" height="hug-content" key={item.icon}>
                            <f-icon source={item.icon} size="medium" state="default"></f-icon>
                            <f-div padding="none" align="top-left" direction="column" gap="small">
                                <f-text variant="heading" size="medium" weight="medium">
                                    {item.title}
                                </f-text>
                                <f-div padding="none" align="top-left" direction="column" gap="small">
                                    {' '}
                                    <f-div padding="none" align="top-left" width="298px" overflow="hidden">
                                        <f-text variant="para" size="small" weight="regular">
                                            {item?.subTitle}
                                        </f-text>
                                    </f-div>
                                    <f-div padding="none" align="top-left">
                                        <a href={item?.link1?.link} target="blank">
                                            <f-text variant="para" size="small" weight="regular" state="primary">
                                                {item?.link1?.name}
                                            </f-text>
                                        </a>
                                    </f-div>
                                    <f-div padding="none" align="top-left">
                                        <a href={item?.link2?.link} target="blank">
                                            <f-text variant="para" size="small" weight="regular" state="primary">
                                                {item?.link2?.name}
                                            </f-text>
                                        </a>
                                    </f-div>
                                    {item?.link3 ? (
                                        <f-div padding="none" align="top-left">
                                            <a href={item?.link1?.link} target="blank">
                                                <f-text variant="para" size="small" weight="regular" state="primary">
                                                    {item?.link3?.name}
                                                </f-text>
                                            </a>
                                        </f-div>
                                    ) : null}
                                </f-div>
                            </f-div>
                        </f-div>
                    ))}
                </f-div>
                {/* infos section end */}
            </f-div>
            {/* control panel end */}
        </>
    );
};

export default BodySection;
