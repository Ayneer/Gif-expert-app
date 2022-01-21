import { useFetchGifs } from '../useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import { getGifs } from '../../services/getGif';

jest.mock('../../services/getGif');

describe('Hook Fetch Gifs Test Suit', () => {

    test('should get current default values', async () => {
        const mockData = [];
        getGifs.mockImplementation(() => Promise.resolve(mockData));

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Halo'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('should get the values', async () => {
        const mockData = [{ mock: 'mock data' }];
        getGifs.mockImplementation(() => Promise.resolve(mockData));

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Halo'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data).toEqual(mockData);
        expect(loading).toBeFalsy();
    });

});
