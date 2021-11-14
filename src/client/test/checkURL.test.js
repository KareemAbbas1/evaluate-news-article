import { checkURL } from "../js/checkURL"

describe('Test check url functionality', () => {
    test('Testing the checkURL function defined or not', () => {
        // Write logic here
        expect(checkURL).toBeDefined();
    })

})

// test('Testing the checkURL function return false for invalid url', () => {
//     // Write logic here
//     expect(checkURL).toBeFalsy();
// })

// test('Testing the checkURL function return ture for invalid url', () => {
//     // Write logic here
//     expect(checkURL).toBeTruthy();
// })
