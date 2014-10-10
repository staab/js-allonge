## Prelude: Values and Expressions

- A Value can be an expression, but not all expressions are values, however, expressions should evaluate to values.
- Expressions are combinations of one or more other expressions using operators to describe the combination. 
- Comparing identity (`===` and `!==`) - four factors
	- types (cups)
	- values (contents of the cup)
	- For strings, numbers and booleans (values/primitive types), identity matches if type + value match
	- Other datatypes have an extra property - identity (serial number on the cup). 


### Thoughts

- Like in python, we have object (`4`), type (`number`), and datatype. Datatype is not acknowledged in the language, but it's what separates value-ish types and identity-ish types.


### Discussion recap

[Here's](http://stackoverflow.com/questions/6793228/does-a-matter-whether-a-value-is-primitive-or-boxed) a SO about boxed primitives.

What is programming?
- Math and logic to process information
- DRY - saving generalized solutions for problems
- Problem solving

What is functional programming?
- No side effects (referential transparency)
- Abstracting away implementation (declarative rather than imperative)
- No mutable state
- Recursion