import { FC, memo, useMemo } from 'react';
import { Container } from '.';
import { IconProps } from '@/types';

const _Icon: FC<IconProps> = ({
    children,
    name,
    size,
    fontSize: _fontSize,
    crop,
    className,
    ...other
}) => {
    const fontSize = useMemo(() => ({ fontSize: _fontSize }), [_fontSize]);

    return (
        <Container
            as="i"
            className={`Icon name__${name || ''} size__${size || 'inherit'} ${className || ''} ${crop ? 'overflow-clip' : ''
                }`.trim()}
            role="img"
            aria-label={`${name || ''} icon`}
            style={other.style ? { ...other.style, ...fontSize } : fontSize}>
            {children}
        </Container>
    );
};

export const Icon: FC<IconProps> = memo(_Icon);
