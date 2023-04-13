import './layout.css';
import MenuPopover from '../Popover/MenuPopover/MenuPopover';
import { useState } from 'react';

type Props = {
    children: JSX.Element;
};
const Layout = ({ children }: Props) => {
    //open/close sidebar variable
    const [openSidebar, setOpenSidebar] = useState(false);
    //open/close avatar variable
    const [openAvatar, setOpenAvatar] = useState(false);
    const [theme, setTheme] = useState('f-light');
    //function to toggle sidebar open/close
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    //Toggle Avatar Popup
    const toggleAvatarPopup = () => {
        setOpenAvatar(!openAvatar);
    };

    const changeTheme = (updatedtheme: 'f-dark' | 'f-light') => {
        setTheme(updatedtheme);
    };

    return (
        <>
            {/* starterkit-react */}
            <f-div data-f-id="starterkit-react" direction="column" padding="none" height="100%" state="default">
                {/* top-nav hidden when screen size is less than 600px */}
                {openSidebar && window.matchMedia('(max-width: 600px)').matches ? null : (
                    // top-nav start
                    <f-div
                        data-f-id="top-nav"
                        padding="medium"
                        gap="small"
                        state="secondary"
                        align="middle-left"
                        height="hug-content"
                        border="small solid default bottom"
                        class="top-nav"
                    >
                        {/* This data-f-id=\"top-nav-left\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-left-logo */}
                        <f-div data-f-id="top-nav-left" width="hug-content" align="middle-center" gap="small">
                            <f-icon-button
                                icon="i-hamburger"
                                variant="round"
                                size="large"
                                state="neutral"
                                category="packed"
                                class="responsive-header"
                                onClick={toggleSidebar}
                            ></f-icon-button>
                            <f-icon source="p-cloudcover-dark" size="large"></f-icon>
                        </f-div>
                        {/* This data-f-id=\"top-nav-middle\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-middle-breadcrumb */}
                        <f-div data-f-id="top-nav-middle" gap="small" align="middle-left" class="not-responsive-header">
                            <f-icon source="i-arrow-left"></f-icon>
                            <f-text size="small">Home / Project / Environment / Application / Logs</f-text>
                        </f-div>
                        {/* This data-f-id=\"top-nav-right\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-right-search */}
                        <f-div
                            data-f-id="top-nav-right"
                            align="middle-right"
                            gap="large"
                            class="responsive-width-change"
                            width="hug-content"
                        >
                            <f-icon-button icon="i-search" size="small" state="neutral"></f-icon-button>
                            <f-div gap="small" width="hug-content" class="not-responsive-icon-group">
                                <f-icon-button
                                    icon="i-git"
                                    variant="round"
                                    size="large"
                                    state="neutral"
                                    category="packed"
                                ></f-icon-button>
                                <f-icon-button
                                    icon="i-file"
                                    variant="round"
                                    size="large"
                                    state="neutral"
                                    category="packed"
                                ></f-icon-button>
                                <f-icon-button
                                    icon="i-alarm"
                                    variant="round"
                                    size="large"
                                    state="neutral"
                                    category="packed"
                                ></f-icon-button>
                            </f-div>
                            <f-popover
                                size="small"
                                overlay-click={toggleAvatarPopup}
                                open={openAvatar ? true : undefined}
                                target="#profilePopover"
                            >
                                <f-div direction="column" state="secondary">
                                    <f-div padding="medium" gap="small" border="small solid default bottom">
                                        <f-pictogram source="i-user" variant="circle"></f-pictogram>
                                        <f-div direction="column">
                                            <f-text size="x-small" state="secondary">
                                                Logged in as
                                            </f-text>
                                            <f-text>no@email.com</f-text>
                                        </f-div>
                                        <f-div align="top-right">
                                            <f-icon source="i-edit" state="secondary"></f-icon>
                                        </f-div>
                                    </f-div>
                                    <f-div
                                        padding="medium"
                                        gap="small"
                                        clickable
                                        state="default"
                                        selected={theme === 'f-dark' ? 'background' : 'none'}
                                        onClick={() => changeTheme('f-dark')}
                                    >
                                        <f-text>Dark theme</f-text>
                                        {theme === 'f-dark' ? <f-icon source="i-tick" state="success"></f-icon> : null}
                                    </f-div>
                                    <f-div
                                        padding="medium"
                                        gap="small"
                                        border="small solid default bottom"
                                        clickable
                                        selected={theme === 'f-dark' ? 'background' : 'none'}
                                        onClick={() => changeTheme('f-light')}
                                    >
                                        <f-text>Light theme</f-text>
                                        {theme === 'f-light' ? <f-icon source="i-tick" state="success"></f-icon> : null}
                                    </f-div>
                                    <f-div padding="medium" gap="small" clickable>
                                        <f-text>Logout</f-text>
                                    </f-div>
                                </f-div>
                            </f-popover>
                            <f-icon-button
                                icon="i-user"
                                size="small"
                                state="neutral"
                                id="profilePopover"
                                onClick={toggleAvatarPopup}
                            ></f-icon-button>
                            <MenuPopover></MenuPopover>
                        </f-div>
                    </f-div>
                    // top-nav end
                )}
                {/* body section start */}
                <f-div data-f-id="body" padding="none">
                    {/* <!-- side-nav start--> */}
                    <f-div
                        data-f-id="side-nav"
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
                        {/* section-top start */}
                        <f-div
                            data-f-id="side-nav-top"
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
                                category="transparent"
                                state="primary"
                            ></f-icon-button>
                        </f-div>
                        {/* section-top end */}
                        {/* section-middle start */}
                        <f-div
                            data-f-id="side-nav-middle"
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
                        {/* section-middle end */}
                        {/* section-bottom start */}
                        <f-div
                            data-f-id="side-nav-bottom"
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
