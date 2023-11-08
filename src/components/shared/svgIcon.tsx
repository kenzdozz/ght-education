// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from "react";

import { Icon, SVG } from ".";
import { SVGIconName, IconProps } from "@/types";

const _SVGIcon: FC<
    { name: SVGIconName } & IconProps &
    DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, size, ...props }): JSX.Element => {
    return (
        <Icon {...props} name={name} size={size}>
            {(() => {
                switch (name) {
                    case "tourist":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-chalkboard"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" />
                                <path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            </SVG>
                        );
                    case "school":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-school"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </SVG>
                        );
                    case "atom":
                        return (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-atom"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12v.01" />
                                <path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" />
                                <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" />
                            </svg>
                        );
                    case "check":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-check"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </SVG>
                        );
                    case "ring":
                        return (
                            <SVG
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-topology-star-ring-3"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                                <path d="M6 12h4" />
                                <path d="M14 12h4" />
                                <path d="M15 7l-2 3" />
                                <path d="M9 7l2 3" />
                                <path d="M11 14l-2 3" />
                                <path d="M13 14l2 3" />
                                <path d="M10 5h4" />
                                <path d="M10 19h4" />
                                <path d="M17 17l2 -3" />
                                <path d="M19 10l-2 -3" />
                                <path d="M7 7l-2 3" />
                                <path d="M5 14l2 3" />
                            </SVG>
                        );
                    case "flight":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
                            </SVG>
                        );
                    case "speaker-phone":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-speakerphone" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 8a3 3 0 0 1 0 6" />
                                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                                <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                            </SVG>
                        );
                    case "plane-arrival":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-arrival" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797z" />
                                <path d="M3 21h18" />
                            </SVG>
                        );
                    case "sad-face":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
                                <path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
                                <path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
                            </SVG>
                        );
                    case "petal":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M2 9a10 10 0 1 0 20 0" />
                                <path d="M12 19a10 10 0 0 1 10 -10" />
                                <path d="M2 9a10 10 0 0 1 10 10" />
                                <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                                <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
                            </SVG>
                        );
                    case "accomodation":
                        return (
                            <SVG xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l18 0" />
                                <path d="M5 21v-14l8 -4v18" />
                                <path d="M19 21v-10l-6 -4" />
                                <path d="M9 9l0 .01" />
                                <path d="M9 12l0 .01" />
                                <path d="M9 15l0 .01" />
                                <path d="M9 18l0 .01" />
                            </SVG>
                        );


                    default:
                        return <></>;
                }
            })()}
        </Icon>
    );
};

export const SVGIcon = memo(_SVGIcon);
