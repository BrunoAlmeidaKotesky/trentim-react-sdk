import * as React from 'react';
import { ChangeEvent, useCallback, useState } from "react";
import { useDebounce } from '../../src/hooks/useDebounce';
import { useOuterClick } from '../../src/hooks/useOuterClick';
import { usePrevious } from '../../src/hooks/usePrevious';
import { useWindowSize } from '../../src/hooks/useWindowSize';
import { useRefWithCallback } from '../../src/hooks/useRefWithCallback';

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
    const [clickLabel, setClickLabel] = useState<'outside' | 'inside' | 'cancelled'>(null);
    const style = {
        width: 200, height: 35, display: 'grid', placeItems: 'center'
    }
    const buttonRef = useOuterClick<HTMLButtonElement>(
        (_pointerEv) => setClickLabel('outside'),
        (pointerEv) => {
            if(pointerEv.target?.['id'] === 'outer-hook-cancel-button') {
                setClickLabel('cancelled');
                return true;
            }
            return false;
        }
    );

    return (
        <div style={{justifyContent: 'space-around', display: 'flex'}}>
            <button
                style={{...style, backgroundColor: 'rgb(112, 219, 223)'}}
                ref={buttonRef}
                onClick={() => setClickLabel('inside')}>
                {clickLabel === 'inside' ?
                    'Clicked inside' : clickLabel === 'outside' ?
                    'Clicked outside' : clickLabel === 'cancelled' ? 
                    'Callback was ignored.' : 'Not clicked'}
            </button>
            <button
                id="outer-hook-cancel-button" 
                style={{...style, backgroundColor: '#ba6f6f'}}>Ignore outside click callback.</button>
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
    const {height, width} = useWindowSize();
    return <div>Current size: {width} x {height}</div>
}

export function RefExample1() {
    const [refCallback, ref, toggle] = useRefWithCallback<HTMLSpanElement>(null);
    const onClick = useCallback(() => {
        if (ref.current) 
            ref.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }, [toggle]);

  return (
    <div>
        <button onClick={onClick}>Change color</button>
        <br/>
        <div ref={refCallback} style={{width: '100%', height: 10}}></div>
    </div>
  );
}