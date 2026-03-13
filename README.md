# Creating-a-Static-Product-List-in-React

## Victoria Salomon

## Project Description

This project is a simple React application created using Vite.  
The goal of the project is to display a static list of products using a React component.  
The application demonstrates how to render lists in React using the map() function and how to assign unique keys to each element.

---

## Features

- React component called ProductList
- Static array of product objects
- Rendering list using map()
- Unique key for each product
- Simple CSS styling
- Clean component structure

---

## Product Object Example

Each product contains:

- id
- name
- description
- price

Example:

{ id: 1, name: "Laptop", description: "High-performance laptop", price: 1200 }

---

## How the Code Works

1. App.jsx imports ProductList component
2. ProductList.jsx contains a static array of products
3. The map() function loops through the array
4. Each product is rendered inside a div
5. Each item uses key={product.id}
6. CSS is used to style product cards

---

## Test Cases

### Normal Cases

1. Product list displays all products
2. Each product shows name, description, and price
3. Each product has a unique key

### Edge Cases

1. Empty list

const products = [];

2. Product without description

{ id: 5, name: "Tablet", price: 300 }

3. Product with price 0

{ id: 6, name: "Free item", description: "Test", price: 0 }

These cases were tested to confirm the component renders correctly.

---

## How to Run the Project

Install dependencies:

npm install

Run development server:

npm run dev

Open in browser:

http://localhost:5173  
(or the port shown in terminal)

---
