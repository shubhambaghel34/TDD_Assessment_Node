# TDD_Assessment_Node

# Features
- Percentage Discount: Apply a percentage discount on the base price.
- Fixed Amount Discount: Apply a fixed amount discount on the base price.
- Quantity Handling: Handle zero or negative quantities by returning zero.
- Error Handling: Return zero for invalid input (e.g. negative base price).
- TDD for API based function where(Jsonplaceholder is used)

To run this project first install dependencies
```
npm intall

npx mocha test/app.test.js

```

### A typical top-level directory layout

    .
    ├──/app.js                  # logic file containing the calculateTotalPrice function.
    ├──/test                    # Documentation files (alternatively `doc`)
    ├──────app.test.js          #TDD based tests (alternatively `spec` or `tests`)
    ├── package.json          
    ├── package-lock.json          
    └── README.md



## Used By

This project is used by the following companies:

- app.js: Contains the business logic for calculating the total price and API based function
- test/app.test.js: Contains the Mocha tests for the calculator.
