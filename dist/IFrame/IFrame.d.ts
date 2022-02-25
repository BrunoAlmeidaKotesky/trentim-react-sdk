import * as React from 'react';
export declare type IBaseFrame = React.ComponentPropsWithRef<'iframe'> & {
    refDepencyList?: React.DependencyList;
    refChanged?: (ref?: HTMLIFrameElement) => void;
};
export declare type IFrameProps = IBaseFrame & {
    fallback?: JSX.Element;
};
/**https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15*/
export declare function IFrame(props: IFrameProps): JSX.Element;
export default IFrame;
