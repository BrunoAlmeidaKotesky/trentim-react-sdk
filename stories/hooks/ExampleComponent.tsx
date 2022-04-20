import * as React from 'react';
import { ChangeEvent, useState } from "react";
import { useDebounce } from '../../src/hooks/useDebounce';

export default function Component() {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 1000);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setValue(event.target.value) }
    return (<div>
        Debounced value: {debouncedValue}
        <input type="text" value={value} onChange={handleChange} />
    </div>)
}