import React from 'react';
import validateSsn from './UserInputValidator.js';

describe("ssn validation", () => {
    it('is invalid when more than 9 digits', () => {
        const actual = validateSsn("1234567890");
        expect(actual).toBeFalsy();
    });

    it('is invalid when less than 9 digits', () => {
        const actual = validateSsn("12345678");
        expect(actual).toBeFalsy();
    });

    it('is valid when exactly 9 digits', () => {
        const actual = validateSsn("123456789");
        expect(actual).toBeTruthy();
    });

    it('is invalid when contains a letter', () => {
        const actual = validateSsn("a23456789");
        expect(actual).toBeFalsy();
    });
});