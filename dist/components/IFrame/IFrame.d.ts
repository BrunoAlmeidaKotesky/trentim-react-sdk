import * as React from 'react';
export declare type IBaseFrame = React.ComponentPropsWithRef<'iframe'> & {
    refOpt?: {
        refCallback: (ref: HTMLIFrameElement) => void;
        dep?: React.DependencyList;
    };
};
export declare type IFrameProps = IBaseFrame & {
    fallback?: JSX.Element;
};
/**https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15*/
export declare function IFrame(props: IFrameProps): JSX.Element;
export default IFrame;
