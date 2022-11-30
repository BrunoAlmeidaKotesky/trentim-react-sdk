import {getDeepKeys, getDeepValue, setDeepValue, tryJSONParse} from '@helpers/objectUtils';
import {convertIsoToLocaleString} from '@helpers/general';
import {memoize, memoizeAsync, pipe } from '@helpers/functional';
import {describe, it, expect} from 'vitest';

//Test every method of Utils
describe('Test all methods from Utils', () => {
    it('getDeepKeys', () => {
        const obj = {
            a: 1,
            b: {
                c: 2,
                d: {
                    e: 3,
                    f: 4
                }
            }
        };
        const keys = getDeepKeys(obj);
        expect(keys).toEqual(["a", "b", "b.c", "b.d", "b.d.e", "b.d.f"]);
    });
    it('tryJSONParse', () => {
        const parsed = tryJSONParse('{"a": 1}');
        expect(parsed).toEqual({a: 1});
    });
    it('convertIsoToLocaleString', () => {
        const date = new Date('1970-01-01T00:00:00.000Z');
        expect(convertIsoToLocaleString(date.toISOString())).not.toBe('1970-01-01T00:00:00.000Z');
    });
    it('getDeepValue', () => {
        const obj = {
            a: 1,
            b: {
                c: 2,
                d: {
                    e: new Date(),
                    f: 4
                }
            }
        };
        expect(getDeepValue(obj, 'b.d.e')).instanceOf(Date);
    });
    it('setDeepValue', () => {
        const obj = {
            a: 1,
            b: {
                c: 2,
                d: {
                    e: 3,
                    f: 4
                }
            }
        };
        const objectToCompare = {...obj, b: {...obj.b, d: {...obj.b.d, e: 5}}};
        expect(setDeepValue(obj, 'b.d.e', 5)).toEqual(objectToCompare);
    });
    it('memoize', () => {
        const func = (a: number, b: number) => a + b;
        const memoized = memoize(func);
        expect(memoized(1, 2)).toBe(3);
    });
    it('memoizeAsync', async () => {
        const func = async (a: number, b: number) => Promise.resolve(a + b);
        const memoized = memoizeAsync(func);
        expect(await memoized(1, 2)).toBe(3);
    });
    it('pipe', () => {
        const func = (a: number) => a + 1;
        const func2 = (a: number) => a * 2;
        const value = pipe(42, func, func2);
        expect(value).toBe(86);
    });
    it('pipeAsync', async () => {
        const numToString = (a: number) => a.toString();
        const stringToNum = (a: string) => parseInt(a);
        const numToStringAsync = async (a: number) => { return Promise.resolve(a.toString());}
        const stringToNumberAsync = async (b: string) => Promise.resolve(parseInt(b, 10));
        //Make 6 test cases, which one increasing the number of functions in the pipe
        expect(await pipe(42, numToStringAsync)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNumberAsync)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNumberAsync, numToStringAsync)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNumberAsync, numToString, stringToNumberAsync)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNumberAsync, numToStringAsync, stringToNumberAsync, numToStringAsync)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNumberAsync, numToStringAsync, stringToNumberAsync, numToStringAsync, stringToNum)).not.instanceOf(Promise);
        expect(await pipe(42, numToStringAsync, stringToNum, numToStringAsync, stringToNum, numToStringAsync, stringToNumberAsync)).not.instanceOf(Promise);
    });
});