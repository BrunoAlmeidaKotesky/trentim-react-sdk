import * as React from 'react';
import { Suspense, useEffect, useLayoutEffect, useRef, useState }  from 'react';

export type IBaseFrame = React.ComponentPropsWithRef<'iframe'> & {
    refDepencyList?: React.DependencyList;
    refChanged?: (ref?:  HTMLIFrameElement) => void;
}

export type IFrameProps = IBaseFrame & {
    fallback?: JSX.Element;
};


/**https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15*/
export function IFrame(props: IFrameProps) {
    const { fallback, ...rest } = props;

    return (
        <Suspense fallback={fallback || 'loading...'}>
            <IFrameImplementation {...rest} />
        </Suspense>
    );
}

function IFrameImplementation(props: IBaseFrame) {
    const [v, setValue] = useState(0); // integer state
    const awaiter = useRef<null | {
        promise: null | Promise<void>;
        resolve: () => void;
        reject: () => void;
    }>(null);
    
    const [_, triggerLoad] = useState(false)
    if (awaiter.current?.promise) {
        throw awaiter.current.promise;
    }

    useLayoutEffect(() => {
        if (awaiter.current === null) {
            // @ts-ignore
            awaiter.current = {}
            // @ts-ignore
            awaiter.current.promise = new Promise<void>((resolve, reject) => {
                Object.assign(awaiter.current, { resolve, reject });
            });
            triggerLoad(true)
        }
    }, []);

    useEffect(() => {
        setValue(v + 1);
    }, props?.refDepencyList);

    const { title } = props;
    return (
        <iframe
            {...props}
            ref={ref => props?.refChanged?.(ref)}
            title={title}
            onLoad={(e) => {
                // @ts-ignore
                awaiter.current.promise = null;
                awaiter.current?.resolve();
                props.onLoad?.(e);
            }}
            onError={(err) => {
                // @ts-ignore
                awaiter.current.promise = null;
                awaiter.current?.reject();
                props.onError?.(err);
            }}
        />
    );
}

export default IFrame;