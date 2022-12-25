# Task Management API

## 1. Create app.js

- app.js is the entry point of the app

## 2. Create router and controller of the API use express.js

- `./controllers`
- `./routers`

## 3. Creating DB connection and schema using mongoDB and mongoose

- `db/connection`
- `db/schema`

## 4. Refactoring, Exception handling (In middleware package)

- Not-Foun
- Exception
- Async

## Trouble shooting

The two pieces of code are equivalent but the first one is using the ES6 destructuring assignment to be shorter.

Here is a quick example of how it works:

const obj = {
name: "Fred",
age: 42,
id: 1
}

//simple destructuring
const { name } = obj;
console.log("name", name);

//assigning multiple variables at one time
const { age, id } = obj;
console.log("age", age);
console.log("id", id);

//using different names for the properties
const { name: personName } = obj;
console.log("personName", personName);
