var meals= {}
var meals- new Object();

var meals ={breakfast: "oatmeal"};

var meals=new Object({breakfast:"oatmeal"});

// NOTE that all keys in JavaScript Objects are strings. This means that even though you can create and object {1: "is the loneliest number"}, the key here, 1 gets turned into the string "1". Values can be of any type.

//NOTE Keys must be unique. If you were to initialise the following object 
var meals = {
  breakfast:"eggs"
  breakfast:"bacon"
}
// and check the value of meals, you would see

{breakfast:"bacon"}

//Only the last key-value pair to use breakfast as the key gets saved! Values don't have to be unique though:

var meals={ 
  breakfast:"avocado"
  lunch:"avocado"
  dinner:"avocado"
}

// Here, We might consider wanting to diverisfy our diet, but otherwise the object works as expected.

//Similarly, if you have a variable 

const firstMeal="breakfast" 

// and tried to create an object 

var meals= {firstMeal:"oatmeal"}

//the meals object's key would be "firstMeal" not "breakfast", due to the uniqueness of a key.

//ES 6 provides a way to use variables as object keys- You have to wrap the key in square brakets [].

var meals= {[firstmeal]:oatmeal} 

// this would produce {breakfast: "oatmeal"}

//we can access the values in an object using dot notation

meals.breakfast 

meals["breakfast"]

var meals= {
  breakfast:"oatmeal",
  lunch:"burrito"
  dinner: "steak"
}

//but we might not always know what keys and values we're going to have ahead of time. Luckily, we can add new key-value pairs to objects.

//If we know the name of the key and its value, we can use the dot syntax to add the new pair:

meals.snack= "yogurt";

meals["second breakfast"]="bagel"

//Note that all of the changes highlighted above are destructive. This means that if we apply these cahnges to an object by passing the object to a function, the original object will change. Let's try it out.

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value
  
  return obj}
  
const recipie ={eggs:3}

destructivelyUpdateObjectWithKeyandValue(recipie,"flour","3 cups")

//Hmmmmm, but what if that isn't what we wanted to do? What if we wanted to create a new object that stores both the old and the new properties?

OBJECT.ASSIGN()

//We can use object.assin( to create a new object and pass it properties from existing objects. The first value is the target object that gets modified. All the values afterward can be any number of objects. It then copies them from left to right onto the target object (so if two objects share a key, the right-most object's value for that key will win). Let's try it out:

Object.assign({},{foo:"bar"})

Object.assign({eggs:3},{flour:"1 cup"})

Object.assign({eggs:3},{chocolate:"1 cup"},{flour:"2 cups"},{flour: "1/2 a cup"})

function updateObjectWithKeyandValue(obj,key,value) {
  
  return Object.assign({},obj,{[key:value]})
}
// it's important that we merge everything into a new object such as the empty {}, otherwise the object obj would be modified
}
 return Object.assign(obj,{key,value})

