import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';

describe('useState tests', () => {
  test('should start with initial val', () => {
    const initialValue = "James";
    const { result } = renderHook(() => useState(initialValue));
    console.log(result.current)
    expect(result.current[0]).toBe(initialValue);
  })

  test('should be a new value when updated', () => {
    const newValue = "Jennifer";
    const { result } = renderHook(() => useState("James"));
    act(() => {
      result.current[1](newValue);
    })

    expect(result.current[0]).toBe("bob");
  })
})