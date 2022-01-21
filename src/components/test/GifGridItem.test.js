import { shallow } from 'enzyme';
import { GifGridItem } from '../GifGridItem';

describe('Gif Grid Item suit test', () => {

    test('should show the component successfully', () => {
        const title = 'My test title';
        const url = 'http//test.com';

        const wrapper = shallow(<GifGridItem title={title} url={url} />);

        const htmlImgSrc = wrapper.find('img').prop('src');
        const htmlImgAlt = wrapper.find('img').prop('alt');
        const htmlPText = wrapper.find('p').text();
        const htmlDivClass = wrapper.find('div').prop('className');

        expect(wrapper).toMatchSnapshot();
        expect(htmlImgSrc).toBe(url);
        expect(htmlImgAlt).toBe(title);
        expect(htmlPText).toBe(title);
        expect(htmlDivClass.includes('animate__zoomIn')).toBeTruthy();
    });


});
