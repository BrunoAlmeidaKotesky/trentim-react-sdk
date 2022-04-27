import * as React from 'react';
export declare type IBaseFrame = React.ComponentProps<'iframe'> & {
    refDepencyList?: React.DependencyList;
    refChanged?: (ref?: React.MutableRefObject<HTMLIFrameElement>) => void;
};
export declare type IFrameProps = IBaseFrame & {
    fallback?: JSX.Element;
};
/**The same thing as the <iframe>, but it can be lazy loaded and needs a fallback component.
 *
 * You can also pass a callback with the ref of the iframe, and it's dependency list.
 *
 * https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15
 * */
export declare function IFrame(props: IFrameProps): JSX.Element;
export default IFrame;
