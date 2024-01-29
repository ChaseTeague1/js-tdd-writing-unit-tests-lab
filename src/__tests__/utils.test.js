// Your tests here
import {isPalindrome} from '../utils';

describe('isPalindrome', () => {
    it("returns true for words that are a palindrome", () => {
        const word = "racecar";
        const question = isPalindrome(word);
        expect(question).toBe(true);
    })
    it("return false for words that aren't a palindrome", () => {
        const word = "car"
        const question = isPalindrome(word)
        expect(question).toBe(false);
    })
    it("return true for words that are a palindrome that are upper or lower case", () => {
        const word = "RaCecAr"
        const question = isPalindrome(word)
        expect(question).toBe(true);
    })
    it("return false for empty string", () => {
        const word = ""
        const question = isPalindrome(word)
        expect(question).toBe(false);
    })
})