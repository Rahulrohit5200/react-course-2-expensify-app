//object destructuring
const person={
    
    city:"bhl",
    about:{
        age:27,
        pet:"tota"
    }
};
const {name:hello= "anonymous",city}=person;
console.log(`${hello} is ${city}`); 
const book ={
    title:"ramayan",
    author:"vedvyas",
    publisher:{
        main:"Hanumanji",
        second:"Tulsidasji"
    }
}
const{main:publisherMain="Shri RAM"}=book.publisher;
console.log(publisherMain);


//Array destructuring

const A=["subhashnagar","bhilwara","rajasthan","india"];
const [,shahar="jaipur",state]=A;
console.log(`you are in ${shahar},in ${state}`);




const item=["one","coffee","small","large","2.5","3"];
const [,two,,large,x]=item;
console.log(`you want ${large} ${two} it costs ${x}`);


