// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from "react";

import { Icon, SVG } from ".";
import { SVGIconName, IconProps } from "@/types";

const _SVGIcon: FC<
    { name: SVGIconName } & IconProps &
    DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, size, ...props }): JSX.Element => {
    console.log(name, 'name');

    return (
        <Icon {...props} name={name} size={size}>
            {(() => {
                switch (name) {
                    case "tourist":
                        return (
                            <SVG
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/SVG"
                            >
                                <path
                                    d="M12.0001 1.33325H10.0001C9.11603 1.33325 8.26818 1.68444 7.64306 2.30956C7.01794 2.93468 6.66675 3.78253 6.66675 4.66659V6.66659H4.66675V9.33325H6.66675V14.6666H9.33341V9.33325H11.3334L12.0001 6.66659H9.33341V4.66659C9.33341 4.48977 9.40365 4.32021 9.52868 4.19518C9.6537 4.07016 9.82327 3.99992 10.0001 3.99992H12.0001V1.33325Z"
                                    stroke="#1971F5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </SVG>
                        );

                    default:
                        return <></>;
                }
            })()}
        </Icon>
    )
};

export const SVGIcon = memo(_SVGIcon);
