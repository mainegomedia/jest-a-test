const lowerCase = require('./thirdFunction');

test('this should turn the argument to lowercase', ()=>{
    expect(lowerCase("BIGBOB")).toBe("bigbob");
});