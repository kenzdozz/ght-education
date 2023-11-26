import { DetailedHTMLProps, HTMLAttributes, BlockquoteHTMLAttributes, CSSProperties } from 'react';

export interface NavItem {
  title: string;
  url: string;
  subNav?: {
    title: string;
    url: string;
  }[];
}

export type TAnimatTransitionName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUpBig'
  | 'fadeInDownBig'
  | 'fadeInLeftBig'
  | 'fadeInRightBig'
  | 'In'
  | 'InUp'
  | 'InDown'
  | 'InLeft'
  | 'InRight'
  | 'InUpBig'
  | 'InDownBig'
  | 'InLeftBig'
  | 'InRightBig'
  | 'scale'
  | 'scaleX'
  | 'scaleY';

export type TAs =
  | 'label'
  | 'strong'
  | 'address'
  | 'nav'
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'hr'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'ul'
  | 'ol'
  | 'li'
  | 'section'
  | 'i'
  | 'small'
  | 'blockquote';

export interface ContainerProps
  extends Partial<
    DetailedHTMLProps<
      HTMLAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
    >
  > {
  as?: TAs;
  dynamic?: boolean;
  cRef?: React.RefObject<HTMLElement>;
}

export interface NavItem {
  title: string;
  url: string;
  subNav?: {
    title: string;
    url: string;
  }[];
}
export type SVGIconName =
  | 'interview'
  | 'review'
  | 'document'
  | 'tourist'
  | 'petal'
  | 'school'
  | 'check'
  | 'atom'
  | 'ring'
  | 'flight'
  | 'speaker-phone'
  | 'plane-arrival'
  | 'sad-face'
  | 'accomodation'
  | 'apply'
  | 'badge'
  | 'grad-cap'
  | 'world'
  | 'face-book'
  | 'instagram';

export interface IconProps {
  name?: SVGIconName & string;
  className?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
  crop?: boolean;
  style?: CSSProperties;
  fontSize?: string;
  children?: React.ReactNode;
}

export interface ISendInput {
  email: string;
  lastName: string;
  firstName: string;
  phone: string;
  state: string;
  message: string;
  country: string;
  school: string;
}
