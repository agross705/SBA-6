# Module 413 | Mod 6 | SBA 6: TypeScript and Advanced JavaScript

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Reflections](#reflections)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

In this assessment, you will apply the skills you’ve developed throughout the TypeScript and Advanced JavaScript module to build a functional, real-world application. This project will test your understanding of TypeScript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction. You will have 5.5 hours to complete this assessment.

### The challenge

You will create an E-commerce Product Management System using TypeScript. The final deliverable will include a GitHub repository with your project and a written reflection on your approach and the challenges you faced.

### Screenshot

### Links

- Assignment URL: https://ps-lms.vercel.app/curriculum/se/413/sba
- Live Site URL: https://github.com/agross705/SBA-6

## My process

- Project Setup | Initialize typescript, organize folder structure
- API Research | Project planning
- Implementation | Develop product class, implement utilities, handle asynchronous operations, error handling utility, create the main application
- Testing and Finalizing | Compiling code, running application, testing and debugging

### Built with

- TypeScript

### Reflections

1. How you implemented TypeScript features and OOP principles.
- I defined a Product class with typed properties and methods like displayDetails() and getPriceWithDiscount(). Access modifiers (public, optional) and strong typing enforced predictable, safe code. Utilities (discountCalculator.ts and taxCalculator.ts) kept logic reusable and separated from models, demonstrating encapsulation and single responsibility.

2. The challenges you encountered and how you overcame them.
- Mapping API data to typed classes: The API returned raw JSON, so I had to carefully map it into Product instances.
- Handling unknown errors: I learned to normalize all errors using a custom AppError class to make logging and debugging consistent.
- Precision in calculations: Ensuring discounts and taxes were correctly rounded required attention to toFixed and proper number handling.

3. How you handled asynchronous operations and error management.
- I used async/await to fetch products from the API cleanly, paired with try/catch blocks to handle both network errors and API errors. Custom error handling (AppError, normalizeError, logError) made it easy to categorize errors and log them consistently, while keeping the main application flow readable and maintainable.

### What I learned

Building this project taught me how to:
- Leverage TypeScript’s type safety to prevent runtime errors and make code more predictable.
- Apply OOP principles like encapsulation, abstraction, and reusability through a Product class and its methods.
- Use utilities to separate business logic (discounts, taxes) from data models.
- Handle asynchronous operations using async/await and manage API errors gracefully.
- Implement custom error classes to make debugging and logging consistent and professional.

### Continued development

- Adding subclasses for DigitalProduct and PhysicalProduct with unique behaviors.
- Building a shopping cart system to calculate totals, discounts, and taxes for multiple products.
- Integrating search, filtering, and sorting of products.
- Writing unit tests for utilities and models to ensure correctness.
- Enhancing error handling with user-friendly messages in a UI.

### Useful resources

- MDN | https://developer.mozilla.org/en-US/
- Async/Await with Fetch | https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
- JavaScript Callback Functions Explained | https://javascript.info/callbacks
- Google | https://www.google.com

## Author

- GitHub | agross705 | https://github.com/agross705

## Acknowledgments
