import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGrid } from '../GifGrid';

jest.mock('../../hooks/useFetchGifs');

describe('Gif Grid Test Suit', () => {
    test('should show the component successfully', () => {
        useFetchGifs.mockReturnValue({ loading: true, data: [] });
        const category = 'Halo';

        const wrapper = shallow(<GifGrid category={category} />);

        const htmlP = wrapper.find('p').text();
        const htmlH3 = wrapper.find('h3').text();

        expect(wrapper).toMatchSnapshot();
        expect(htmlP).toBe('Loading...');
        expect(htmlH3).toBe('Halo');
    });

    test('should show some gifs', () => {
        const data = [
            {
                id: '1',
                title: 'title mock',
                url: 'mock'
            }
        ];
        useFetchGifs.mockReturnValue({ loading: false, data });
        const category = 'Halo';

        const wrapper = shallow(<GifGrid category={category} />);

        const htmlH3 = wrapper.find('h3').text();
        const gifGridItem = wrapper.find('GifGridItem');
        const htmlGifGridItemUrl = gifGridItem.prop('url');
        const htmlGifGridItemTitle = gifGridItem.prop('title');
        const htmlGifGridItemId = gifGridItem.prop('id');

        expect(htmlH3).toBe('Halo');
        expect(htmlGifGridItemUrl).toBe('mock');
        expect(htmlGifGridItemTitle).toBe('title mock');
        expect(htmlGifGridItemId).toBe('1');
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(gifGridItem.length).toBe(data.length);
    });
});
