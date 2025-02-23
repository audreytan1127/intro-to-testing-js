// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });
describe("sayHello", function () {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return Hello, Jane! when called', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should return Hello, Alex! when called', function(){
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    });
    it('should return Hello, Pat! when called', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return Hello, World! when called', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return Hello, World! when called', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return Hello, Unknown! when called', function() {
        expect(sayHello(null)).toBe("Hello, Unknown!");
    });
    it('should return Hello, $Money$ when called', function() {
        expect(sayHello(2.3)).toBe("Hello, $Money$");
    });
    it('should return Hello, 5 when called', function() {
        expect(sayHello("5")).toBe("Hello, 5!");
    });
    });
describe ("isFive", function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value when called', function() {
        expect (typeof isFive()).toBe('boolean');
    });
    it('should return true when input is 5', function() {
        expect (isFive(5)).toBe(true);
    });
    it('should return true when input is "5"', function() {
        expect (isFive("5")).toBe(true);
    });
});

describe ("isEven", function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value no matter the input', function() {
        expect(typeof isEven()).toBe('boolean');
    });
})