```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... other parts of the code

const result = await collection.findOne(query);
console.log(result); // result will be null even if there's matching data
```