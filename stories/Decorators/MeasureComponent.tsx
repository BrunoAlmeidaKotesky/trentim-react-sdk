import * as React from 'react';
import { Measure } from '../../src/Decorators/Measure';

class Example {
    @Measure()
    public longLog(): number {
        let finalValue = 0;
        for (let i = 0; i < 100000000; i++) {
            finalValue += i;
        }
        return finalValue;
    }

    @Measure(false, 'color: white; background-color: rgb(132, 229, 217)')
    public logWithCss() {
        let finalValue = 0;
        for (let i = 0; i < 100000000; i++) {
            finalValue += i;
        }
        return finalValue;
    }
}
export function MeasureExample() {
    const example = React.useMemo(() => new Example(), []);
    React.useEffect(() => {
        example.longLog();
        example.logWithCss();
    }, []);
    return (<div>Look at the storybook console to view the log.</div>);
}