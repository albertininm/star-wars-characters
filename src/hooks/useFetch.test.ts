import {renderHook} from '@testing-library/react-hooks';
import useFetch from './useFetch';
import { waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Hooks: useFetch', () => {
  it('should return "loading" as true while request is not finished', async () => {
    let requestResolver: (value: Response | PromiseLike<Response>) => void = () => null;
    const url = 'https://challenger.api';

    fetchMock.mockReturnValue(new Promise((resolve) => requestResolver = resolve));

    await act(async () => {
      const {result} = renderHook(() => useFetch({url}));
  
      await waitFor(() => {
        expect(result.current.loading).toStrictEqual(true);
      });
      
      requestResolver({} as unknown as Response);
      
      await waitFor(() => {
        expect(result.current.loading).toStrictEqual(false);
      });
    });
  });

  it('should call "onRequestFinish" when request is finished', async () => {
    const onRequestFinishMock = jest.fn();

    let requestResolver: (value: Response | PromiseLike<Response>) => void = () => null;
    const url = 'https://challenger.api';

    fetchMock.mockReturnValue(new Promise((resolve) => requestResolver = resolve));

    await act(async () => {
      const {result} = renderHook(() => useFetch({url, onRequestFinish: onRequestFinishMock}));
  
      await waitFor(() => {
        expect(result.current.loading).toStrictEqual(true);
        expect(onRequestFinishMock).not.toHaveBeenCalled();
      });
      
      requestResolver({json: () => true} as unknown as Response);
      
      await waitFor(() => {
        expect(result.current.loading).toStrictEqual(false);
        expect(onRequestFinishMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  it('should not run request if "skip" is "true"', () => {
    const url = 'https://challenger.api';

    fetchMock.mockReturnValue(new Promise((resolve) => resolve));

    renderHook(() => useFetch({url, skip: true}));

    expect(fetchMock.mock.calls).toHaveLength(0);
  });
});