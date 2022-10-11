import './layout.css';
import MenuPopover from '../Popover/MenuPopover/MenuPopover';
import { useState } from 'react';

type Props = {
    children: JSX.Element;
};
const Layout = ({ children }: Props) => {
    //open/close sidebar variable
    const [openSidebar, setOpenSidebar] = useState(false);
    //function to toggle sidebar open/close
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <>
            {/* starterkit-react */}
            <f-div direction="column" padding="none" height="100%" state="default" id="starterkit-react">
                {/* top-nav hidden when screen size is less than 600px */}
                {openSidebar && window.matchMedia('(max-width: 600px)').matches ? null : (
                    // top-nav section start
                    <f-div
                        align="middle-left"
                        gap="small"
                        border="small solid default bottom"
                        padding="medium"
                        variant="block"
                        state="default"
                        id="top-nav"
                        height="hug-content"
                    >
                        {/* section-left start */}
                        <f-div align="middle-left" gap="small" width="hug-content" id="secion-left">
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
                        {/* section-left end */}
                        {/* section-middle start */}
                        <f-div
                            align="middle-left"
                            gap="small"
                            width="fill-container"
                            class="not-responsive-header"
                            id="section-middle"
                        >
                            {/* left-swappable items section start */}
                            <f-icon source="i-arrow-left" size="small" clickable={true}></f-icon>
                            <f-text variant="heading" size="x-small" weight="regular">
                                Home / Foundation{' '}
                            </f-text>
                            {/* left-swappable items section end */}
                        </f-div>
                        {/* section-middle end */}
                        {/* section-right start */}
                        <f-div
                            align="middle-right"
                            gap="medium"
                            width="hug-content"
                            class="responsive-width-change"
                            id="section-right"
                        >
                            {/* right swappable items section start */}
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
                            {/* right swappable items section end */}
                        </f-div>
                        {/* section-right end */}
                    </f-div>
                    // top-nav section end
                )}
                {/* body section start */}
                <f-div padding="none" id="body">
                    {/* <!-- side-nav start--> */}
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
                        id="side-nav"
                    >
                        {/* section-top start */}
                        <f-div
                            padding="small"
                            gap="small"
                            align={openSidebar ? 'middle-left' : 'middle-center'}
                            height="hug-content"
                            direction={openSidebar ? 'row' : 'column'}
                            state="default"
                            overflow="hidden"
                            id="section-top"
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
                        {/* section-top end */}
                        {/* section-middle start */}
                        <f-div
                            padding="none"
                            direction="column"
                            align="top-left"
                            overflow="scroll"
                            class="remove-scrollbar"
                            id="section-middle"
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
                        {/* section-middle end */}
                        {/* section-bottom start */}
                        <f-div
                            padding={openSidebar ? 'none' : 'small'}
                            direction="column"
                            align={openSidebar ? 'bottom-left' : 'top-center'}
                            height="hug-content"
                            border="small solid default top"
                            state="default"
                            id="section-bottom"
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
                        {/* section-bottom end */}
                    </f-div>
                    {/* side-nav end --> */}
                    {/* main body content in children */}
                    {children}
                </f-div>
                {/* body section end */}
            </f-div>
            {/* starterkit-react */}
        </>
    );
};

export default Layout;
