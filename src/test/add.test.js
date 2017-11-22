const add = (a, b) => a + b;

const genGreeting = (name)=> `Hello ${name}!`;


test('should add two numbers', ()=>{
  const result = add(3,4);
  expect(result).toBe(7)
});


test('should return greeting based in name input', ()=>{
  const name = genGreeting('Rayon');
  expect(name).toBe('Hello Rayon!')
})