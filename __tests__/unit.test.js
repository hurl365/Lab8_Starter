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

//test a valid strong passwords
test('Test a valid strong password', () => {
    expect(functions.isStrongPassword('Dh3fzDx_vJly')).toBe(true);
})
//test a valid long password
test('Test a valid long password', () => {
    expect(functions.isStrongPassword('ilovemypass123')).toBe(true);
})
//test invalid short password
test('Test an invalid short password', () => {
    expect(functions.isStrongPassword('314')).toBe(false);
})
//test invalid password start with a number
test('Test an invalid password start with a number', () => {
    expect(functions.isStrongPassword('9999pass')).toBe(false);
})

//test valid normal date
test('Test a valid normal date', () => {
    expect(functions.isDate('05/20/1314')).toBe(true);
})
//test a valid short date
test('Test a valid short date', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
})
//test invalid date with words
test('Test an invalid date with words', () => {
    expect(functions.isDate('June 6th, 1999')).toBe(false);
})
//test invalid date with missing fields
test('Test an invalid date with missing fields', () => {
    expect(functions.isDate('12/2022')).toBe(false);
})

//test a valid 3 character hex
test('Test a valid school email address', () => {
    expect(functions.isHexColor('abc')).toBe(true);
})
//test a valid 6 character hex
test('Test a valid gmail email address', () => {
    expect(functions.isHexColor('E7DFC6')).toBe(true);
})
//test invalid hex with more characters
test('Test an invalid hex with more characters', () => {
    expect(functions.isHexColor('1283712897')).toBe(false);
})
//test invalid hex with too little characters
test('Test an invalid hex with too little characters', () => {
    expect(functions.isHexColor('FA22')).toBe(false);
})