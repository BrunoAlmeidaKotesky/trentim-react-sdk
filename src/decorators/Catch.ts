function isPromise(object: any): object is Promise<any> {
    return object && Promise.resolve(object) === object;
}

function isFunction(func: any): func is Function {
    return typeof func === "function" || func instanceof Function;
}

export type Handler<E = any, Args extends any[] = any[], C = any, R = any> = (err: E, context: C, ...args: Args) => R;

function Factory<E = any, Args extends any[] = any[], C = any, R = any>(ErrorClassConstructor: Function | Handler<E, Args, C>, handler?: Handler<E, Args, C, R>) {
    return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor;
        if (!handler) {
            handler = ErrorClassConstructor as Handler;
            ErrorClassConstructor = (undefined as unknown) as any;
        }

        descriptor.value = async function (...args: any[]) {
            try {
                const response = value.apply(this, args);
                return isPromise(response) ? await response : Promise.resolve(response);
            } catch (error) {
                if (
                    isFunction(handler) &&
                    (ErrorClassConstructor === undefined ||
                        error instanceof ErrorClassConstructor)
                ) {
                    return handler.call(null, error, this, ...args);
                }
                throw error;
            }
        };

        return descriptor;
    };
};

export function Catch<Error = any, Args extends any[] = any[], Ctx = any, Returned = any>(ErrorClassConstructor: Function, handler: Handler<Error, Args, Ctx, Returned>) {
    return Factory(ErrorClassConstructor, handler);
}

export function DefaultCatch<Error = any, Args extends any[] = any[], Ctx = any, Returned = any>(handler: Handler<Error, Args, Ctx, Returned>) {
    return Factory(handler);
}