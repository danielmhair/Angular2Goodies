# <a name="tips"></a> Tips for Angular 2

## Table of Contents
- [Beware of Outdated Tutorials for Angular 2](#outdated)
- [Most important things to know about Angular 2 (my bias)](#important)
- [Angular 2 Services](#services)

## <a name="outdated"></a> Beware of Outdated Tutorials for Angular 2
First off, remember that Angular 2 only came out in September 2016.
So, as you read solutions to your problems, look at the date of the
post. If it is about any Release Candidate (or before), consider it as
a bad solution.

## <a name="important"></a> Most Important things to know about Angular 2
1. Creating effective Services

2. An [Observable](https://angular-2-training-book.rangle.io/handout/observables/using_observables.html) is the new
Promise (except they aren't promises; they are better). Understand Observables in Angular 2.
It is now an old practice to use Promises; instead Observables are
encouraged in Angular 2 (for good reason, read below to see more details).
By the way, Observables is how you make effective Services.

3. Learn about [RxJS](https://github.com/Reactive-Extensions/RxJS), specifically Subjects and EventEmitters.
These will help you be able to effectively talk to child and
parent components within Angular 2.

4. Get to know [Form Builder in Angular 2](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html).
I have found a lot of success with Form Builder. It brings a lot of structure to validating input from users.

## <a name="services"></a>Angular 2 Services

### Services give your modular code for your backend server
As you might know, Services in Angular 2 is a singleton that
allows you to store data on the client side so your Angular views
can access and display that data. It can't replace your database
and backend (and shouldn't replace it), but it is
your Backend Server Facade. It allows you to get the data you need
from any backend service.

### The key is to have an API for your application
As you know, NodeJS, Java Play, and any other backend service allows
you to create APIs to get your data from your database. This will help
modularize your Angular 2 app, no matter what backend service you use.
What is great about this, is that if you need to switch out your NodeJS
server (for example) for a Java Play Server, all you need to make sure
is that your API remains the same and returns the same results as your
NodeJS server did.

### Angular 1 Service vs. Angular 2 Service
An Angular 2 Application with all its glory in Typescript!

```typescript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

class DataModel {
    id: string;
    name: string;
}

@Injectable()
export class MyService {
    data: DataModel;
    static API_URL: string = "localhost:3000/api";
    constructor(private http: Http) {}

    /**
    * getData - Gets Data Asynchronously through the give API.
    */
    getData(): void {
        this.http.get(`${MyService.API_URL}/data`)
        .subscribe(
            data => this.data = data,
            err => console.error(err.json())
        );
    }
}
```

`this.http.get` (and any other request call like `post`, `put`, etc) does not
return a `Promise`! It returns an Observable. If you are familiar with Promises, the `then` method in a Promise
is just like the  `subscribe` method in an Observable. It will call that first parameter if the GET request is successful.
The second parameter will be the function called if an error occurs.

Also, calling this.http.get will not actually make the GET request. It will only prepare it. Once you call `subscribe`,
then the GET request will be called.

I know what you are thinking, "I just understood what promises were! Now we aren't using them?!" Welcome to Web
Development. The most changing environment in programming that is known (from my little understanding).
Don't let that overwhelm you. "We just have to get used to change and growth to build better and
cooler stuff". ([Link to quote](https://scotch.io/tutorials/angular-2-http-requests-with-observables)).

Using an `Observable` as opposed to a `Promise` is exciting news. To help you understand
it, just think of it as a promise with amazing and awesome powers!
Haha, yes, powers. But know it is not a promise. This [link](https://scotch.io/tutorials/angular-2-http-requests-with-observables)
explains Observables really well. Please read it for more understanding!

#### How Observables work in Angular 2
As you might know, Observables in programming is a way to subscribe to a
given event and when something happens, you get notified about it.
For a real-world example, let's say you want to be told
whenever it is raining, but you don't have time to look outside your
window (such a poor unfortunate soul). Because you make millions, you
hire an observer to watch for rain and he will notify you when the it
is raining outside. The observer is your Observable in Angular 2 (except
you can be poor and still use Observables).

We want to do this for multiple things such as:
Listening to HTTP requests, events from the mouse, keyboard or even events from forms!

Yes, you can listen to input from forms using observables and let me
tell you, it is really exciting! For Example, lets say you have a search bar.
As you type, you would like to do multiple things:
1. Only do a search if the user has stopped typing
2. Only search when certain conditions are met like what they type matches certain letters
3. Only search when the input is different from the previous search.

Lets have an object that is from our form, connected to an input called
name
```typescript

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: `app-login`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(private fb: FormBuilder) {}

    public search(query) {
    // Search logic from given query goes here
    }

    public ngOnInit() {
        this.form = this.fb.group({
          'name': new FormControl('', Validators.required),
        });

        this.name = this.form.controls['name'];

        this.name.valueChanges
        .debounce(300)
        .filter(value => value.startsWith("M"))
        .distinctChanges()
        .subscribe(query => this.search(query))
   }
}
```
Alright, lets walk through the code:

This is an example on how to use Angular 2 For Builder. We will focus on the name Form Control variable.

`this.name.valueChanges` - With Angular Forms, this object is
an observable. We use the valueChanges to listen to the value when it changes.

`.debounce(300)` - Wait 300ms after the user is done typing before checking
for a new value

`.filter(value => value.startsWith('M'))` - Ignore any values that evaluate to false

`.distinctChanges()` - Don't search unless the new value for the name
is different from the last

`.subscribe` - Once all the above chains that satisfied and only then, will we get to the
subscribe method.

This is only the beginning. There are many things that can easily be
done with Observables that can't be done with Promises.

To see this in action in the HTML, see this:

```html
<form (submit)="loginUser()" [formGroup]="form" class="form-signin">

  <input class="col-lg-12 no-padding-left"
         id="username" type="text"
         required autofocus
         placeholder="Username" [formControl]="username" />

  <input class="col-lg-12 no-padding-left"
            id="password" type="password" required
            placeholder="Password" [formControl]="password" />

  <button type="submit" [class.is-valid]="form.valid"
          class="btn btn-primary btn-block" [disabled]="!form.valid">
    Sign in
  </button>
</form>
```

A good book to learn about Angular Form Builder is [`ng-book 2`](https://www.ng-book.com/2/)
or [Rangle's Angular 2 Training](https://angular-2-training-book.rangle.io/) (more specifically
about [Form Builder](https://angular-2-training-book.rangle.io/handout/forms/)).
