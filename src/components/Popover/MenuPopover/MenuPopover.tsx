import { useState } from 'react';
import '../../Layout/layout.css';

const MenuPopover = () => {
    const recursiveArray = [0, 1, 2];
    const [openMenuPopover, setOpenMenuPopover] = useState(false);
    const togglePopover = () => {
        setOpenMenuPopover(!openMenuPopover);
    };
    return (
        <>
            <f-popover
                open={openMenuPopover ? openMenuPopover : undefined}
                overlay={true}
                size={window.matchMedia('(max-width: 600px)').matches ? 'stretch' : 'small'}
                target="#popoverTarget"
                overlay-click={togglePopover}
            >
                <f-div direction="column">
                    {recursiveArray.map((item, index) => {
                        return (
                            <f-div
                                gap="small"
                                border={index !== recursiveArray.length - 1 ? 'small solid default bottom' : undefined}
                                padding="medium"
                                key={item}
                            >
                                <f-div width="hug-content" align="middle-left">
                                    <f-icon source="i-icon" size="medium" state="secondary"></f-icon>
                                </f-div>
                                <f-div width="fill-container" align="middle-left">
                                    <f-text variant="heading" size="small" weight="medium">
                                        Heading
                                    </f-text>
                                </f-div>
                                <f-div width="hug-content" align="middle-right">
                                    <f-icon
                                        source="i-chevron-right"
                                        size="small"
                                        state="secondary"
                                        clickable={true}
                                    ></f-icon>
                                </f-div>
                            </f-div>
                        );
                    })}
                </f-div>
            </f-popover>
            <f-icon
                source="i-more"
                size="medium"
                state="secondary"
                id="popoverTarget"
                onClick={togglePopover}
                clickable={true}
                class="responsive-icon-group"
            ></f-icon>
        </>
    );
};

export default MenuPopover;
