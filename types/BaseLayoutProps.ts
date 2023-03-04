import * as React from 'react';

export interface BaseProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export default interface BaseLayoutProps extends BaseProps {
    children?: React.ReactNode;
}