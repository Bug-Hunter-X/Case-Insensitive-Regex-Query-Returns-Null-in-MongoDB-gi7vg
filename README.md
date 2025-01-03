# Case-Insensitive Regex Query Bug in MongoDB

This repository demonstrates a subtle bug related to case-insensitive regular expression queries in MongoDB.  The provided JavaScript code shows a query that unexpectedly returns `null` despite the existence of matching data in the collection.  The solution provides a corrected query to address this issue.

The issue is primarily encountered when a case-insensitive regular expression is used in conjunction with other query parameters or unexpected data within the collection.  This is a common scenario, making it important to understand the correct method for building reliable queries.

## Setup

1.  Ensure you have Node.js and npm (or yarn) installed.
2.  Install the MongoDB Node.js driver: `npm install mongodb`
3.  Create a MongoDB database and collection.
4.  Populate your collection with sample data (e.g., documents with a `name` field).