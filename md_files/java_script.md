# JavaScript Concepts

## JavaScript's Execution Model

JavaScript is a single-threaded language, which means it can only execute one task at a time. To handle asynchronous tasks like `setTimeout`, JavaScript uses a combination of the **Call Stack**, **Event Queue**, and the **Event Loop**.

## 1. Call Stack
- **Definition**: The **call stack** is where JavaScript keeps track of the functions that are currently executing. It stores the execution context of each function.
- **Characteristics**:
  - It is a **LIFO (Last In, First Out)** structure.
  - JavaScript can only execute one function at a time from the call stack (because JavaScript is single-threaded).
  - When a function is called, it gets pushed onto the stack; when it finishes, it gets popped off.

## 2. Event Queue
- **Definition**: The **event queue** (also known as the message queue) is where asynchronous tasks (like `setTimeout`, `fetch` callbacks, etc.) are placed when they are ready to execute.
- **Characteristics**:
  - Tasks are placed in the queue after their time or condition (like the delay in `setTimeout`) is met.
  - The event queue is processed once the call stack is empty.

## 3. Event Loop
- **Definition**: The **event loop** is responsible for managing the execution of code. It constantly checks the **call stack** to see if it is empty.
- **Characteristics**:
  - When the **call stack** is empty, the event loop picks the first task from the **event queue** and moves it to the **call stack** for execution.
  - This process ensures asynchronous tasks are executed after synchronous code has finished running.


## 1. Sync vs Async

### Synchronous (Sync)
- **Definition**: In synchronous programming, operations are executed one after the other. Each operation waits for the previous one to complete before starting.
- **Blocking**: The code execution is blocking, meaning the program stops at each operation until it finishes, which can lead to performance issues if an operation takes a long time (e.g., waiting for a response from a server).
- **Example**:

    ```javascript
    console.log("First");
    console.log("Second");
    console.log("Third");
    ```

    In this example, "First", "Second", and "Third" will be printed in order.

### Asynchronous (Async)
- **Definition**: In asynchronous programming, operations are executed independently of the main program flow. The program doesn’t wait for the task to complete and continues with other tasks.
- **Non-blocking**: Asynchronous operations do not block the program. JavaScript can run other code while waiting for a response or task to finish.
- **Example**:

    ```javascript
    console.log("First");
    setTimeout(() => {
        console.log("Second");
    }, 2000); // Simulates async operation (2 seconds delay)
    console.log("Third");
    ```

    Output:
    ```
    First
    Third
    Second
    ```

    In this case, "Second" is logged after 2 seconds, while "First" and "Third" are logged immediately.

---

## 2. Static Typing vs Dynamic Typing

### Static Typing
- **Definition**: In statically typed languages, the type of a variable is known at compile time. The type is defined explicitly and cannot be changed during execution.
- **Example** (not in JavaScript, but in TypeScript, which is a superset of JS):

    ```typescript
    let age: number = 30; // Static typing
    age = "30"; // Error: Type 'string' is not assignable to type 'number'.
    ```

- **Advantages**:
    - Type safety at compile time.
    - Easier refactoring and maintaining large codebases.
    - Better tooling support (autocompletion, error checking).
  
- **Disadvantages**:
    - More verbose code.
    - Can reduce flexibility.

### Dynamic Typing
- **Definition**: In dynamically typed languages like JavaScript, the type of a variable is determined at runtime, meaning you can assign a value of any type to a variable and change it during execution.
- **Example**:

    ```javascript
    let age = 30; // Dynamically typed
    age = "30";  // No error, variable type is now a string.
    ```

- **Advantages**:
    - More flexible and concise code.
    - Easier to write quick prototypes.

- **Disadvantages**:
    - Can lead to runtime errors if types are misused.
    - Harder to maintain large codebases without rigorous testing.

---

## 3. Variables

JavaScript has several ways to declare variables, and each comes with different scoping rules.

- **`var`**: 
  - **Function-scoped**: The variable is scoped to the nearest function block, not the nearest block.
  - **Hoisted**: Variables declared with `var` are hoisted to the top of their scope, but their value is not assigned until the execution reaches the line where they are defined.
  - **Example**:

    ```javascript
    var x = 10;
    if (true) {
        var x = 20; // Same variable
    }
    console.log(x); // 20
    ```

- **`let`**:
  - **Block-scoped**: Variables declared with `let` are only available within the block, statement, or expression where they are defined.
  - **Not hoisted**: `let` variables are hoisted, but they are in a "temporal dead zone" and cannot be accessed until the declaration is encountered.
  - **Example**:

    ```javascript
    let x = 10;
    if (true) {
        let x = 20; // Different variable in this block
        console.log(x); // 20
    }
    console.log(x); // 10
    ```

- **`const`**:
  - **Block-scoped**: Like `let`, `const` is block-scoped.
  - **Immutability**: The value assigned to a `const` variable cannot be reassigned, but if the value is an object or array, its properties/elements can still be modified.
  - **Not hoisted**: Just like `let`, `const` has a "temporal dead zone."
  - **Example**:

    ```javascript
    const x = 10;
    x = 20; // Error: Assignment to constant variable.

    const obj = { key: "value" };
    obj.key = "new value"; // Allowed
    console.log(obj.key); // "new value"
    ```

---

## 4. Hoisting

- **Definition**: Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope (either function or global scope). However, only the declarations are hoisted, not the initializations.
- **For `var`**: Declarations are hoisted, but the values are not assigned until the execution reaches the declaration line.
  
  **Example**:

    ```javascript
    console.log(x); // undefined
    var x = 5;
    ```

    The variable `x` is hoisted to the top, but the value assignment happens only at the line `var x = 5;`.

- **For `let` and `const`**: They are also hoisted, but they are in a "temporal dead zone" until the code execution reaches their declaration. Trying to access them before the declaration results in a ReferenceError.
  
  **Example**:

    ```javascript
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 5;
    ```

- **Function Hoisting**: If you declare a function using the function declaration syntax, the entire function (both the declaration and the definition) is hoisted.
  
  **Example**:

    ```javascript
    foo(); // Works because the function is hoisted

    function foo() {
        console.log("Hello from foo!");
    }
    ```

    But if you use a function expression (e.g., assigning a function to a variable), only the variable declaration is hoisted, not the function definition.

    ```javascript
    bar(); // TypeError: bar is not a function

    var bar = function() {
        console.log("Hello from bar!");
    };
    ```

---

