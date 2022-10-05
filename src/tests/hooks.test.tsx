import {useDebounce, usePrevious} from '@hooks/index';
import {describe, it, expect} from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

//Test every React hook from hooks
describe('Test all hooks from hooks', () => {
    it('useDebounce', () => {
        const { result } = renderHook(() => useDebounce(1, 1000));
        expect(result.current).toBe(1);
    });
    it('usePrevious', () => {
        const { result, rerender } = renderHook((props) => usePrevious(props), {
            initialProps: 1,
        });
        expect(result.current).toBe(undefined);
        rerender(2);
        expect(result.current).toBe(1);
    });
});