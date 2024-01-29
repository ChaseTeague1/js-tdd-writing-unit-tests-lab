// Your code here
export function isPalindrome(word){
    if(word === ''){
        return false;
    }

    word = word.toLowerCase();
    word = word.replace(/[^a-z0-9]/g, '');

    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}