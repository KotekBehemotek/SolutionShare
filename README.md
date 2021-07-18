# Solution

## Table of contents
* Introduction
* Technologies
* Structure
* Link to the YT walkthrough

## Introduction
#### Solution is meant to become the social media platform. Its development is focused on delivery of features unavaiable on other sharing services.

## Technologies
* Java 12
* JavaScript ES18
* CSS3
* HTML5
* PostgreSQL 12.6

## Structure
### CSS
#### CSS files are divided into general categories:
* Buttons
* Cells
* MainText
#### And dedicated files named after elements which design they are describing.
### JavaScript
#### JS files are divided similarly to CSS ones. They follow the same purpose based order:
* Elementary - Main part of code, manipulating HTML elements.
* Functions - Functions specific for each JSP, performing operations on HTML elements.
* NonElementary - Functions specific for each JSP, performing operations on internal JS variables, not HTML elements.
* Objects - Objects created with use of TMLENT framework and ones specific for each JSP.
* Variables - HTML elements IDs or their classes names.
* Initial - Requests needed to be made at the beginning of JSP existance.
* Last - Operations related to switching to another JSP.
* ADDITIONAL NOT JSP SPECIFIC - Classes - Stores architecture of TMLENT framework.
### Java
#### Java classes are stored in three main directories:
* DAO - Database connection and queries execution.
* Service - Server side application serving.
* WEB - Classes dedicated to each JSP.

## See what it looks like
https://youtu.be/7002Sp2jN0c
