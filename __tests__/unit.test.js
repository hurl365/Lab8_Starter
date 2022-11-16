// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//test valid U.S. domestic numbers
test('Test a United States domestic number with parenthesis', () => {
    expect(functions.isPhoneNumber('(999)-888-7777')).toBe(true);
})
test('Test a United States domestic number without parenthesis', () => {
    expect(functions.isPhoneNumber('111-222-3333')).toBe(true);
})
//test invalid numbers
test('Test an invalid number with only alphabets', () => {
    expect(functions.isPhoneNumber('this is a phone number')).toBe(false);
})
test('Test a short phone number', () => {
    expect(functions.isPhoneNumber('11045')).toBe(false);
})

//test valid school emails
test('Test a valid school email address', () => {
    expect(functions.isEmail('iamtrue@myschool.edu')).toBe(true);
})
//test a valid gmail
test('Test a valid gmail email address', () => {
    expect(functions.isEmail('elmain@gmail.com')).toBe(true);
})
//test invalid email without postfix
test('Test an invalid email address without postfix', () => {
    expect(functions.isEmail('mymail@youraddress')).toBe(false);
})
//test invalid email without domain
test('Test an invalid email address a domain', () => {
    expect(functions.isEmail('mymail.com')).toBe(false);
})

