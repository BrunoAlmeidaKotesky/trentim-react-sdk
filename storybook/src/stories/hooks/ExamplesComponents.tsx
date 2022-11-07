
import React from "react";
import { ChangeEvent, useState } from "react";
import { useDebounce, useOuterClick, usePrevious, useWindowSize, useFileUpload } from 'trentim-react-sdk/hooks';

export function DebounceExample() {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 1000);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setValue(event.target.value) }
    return (<div>
        Debounced value: {debouncedValue}
        <input type="text" value={value} onChange={handleChange} />
    </div>)
}

export function OuterClickExample() {
    //@ts-ignore
    const [clickLabel, setClickLabel] = useState<'outside' | 'inside' | 'cancelled'>(null);
    const style = {
        width: 200, height: 35, display: 'grid', placeItems: 'center'
    }
    const buttonRef = useOuterClick<HTMLButtonElement>(
        (_pointerEv) => setClickLabel('outside'),
        (pointerEv) => {
            //@ts-ignore
            if (pointerEv.target?.['id'] === 'outer-hook-cancel-button') {
                setClickLabel('cancelled');
                return true;
            }
            return false;
        }
    );

    return (
        <div style={{ justifyContent: 'space-around', display: 'flex' }}>
            <button
                style={{ ...style, backgroundColor: 'rgb(112, 219, 223)' }}
                ref={buttonRef}
                onClick={() => setClickLabel('inside')}>
                {clickLabel === 'inside' ?
                    'Clicked inside' : clickLabel === 'outside' ?
                        'Clicked outside' : clickLabel === 'cancelled' ?
                            'Callback was ignored.' : 'Not clicked'}
            </button>
            <button
                id="outer-hook-cancel-button"
                style={{ ...style, backgroundColor: '#ba6f6f' }}>Ignore outside click callback.</button>
        </div>
    );
}

export function PreviousExample() {
    const [counter, setCounter] = useState(0);
    const prevCount = usePrevious(counter);
    return (
        <button onClick={() => setCounter(p => p + 1)}>
            Current: {counter}, Previous: {prevCount}
        </button>);
}

export function SizeExample() {
    const { height, width } = useWindowSize();
    return <div>Current size: {width} x {height}</div>
}

export function UseFileEx() {
    const { onUpload, elementRef, onDropFile, isDroppingFile } = useFileUpload();
    const [currentFile, setFile] = useState<File | null>(null);
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {

        if (count % 4 === 0) {
            onUpload((files) => {
                console.log(`Clicked count is ${count}, files: `);
                console.table(files);
                setFile(files[0]);
            }, ['image/*']);
        }
    }, [count]);

    React.useEffect(() => {
        onDropFile((droppedFiles) => {
            console.log("Dropped files: ", droppedFiles);
            setFile(droppedFiles[0]);
        })
    }, [isDroppingFile]);

    return (<div style={{display: 'grid', margin: '0 auto', width: '80%', gap: 12}}>
        <button onClick={() => onUpload((files) => { console.log(files); setFile(files[0]); }, ['image/*'])}>Upload file</button>
        <button onClick={() => setCount(p => p + 1)}>Click four times to execute upload function</button>
        <div style={{ width: '100%', height: 120, border: '2px dotted black', cursor: 'crosshair', borderRadius: 8 }} ref={elementRef as any}>Drop a file</div>
        {currentFile && <img style={{width: '100%', height: 150, objectFit: 'fill'}} src={URL.createObjectURL(currentFile)} />}
    </div>)
}