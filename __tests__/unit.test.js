// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isValidPhoneNumber1', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true)
})
test('isValidPhoneNumber2', () => {
    expect(functions.isPhoneNumber(('800-900-1000'))).toBe(true)
})
test('isValidPhoneNumber3', () => {
    expect(functions.isPhoneNumber(11111112341231231111)).toBe(false)
})
test('isValidPhoneNumber4', () => {
    expect(functions.isPhoneNumber(123)).toBe(false)
})


test('isValidEmail1', () => {
    expect(functions.isEmail('hello@gmail.com')).toBe(true)
})
test('isValidEmail2', () => {
    expect(functions.isEmail('ilovecs@yahoo.com')).toBe(true)
})
test('isValidEmail3', () => {
    expect(functions.isEmail('hello@gmail')).toBe(false)
})
test('isValidEmail4', () => {
    expect(functions.isEmail('hello@.com')).toBe(false)
})


test('isStrongPassword1', () => {
    expect(functions.isStrongPassword('hello')).toBe(true)
})
test('isStrongPassword2', () => {
    expect(functions.isStrongPassword('strongpass123')).toBe(true)
})
test('isStrongPassword3', () => {
    expect(functions.isStrongPassword('12345')).toBe(false)
})
test('isStrongPassword4', () => {
    expect(functions.isStrongPassword('123strongpass')).toBe(false)
})


test('isDate1', () => {
    expect(functions.isDate('12/12/2022')).toBe(true)
})
test('isDate2', () => {
    expect(functions.isDate('2/12/2022')).toBe(true)
})
test('isDate3', () => {
    expect(functions.isDate('2022/12/12')).toBe(false)
})
test('isDate4', () => {
    expect(functions.isDate('12122112')).toBe(false)
})


test('isHexColor1', () => {
    expect(functions.isHexColor('123')).toBe(true)
})
test('isHexColor2', () => {
    expect(functions.isHexColor('#12041F')).toBe(true)
})
test('isHexColor3', () => {
    expect(functions.isHexColor('#12041G')).toBe(false)
})
test('isHexColor4', () => {
    expect(functions.isHexColor('1')).toBe(false)
})
