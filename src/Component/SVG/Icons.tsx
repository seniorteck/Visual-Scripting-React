interface IconProps
{
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    strokeFill?: string;
    childrenVisible?: boolean;
    onClick?(event : React.MouseEvent) : void;
}

export const IconDir = (props : IconProps) =>
{
    let shouldAnimate = props?.childrenVisible ? " animate" : "";
    return (
            <svg onClick={props.onClick}  className={props.className + shouldAnimate} id="icon-dir" viewBox="0 0 20 20">
                <path fill={props.fill} d="M15 10c0 .3-.305.515-.305.515l-8.56 5.303c-.625.41-1.135.106-1.135-.67V4.853c0-.777.51-1.078 1.135-.67l8.56 5.305S15 9.702 15 10z"></path>
            </svg>
             )
    
}


export const PlusIcon = (props : IconProps) =>
{
    return  (
        <svg onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" width="28" height="28" version="1.1" viewBox="0 0 7.4083 7.4083">
           <path d="m6.4256 3.6881h-5.4807m2.7403-2.7403v5.4807" fill="#000000" strokeLinecap="round" strokeWidth="1.841"/>
        </svg>
    )
}


export const CancelIcon = (props : IconProps) =>
{
    return (
        <svg className={"cancelIcon" + " " +props.className} stroke={props.strokeFill} xmlns="http://www.w3.org/2000/svg" width="10" height="10" version="1.1" viewBox="0 0 2.6458 2.6458">
            <path d="m0.16106 0.12652 2.3399 2.3928m0.01879-2.3578-2.3937 2.3228" fill="#000000"></path>
        </svg>
    )
}

export const CircleIcon = (props : IconProps) =>
{
    return (
        <svg className="pointerEventNone"  width="10px" height="10px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle  className={props.className} cx="5" cy="5" r="5" fill={props.fill}/>
        </svg>
        )
}
