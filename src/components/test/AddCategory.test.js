import { shallow } from 'enzyme';
import AddCategory from '../AddCategory';


describe('Add Category Test Suit', () => {

    const setCategory = jest.fn(callback => callback([]));
    let wrapper = shallow(<AddCategory setCategories={setCategory} />);

    test('should show the component successfully', () => {
        const btnAddCategory = wrapper.find('button');

        const { type, id } = btnAddCategory.props();

        expect(type).toBe('submit');
        expect(id).toBe('button_add_category');
        expect(wrapper).toMatchSnapshot();
    });

    test('should send an alert when the category is empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });

        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault: jest.fn() });

        expect(window.alert).toBeCalledWith('Debe escribir una categoria');
        expect(setCategory).not.toBeCalled();
    });

    test('should send the category successfully', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });

        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'Hola' } });

        expect(window.alert).not.toBeCalled();
    });

    test('should send the category successfully', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });

        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault: jest.fn() });

        expect(window.alert).not.toBeCalled();
        expect(setCategory).toBeCalled();
        expect(setCategory).toBeCalledWith(expect.any(Function));
    });

});
