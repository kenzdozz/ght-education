import { FC, memo, createElement } from 'react';
import { ContainerProps } from '@/types';

const _Container: FC<ContainerProps> = ({ as, cRef, children, ...props }): JSX.Element => {
  return createElement(as || 'div', { ...props, ref: cRef }, children);
};

export const Container = memo(_Container);
