## [Unit Testing with Jasmine in Angular 2](https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.vyvvifdbw)
Another thing to note is that Jasmine and Karma work together, but are different. First, Jasmine is all the syntax you 
use in order to make your tests, like `describe`, `it`, etc. Karma runs Jasmine in a browser automatically.

### [Angular 2 Testing](https://angular.io/docs/ts/latest/guide/testing.html) and [Jasmine Syntax](https://jasmine.github.io/2.5/introduction)
This is probably the best helper for Angular 2 Testing, although it is very long. Its a good "getting started". When 
making a test mock for Angular 2, it is important to understand how testing works for Unit and Integration 
testing.

The good news is, that whenever you use `Angular's CLI` and run `ng generate component my-new-component`, it creates a 
file called `my-new-component.component.spec.ts`. This is your testing file. It is best to always keep the test file 
next to its own component.

Here is a list of general things to keep in mind when testing (these are close to any unit test style).

1. Create a Mock Test Environment to test your class (ours is a class with Component Metadata).
2. You will have one system under test, and all the rest of the components you need will be mocks (or stubs). 
For example, say you have a component that has many child components that it uses; since its a Unit Test,
you only care about the parent's functionality, and don't care about the integration of the children components (yet).
3. You can do integration testing, where you have multiple components under test and all the rest you are not testing 
will be stubs.

[Rangle.io's Testing Tutorials](https://angular-2-training-book.rangle.io/handout/testing/). Go through each link to see
if there are parts about testing that you find interesting.

[Three ways to Test in Angular 2](https://vsavkin.com/three-ways-to-test-angular-2-components-dcea8e90bd8d#.rpvgrm77h). 
This is a good tutorial on Testing. In fact, the integration part is almost exactly what I needed to do in order to test
my routes with a submenu I created.




