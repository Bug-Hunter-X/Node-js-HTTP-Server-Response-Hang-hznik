# Node.js HTTP Server Response Hang

This repository demonstrates a subtle bug in a Node.js HTTP server where the response hangs if the `Content-Type` header is not explicitly set when sending a JSON response.

## Bug Description
The issue occurs because the client (e.g., a web browser) might not correctly parse the response without the `Content-Type` header being set to `application/json`.  This leads to a stalled connection and a hanging response.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Make a request to `http://localhost:3000`. You'll observe a hanging response.
4. Run `node bugSolution.js`. The issue is resolved.