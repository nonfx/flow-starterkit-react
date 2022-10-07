import './layout.css';
import MenuPopover from '../Popover/MenuPopover/MenuPopover';
import { useState } from 'react';

type Props = {
    children: JSX.Element;
};
const Layout = ({ children }: Props) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <>
            <f-div direction="column" padding="none" height="100%" state="default">
                {openSidebar && window.matchMedia('(max-width: 600px)').matches ? null : (
                    <f-div
                        align="middle-left"
                        gap="small"
                        border="small solid default bottom"
                        padding="medium"
                        variant="block"
                        state="default"
                        id="main-navbar"
                        height="hug-content"
                    >
                        <f-div align="middle-left" gap="small" width="hug-content">
                            <f-icon
                                source="i-hamburger"
                                size="large"
                                class="responsive-header"
                                onClick={toggleSidebar}
                                clickable={true}
                            ></f-icon>
                            <f-icon
                                source="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/7c68ee60c1588f7dfdf55a5b1f471efe.png"
                                size="large"
                            ></f-icon>
                        </f-div>
                        <f-div align="middle-left" gap="small" width="fill-container" class="not-responsive-header">
                            <f-icon source="i-arrow-left" size="small" clickable={true}></f-icon>
                            <f-text variant="heading" size="x-small" weight="regular">
                                Home / Foundation{' '}
                            </f-text>
                        </f-div>
                        <f-div align="middle-right" gap="medium" width="hug-content" class="responsive-width-change">
                            <f-icon-button
                                icon="i-search"
                                size="small"
                                variant="round"
                                type="fill"
                                state="neutral"
                                class="show-search-icon"
                            ></f-icon-button>
                            <f-div
                                padding="none"
                                gap="small"
                                class="not-responsive-icon-group"
                                align="middle-right"
                                width="hug-content"
                            >
                                <f-icon source="i-git" size="medium" state="secondary" clickable={true}></f-icon>
                                <f-icon source="i-file" size="medium" state="secondary" clickable={true}></f-icon>
                                <f-icon source="i-alarm" size="medium" state="secondary" clickable={true}></f-icon>
                            </f-div>
                            <f-icon-button
                                icon="i-user"
                                size="small"
                                variant="round"
                                type="fill"
                                state="neutral"
                            ></f-icon-button>
                            <MenuPopover />
                        </f-div>
                    </f-div>
                )}

                <f-div padding="none">
                    {/* <!-- template snippet to be copied - start--> */}
                    <f-div
                        align="top-center"
                        border="small solid default right"
                        variant="block"
                        direction="column"
                        height="fill-container"
                        width={openSidebar ? '320px' : '55px'}
                        class={openSidebar ? 'mobile-view-responsive' : 'hide-in-mobile-view'}
                        state="default"
                        overflow="hidden"
                    >
                        <f-div
                            padding="small"
                            gap="small"
                            align={openSidebar ? 'middle-left' : 'middle-center'}
                            height="hug-content"
                            direction={openSidebar ? 'row' : 'column'}
                            state="default"
                            overflow="hidden"
                        >
                            <f-icon
                                source={openSidebar ? 'i-hamburger-close' : 'i-hamburger'}
                                size="large"
                                onClick={toggleSidebar}
                                clickable={true}
                            ></f-icon>
                            <f-icon-button
                                icon="i-icon"
                                size="large"
                                variant="round"
                                type="transparent"
                                state="primary"
                            ></f-icon-button>
                        </f-div>
                        <f-div
                            padding="none"
                            direction="column"
                            align="top-left"
                            overflow="scroll"
                            class="remove-scrollbar"
                        >
                            {[0].map((item) => {
                                return (
                                    <f-div
                                        padding="medium"
                                        border="small solid default bottom"
                                        align={openSidebar ? 'middle-left' : 'middle-center'}
                                        height="hug-content"
                                        selected={item === 0 ? 'notch-right' : 'none'}
                                        gap={openSidebar ? 'medium' : 'none'}
                                        state={item === 0 ? 'secondary' : 'default'}
                                        key={item}
                                    >
                                        <f-pictogram
                                            size="medium"
                                            source="🌐"
                                            state="default"
                                            variant="square"
                                        ></f-pictogram>
                                        {openSidebar ? (
                                            <f-text variant="heading" size="small" weight="medium">
                                                Heading {item}
                                            </f-text>
                                        ) : null}
                                    </f-div>
                                );
                            })}
                        </f-div>
                        <f-div
                            padding={openSidebar ? 'none' : 'small'}
                            direction="column"
                            align={openSidebar ? 'bottom-left' : 'top-center'}
                            height="hug-content"
                            border="small solid default top"
                            state="default"
                        >
                            {[0].map((item) => {
                                return (
                                    <f-div
                                        padding={openSidebar ? 'medium' : 'small'}
                                        align={openSidebar ? 'middle-left' : 'middle-center'}
                                        height="hug-content"
                                        gap="medium"
                                        key={item}
                                        overflow="hidden"
                                    >
                                        <f-icon
                                            source="i-setting"
                                            size="large"
                                            state="secondary"
                                            clickable={true}
                                        ></f-icon>
                                        {openSidebar ? (
                                            <f-text variant="heading" size="small" weight="medium">
                                                Heading
                                            </f-text>
                                        ) : null}
                                    </f-div>
                                );
                            })}
                        </f-div>
                    </f-div>
                    {/* <!--template snippet to be copied - end --> */}
                    {children}
                </f-div>
            </f-div>
        </>
    );
};

export default Layout;
