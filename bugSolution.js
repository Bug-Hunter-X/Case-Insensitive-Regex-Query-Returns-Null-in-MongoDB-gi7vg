```javascript
const query = { name: { $regex: /John/i } }; // Enclose regex in $regex operator

// ... other parts of the code

const result = await collection.findOne(query);
console.log(result); // result should now return matching document
```