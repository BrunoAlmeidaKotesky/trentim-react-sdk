
/**Measures the execution of a class method.
 * @param disabled - If true, the measure is disabled.
 * @default false
 * @param logCss - Custom `console.log` css if desired.
 * @default 'color: white; background-color: #3e88ef'
 * @returns The measured method.
 */
export function Measure(disable: boolean = false, logCss?: string) {
    return function (_target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        if(disable)
            return descriptor;
        descriptor.value = function (...args: any[]) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const finish = performance.now();
            console.log(`%c${propertyKey} - Execution time: ${finish - start} milliseconds`, logCss ?? 'color: white; background-color: #3e88ef');
            return result;
        };

        return descriptor;
    }
}