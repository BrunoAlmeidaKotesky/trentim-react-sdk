/**Measures the execution of a class method.
 * @param disabled - If true, the measure is disabled.
 * @default false
 * @param logCss - Custom `console.log` css if desired.
 * @default 'color: white; background-color: #3e88ef'
 * @returns The measured method.
 */
export declare function Measure(disable?: boolean, logCss?: string): (_target: Object, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
