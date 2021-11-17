import handleSubmit from '../js/formHandler';
import 'babel-polyfill';

describe('Test handleSubmit functionality', () => {
    test('Testing the handleSubmit function', () => {
        expect(handleSubmit).toBeTruthy();
    })
})
