import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import Search from ".";

describe("Search", () => {
    it("Should do search when click the search button", () => {
        const searchSpy = vi.fn();
        const { container } = render(
            <Search
                onSearch={searchSpy}
            />
        );
        const button = container.querySelector('button');
        act(() => {
            button?.click();
        });
        expect(searchSpy).toHaveBeenCalledTimes(1)
    });
    it("Should do onChange when type text in the input", async () => {
        const changeSpy = vi.fn();
        const { container } = render(
            <Search
                onChange={changeSpy}
            />
        );
        const input = container.querySelector('input');
        act(() => {
            fireEvent.change(input, { target: { value: 2 } });
        });
        // due to the debounce
        await waitFor(() => {
            expect(changeSpy).toHaveBeenCalledTimes(1);
        });
    });
});