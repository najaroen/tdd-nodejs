//TODO: toBeNull matches only null
//TODO: toBeUndefined matches only undefined
//TODO: toBeDefined is the opposite of toBeUndefined
//TODO: toBeTruthy matches anything that an if statement treats as true
//TODO: toBeFalsy matches anything that an if statement treats as false
const example = require('../../example/example')

function fileInValid() {
    throw new Error('You file is invalid');
    // return 0
}


test("value in array not be 0", () => {
    const value =  [1,3,4,56,1];
    for (let i = 0; i < value.length; i++) {
        expect(value[i]).toBeGreaterThan(0)
        expect(value[i]).not.toBe(0)

    }
})


test("value should be more than 0", () => {
    const isSum = example.isSum;
    const listValue = [{a:-10,b:100}, {a:-199,b:1000}]
    for (let i = 0; i <listValue.length ; i++) {
        expect(isSum({a:listValue[i].a, b:listValue[i].b})).toBeGreaterThan(0)
    }
})

test('but there is a "stop" in HelloWorld', () => {
    expect('HelloWorldstop').toMatch(/stop/);
});

test('File in put to invalid', () => {
    expect(() => fileInValid()).toThrow()
})

