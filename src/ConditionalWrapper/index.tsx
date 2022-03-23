
import * as React from 'react';

interface IConditionalWrapperProps {
    /**The condition to render the wrapper or not. */
    condition: boolean;
    /**A function that accepts any JSX/React Node, with the wrapped component being the child. */
    wrapper: (children:  React.ReactNode) => JSX.Element;
    /**The wrapped component. */
    children: JSX.Element;
}

/**
 * A wrapper that will only render the wrapper of the child if the condition is true.
 * 
 * The wrapped component will always be rendered.
 * @example
 * ```tsx
 *  <ConditionalWrapper
        condition={isOpen}
        wrapper={(child) => (<WrapperComponent>{child}</WrapperComponent>)}>
        <WrappedComponent />
    </ConditionalWrapper>
 * ```
 */
export const ConditionalWrapper = ({ condition, wrapper, children }: IConditionalWrapperProps) => condition ? wrapper(children) : children;