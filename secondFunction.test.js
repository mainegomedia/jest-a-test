const repeatWord = require("./secondFunction");

test('this should repeat the argument 3 times', ()=>{
    expect(repeatWord("repeat")).toBe("repeatrepeatrepeat");
});
