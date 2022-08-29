import * as React from 'react';
import { ChangeEvent, useCallback, useState } from "react";
import { useDebounce, useOuterClick, usePrevious, useWindowSize, useRefWithCallback, useEvent, useFileUpload } from 'trentim-react-sdk';

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

export function RefExample1() {
    const [refCallback, ref, toggle] = useRefWithCallback<HTMLSpanElement>(null as unknown as HTMLSpanElement);
    const onClick = useCallback(() => {
        if (ref.current)
            ref.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }, [toggle]);

    return (
        <div>
            <button onClick={onClick}>Change color</button>
            <br />
            <div ref={refCallback} style={{ width: '100%', height: 10 }}></div>
        </div>
    );
}

export function Chat() {
    const [message, setMessage] = useState<string>('');

    const onSend = useEvent(() => {
        alert(`Sending message: ${message}`);
    });

    return (
    <div style={{display: 'flex', gap: 8}}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <ChatConfirm onSend={onSend} />
    </div>);
}

const ChatConfirm = ({ onSend }: { onSend: () => void }) => <button onClick={onSend}>Send</button>


export function UseFileEx() {
    const { onUpload, elementRef, onDropFile, isDroppingFile } = useFileUpload();
    const [currentFile, setFile] = useState<File>(null);
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {

        if (count % 4 === 0) {
            onUpload((files) => {
                console.log(`Clicked count is ${count}, files: `);
                console.table(files);
                setFile(files[0]);
            })
        }
    }, [count]);

    React.useEffect(() => {
        onDropFile((droppedFiles) => {
            console.log("Dropped files: ", droppedFiles);
            setFile(droppedFiles[0]);
        })
    }, [isDroppingFile]);

    return (<div style={{display: 'grid', margin: '0 auto', width: '80%', gap: 12}}>
        <button onClick={() => onUpload((files) => { console.log(files); setFile(files[0]); })}>Upload file</button>
        <button onClick={() => setCount(p => p + 1)}>Click four times to execute upload function</button>
        <div style={{ width: '100%', height: 120, border: '2px dotted white', cursor: 'crosshair', borderRadius: 8 }} ref={elementRef as any}>Drop a file</div>
        {currentFile && <img src={URL.createObjectURL(currentFile)} />}
    </div>)
}