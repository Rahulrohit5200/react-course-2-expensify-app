const add=(a,b,c)=>a+b+c;
test("should add",()=>{
    const y=add(3,8,2);
    expect(y).toBe(13);
})
const generateGreeting=(name)=>`hello ${name}`;
test("should greet us",()=>{
    const y=generateGreeting("rahul");
    expect(y).toBe("hello rahul");
})