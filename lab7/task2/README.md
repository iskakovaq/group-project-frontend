# Lab 7 – Object-Oriented Programming in Python

This project demonstrates basic Object-Oriented Programming (OOP) concepts in Python.

## Classes

### Animal (Base Class)
Attributes:
- name
- age
- color

Methods:
- speak()
- info()
- __str__()

### Child Classes

Dog:
- Inherits from Animal
- Adds attribute: breed
- Overrides speak() method

Cat:
- Inherits from Animal
- Adds attribute: indoor
- Overrides speak() method

## Demonstration

The main.py script:
- Creates objects of Animal, Dog, and Cat
- Stores them in a list
- Iterates through the list
- Calls methods to demonstrate polymorphism