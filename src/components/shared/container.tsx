import { FC, useState, useEffect, memo, createElement } from "react";
import { ContainerProps } from "@/types";
const _Container: FC<ContainerProps> = ({
    as,
    children,
    dynamic = true,
    ...props
}): JSX.Element => {
    const rendered = dynamic ? true : undefined;

    // useEffect(() => {
    //     if (!dynamic) {
    //         return;
    //     }
    //     // Your logic for dynamic rendering, if needed
    // }, [dynamic]);
    return createElement(as || "div", props, children);
};

export const Container = memo(_Container);
