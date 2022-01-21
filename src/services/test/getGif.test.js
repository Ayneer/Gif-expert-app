import { getGifs } from '../getGif';

global.fetch = jest.fn();

describe('Get Gif Service Test Suit', () => {

    test('should get gifs when call getGifs', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({
                data: [
                    {
                        id: 'id',
                        title: 'title',
                        images: {
                            downsized_medium: {
                                url: 'url'
                            }
                        }
                    }
                ]
            })
        }));

        const res = await getGifs('Test');

        expect(res).toEqual([
            { id: 'id', title: 'title', url: 'url' }
        ])
    });


});
