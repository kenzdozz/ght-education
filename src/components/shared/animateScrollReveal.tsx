"use client";

import React, {
    FC,
    PropsWithChildren,
    Children,
    useCallback,
    memo,
    useMemo,
} from "react";
import { ContainerProps, TAnimatTransitionName, TAs } from "@/types";
import { Container } from ".";

const _AnimateScrollReveal: FC<
    PropsWithChildren & {
        animName?: TAnimatTransitionName;
        allowOverflow?: boolean;
        delay?: number;
        duration?: number;
        easing?: string;
    } & ContainerProps
> = ({
    children,
    animName,
    className,
    allowOverflow,
    easing,
    delay,
    duration,
    ...props
}): JSX.Element => {

        return (
            <Container
                {...useMemo(() => props, [props])}
                className={`${className || ""} anim trans__${animName || "fadeInUp"} ${allowOverflow ? "overflow-visible" : "overflow-clip"
                    }`.trim()}
                data-anim-container
                style={{
                    transitionDelay: `${delay ?? (0 * 0.12).toFixed(2)}s`,
                    transitionTimingFunction: `${easing || "cubic-bezier(0.5, -0.25, .25, 1.125)"}`,
                    transitionDuration: `${duration || 0.75}s`,
                }}
            >
                {children}
            </Container>
        );
    };

export const AnimateScrollReveal = memo(_AnimateScrollReveal);
