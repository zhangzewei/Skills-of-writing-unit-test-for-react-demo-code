import { describe } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { getApiData } from "../request";
import UseData from "./useData";

vi.mock('../request', () => ({
    getApiData: vi.fn()
}))

describe('useData', () => {
    it('Should return data correctly', async () => {
        const data = {
            id: 'testid',
            title: 'title',
            content: 'content'
        };
        vi.mocked(getApiData).mockReturnValue(
            Promise.resolve(data)
        );
        const { result } = renderHook(
            () => UseData(),
        );
        expect(result.current).toBe(null);
        await waitFor(() => {
            expect(result.current).toBe(data);
        });
    });
});