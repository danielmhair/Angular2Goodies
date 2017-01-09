# Angular 2 Template and Goodies
I created this page for those who want to learn more about Angular 2.

## Table of contents
- [Clone Angular 2 Template](#clone-template)
- [Create Angular 2 Template via `Angular CLI`](#make-template)
 - [Install Material 2 for Angular 2 and its dependencies (hammerjs)](#material-2-npm)
 - [Add `hammerjs` to your project](#hammerjs)
 - [Add Material's Icons (Optional) to your main `index.html`](#material-icons)
 - [Convert from `css` to `scss` for styling](#change-to-scss)
 - [Include Material 2's theme](#material-2-import-theme)
 - [Creating your own theme](#create-own-theme)
 - [Add Bootstrap Styling to your project](#bootstrap) 
 - [Add Font Awesome Icons](#font-awesome)
- [Tips for Angular 2](#tips)



## <a name="clone-template"><a/> Clone Angular 2 Template
As you know, the setup of a project can take quite a while. For this reason, I have made a template that sets up pretty
much everything you need in order to start your app. I made this template in order to speed things up. Below, I added
the instructions in order to install each portion of this template, but if you just want the template, simple run this:
```
git clone https://github.com/danielmhair/Angular2Goodies.git my-new-app
npm install
```
The parameter `my-new-app` will put the contents of this template into that folder.

## <a name="make-template"><a/> Create Angular 2 Template via `Angular CLI`
```batch
npm install -g angular-cli
ng new my-app-name
cd my-app-name
```

#### <a name="material-2-npm"><a/> Install [Material 2 for Angular 2](https://material.angular.io/) and its dependencies ([hammerjs](http://hammerjs.github.io/))
Note: this information comes from the link above (material.angular.io), but it really helped me, so I am simply
reiterating what they are saying.

```batch
npm install --save @angular/material
npm install --save hammerjs
npm install --save-dev @types/hammerjs
```

#### <a name="material-2-import-module"><a/> Import the NgModule for Material 2 into your `app.module.ts` file
```typescript
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
// other imports
@NgModule({
  imports: [
      MaterialModule.forRoot()
  ]
})
export class AppModule { }
```

#### <a name="hammerjs"><a/> Add `hammerjs` to your project
**src/app/app.module.ts**
```typescript
import 'hammerjs';
```

#### <a name="material-icons"><a/> Add Material's Icons (Optional) to your main `index.html`
Material Icons are used through the `md-icon` component. To use these, go to this [link](https://material.io/icons/).
You will find some icon name. Wherever you see a space in the icon name, replace it with an '_'.
For example, one icon name is "attach file", so the name in the HTML will be 'attach_file'. You would use
`md-icon` component like so:

```html
<md-icon>attach_file</md-icon>
```
If you want to use this, add this link reference in your `index.html`.

**`src/index.html`**
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

#### <a name="change-to-scss"><a/> Convert from `css` to `scss` for styling in your app
From here on out, I will be using `scss`. You can learn about this [here](instructions/angular2Themes#). It would be best that you do to, mainly because you can store variables in
your styles!

1. Rename `styles.css` to `styles.scss`
2. Edit `angular-cli.json` from:
```json
{
  "apps": [
    {
      "styles": [
        "styles.css"
      ]
    }
  ]
}
```
To:
```json
{
  "apps": [
    {
      "styles": [
        "styles.scss"
      ]
    }
  ]
}
```
3. Any component in your app, you will need to rename all `*.component.css` to `*.component.scss`
4. Same goes for the `styleUrls` property in your component declaration. Simply change the path to the new file with the `scss` extension.

### <a name="material-2-import-theme"><a/> [Include Material 2's theme](https://material.angular.io/guide/theming)
This is where I got hung up for a day or so. The styles of Material 2 were not being applied. It was because I missed adding
a theme to Material 2. You have four choices:

1. @import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
2. @import '~@angular/material/core/theming/prebuilt/indigo-pink.css';
3. @import '~@angular/material/core/theming/prebuilt/pink-bluegrey.css';
4. @import '~@angular/material/core/theming/prebuilt/purple-green.css';

I like #2 the best. But you can test them by adding one of them to your `style.scss` like so:

**`styles.scss`**
```scss
@import '~@angular/material/core/theming/prebuilt/indigo-pink.css';
```

### <a name="create-own-theme"><a/> Creating your own theme
It is so much easier when you have a theme built out to use throughout your app. It can save you a lot of valuable
time. In order to do this, you can either use Material's theme or built your own. These links will help you get started:

1. [Theming with SASS (`scss`) Tutorial](instructions/angular2Themes.md#sass-tutorial). Go through the tutorial about the import
aspects of theming using SASS (SASS is explained).
2. [Theming with Material 2](instructions/angular2Themes.md). This will show you directly how to
style your app very quickly (but it can be confusing without explanations).

### <a name="bootstrap"></a> Add Bootstrap Styling to your project
```bash
npm install --save bootstrap-sass
```

Now that you have `bootstrap-sass` installed, import the stylesheets into your `styles.css`
```scss
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
```

### <a name="font-awesome"></a> Add Font Awesome Icons
```batch
npm install --save font-awesome       # Install Font-Awesome to gain more icons for your application (it's free)
```

In the `angular-cli.json` file, there is a list of `styles` that you can add css files to. To add font-awesome icons,
add the css file like so:
```json
{
  "apps": [
    {
      "styles": [
        "styles.scss",
        "../node_modules/font-awesome/css/font-awesome.css"
      ]
    }
  ]
}
```

Once you have the `font-awesome.css` file included, you can use font-awesome icons using Material's Icon Component like
so:

```html
<md-icon fontSet="fa" fontIcon="fa-home"></md-icon>
```

## <a name="tips"></a> Tips for Angular 2

### Beware of Outdated Tutorials for Angular 2
First off, remember that Angular 2 only came out in September 2016.
So, as you read solutions to your problems, look at the date of the
post. If it is about any Release Candidate (or before), consider it as
a bad solution.

### Most Important things to know about Angular 2
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

### Services give your modular code for your backend server
As you might know, Services in Angular 2 is a singleton that
allows you to store data on the client side so your Angular views
can access and display that data. It can't replace your database
and backend (and shouldn't replace it), but it is
your Backend Server Facade. It allows you to get the data you need
from any backend service.

#### The key is to have an API for your application
As you know, NodeJS, Java Play, and any other backend service allows
you to create APIs to get your data from your database. This will help
modularize your Angular 2 app, no matter what backend service you use.
What is great about this, is that if you need to switch out your NodeJS
server (for example) for a Java Play Server, all you need to make sure
is that your API remains the same and returns the same results as your
NodeJS server did.

#### Angular 1 Service vs. Angular 2 Service
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

##### How Observables work in Angular 2
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
