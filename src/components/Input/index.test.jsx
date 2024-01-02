import { fireEvent, render, act } from "@testing-library/react";
import { describe, expect } from "vitest";
import Input from ".";

describe('Input', () => {
    it('Should render correctly with prefix', () => {
        const prefixMock = <div data-testid="prefix">prefix</div>
        const { queryByTestId, rerender } = render(
            <Input />
        );
        expect(queryByTestId('prefix')).toBeFalsy();
        rerender(
            <Input
                prefixElement={prefixMock}
            />
        );
        expect(queryByTestId('prefix')).toBeTruthy();
    });
    it('Should call onChange when trigger onChange', () => {
        const handleChangeSpy = vi.fn();
        const { container } = render(
            <Input
                onChange={handleChangeSpy}
            />
        );
        const inputEle = container.querySelector('input');
        act(() => {
            fireEvent.change(inputEle, { target: { value: 23 } });
        });
        expect(handleChangeSpy).toHaveBeenCalledTimes(1);
    });
});