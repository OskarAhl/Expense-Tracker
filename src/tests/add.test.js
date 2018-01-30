const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should return greeting with name', () => {
    const name = 'Oskar'
    const greeting = generateGreeting(name);
    const emptyGreeting = generateGreeting();
    expect(greeting).toBe(`Hello ${name}!`);
    expect(emptyGreeting).toBe(`Hello Anonymous!`);
});