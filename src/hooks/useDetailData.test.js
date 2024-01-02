import { describe } from "vitest";
import { renderHook, waitFor } from '@testing-library/react'
import useDetailData from './useDetailData'

describe('useDetailData', () => {
    it('Should return data correcrlt', async () => {
        const getMockPromise = (data) => {
            return function() {
                return Promise.resolve({
                    code: 200,
                    data,
                    message: 'success',
                })
            }
        }
        const { result, rerender } = renderHook(
            (props) => useDetailData(props.promise, props.dependencies),
            {
                initialProps: {
                    promise: getMockPromise('data'),
                    dependencies: ['test dependency']
                }
            }
        );
        await waitFor(() => {
            expect(result.current).toBe('data');
        });
        rerender({promise: getMockPromise('data2'), dependencies: ['test dependency changed'] });
        await waitFor(() => {
            expect(result.current).toBe('data2');
        });
    });
});