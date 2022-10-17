import {renderHook} from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useDebounce from './useDebounce';

describe('Hooks: useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should not change returned value imediately after changing it', () => {
    const initialValue = 'value';

    const {result, rerender} = renderHook(() => useDebounce(initialValue));
    
    expect(result.current).toStrictEqual(initialValue);
    
    rerender('new value');

    expect(result.current).toStrictEqual(initialValue);
  });

  it('should change returned value when timer has passed', () => {
    const initialValue = 'value';
    const newValue = 'value';

    const {result, rerender} = renderHook((props: string) => useDebounce(props), {initialProps: initialValue});

    expect(result.current).toStrictEqual(initialValue);
    
    rerender(newValue);
    
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current).toStrictEqual(newValue);
  });
});