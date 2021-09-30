import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../useInput';

describe('useInput tests', () => {
  test('should start with intial input of ""', () => {
    const { result } = renderHook(() => useInput());
    const { value } = result.current;

    expect(value).toBe("");
  })
  
  test('input should be equal to event.target.value when onChange is called', () => {
    const { result } = renderHook(() => useInput());
    const { onChange } = result.current;

    const event = {
      target: {
        value: "james"
      }
    }

    act(() => onChange(event));

    const { value } = result.current;
    expect(value).toBe(event.target.value);
  })
})
