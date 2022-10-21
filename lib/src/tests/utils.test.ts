import {getDeepKeys, getDeepValue, setDeepValue, tryJSONParse} from '@helpers/objectUtils';
import {convertIsoToLocaleString} from '@helpers/general';
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
});