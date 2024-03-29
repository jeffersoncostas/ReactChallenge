export const utilProps = (props: any) => {
    return `
    ${props.italic ? "font-style:italic" : ""};
    ${props.alignItems ? `display:flex;align-items:${props.alignItems}` : ""};
    ${props.alignSelf ? `align-self:${props.alignSelf}` : ""};
    ${props.justifyContent ? `justify-content:${props.justifyContent}` : ""};
    ${props.wrap ? "flex-wrap:wrap" : ""};
    ${props.flex ? `flex:${props.flex}` : ""};
    ${props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
    ${props.marginBottom ? `margin-bottom:${props.marginBottom}` : ""};
    ${props.marginTop ? `margin-top:${props.marginTop}` : ""};
    ${props.marginRight ? `margin-right:${props.marginRight}` : ""};
    ${props.marginLeft ? `margin-left:${props.marginLeft}` : ""};
    ${props.contentWidth ? ` width: ${props.contentWidth} ` : ""};
    ${props.paddingRight ? ` padding-right: ${props.paddingRight} ` : ""};
    ${props.paddingHorizontal ? ` padding-horizontal: ${props.paddingHorizontal} ` : ""};
    ${props.paddingVertical ? ` padding-vertical: ${props.paddingVertical} ` : ""};
    ${props.paddingLeft ? ` padding-left: ${props.paddingLeft} ` : ""};
    ${props.paddingTop ? ` padding-top: ${props.paddingTop} ` : ""};
    ${props.minHeight ? ` min-height: ${props.minHeight} ` : ""};
    ${props.height ? ` height: ${props.height} ` : ""};
    ${props.minWidth ? ` min-width: ${props.minWidth} ` : ""};
    ${props.fontSize ? ` font-size: ${props.fontSize} ` : ""};
    ${props.color ? ` color: ${props.color} ` : ""};
    ${props.fontWeight ? ` font-weight: ${props.fontWeight} ` : ""};
    ${props.borderRadius ? ` border-radius: ${props.borderRadius} ` : ""};
    ${props.position ? ` position: ${props.position} ` : ""};


    `
}
