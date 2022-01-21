import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Gif Expert App Test Suit', () => {
    test('should show the component successfully', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

});
