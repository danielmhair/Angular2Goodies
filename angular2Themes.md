# Table of Contents
- [Create your own Theme](#own-theme)
# <a name="own-theme"></a> Create your own Theme
As I'm sure you know, having a set theme for your app is really amazing once its set up (you might have
experienced this when you started using bootstrap). 

What is great, is that Angular Material supports theming and can be a tremendous help to you, if you embrace it. 
I encourage you to read and follow the tutorial here.

## [SASS](http://sass-lang.com/guide) Styling
I know this is another thing to learn, but there really isn't too much to learn. It uses the same programming 
principles that we all know and love. Not only that, but add your CSS and you have SASS! (for the most part)

SASS is superset of CSS (SASS is to CSS as Typescript is to Javascript). SASS allows you to use variables, functions 
and other things in order to dynamically create your CSS. Don't worry, Angular 2 is already built to handle SASS files, 
so you just need to add the files. SASS files use the file extension `scss`. All you need to do is convert your `css` 
file to `scss` and make that change in your component and your set.

Here is an example. Say we have this component that uses `css`.
```typescript
import { Component } from '@angular/core';
@Component({
    selector: 'example',
    styleUrls: ['./example.component.css'],
    templateUrl: './example.component.html'
})
export class ExampleComponent {}
```

Then just rename `'./example.component.css'` to `'example.component.scss'` like so:
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'example',
    styleUrls: ['./example.component.scss'],
    templateUrl: './example.component.html'
})
export class ExampleComponent {}
```
Then rename your `css` file to a `scss` file. All your css styles will still apply in your `scss`.

### `SCSS` Highlights

This `css`:
```css
.container .child-class .other-child-class {
    color: red;
}
```
is the same as this `scss`:
```scss
.container {
  .child-class {
    .other-child-class {
      color: red;
    }
  }
}
```

This might not be too impressive until you see this. This `css` version:
```css
.container {
    background-color: blue;
    margin-right: 10px;
    margin-left: 10px;
}
.container .child-class {
    border-radius: 5px;
}
.container .child-class .other-child-class {
    color: red;
}
.container .child-class .other-child-class > li.active {
    color: lightblue;
}

.container .child-class .other-child-class > li.active.other {
    color: lightgreen !important;
}
```
where the `scss` for this is:
```scss
.container {
    background-color: blue;
    margin-right: 10px;
    margin-left: 10px;
    .child-class {
        border-radius: 5px;
        .other-child-class {
          color: red;
          
          > li.active {
            color: lightblue;
            &.other {
              color: lightgreen !important;
            }
          }
        }
    }
}
```

This can help reduce a lot of code duplication in your styles, as well as having a hierarchy.

However, lets take this a step further.

### `SCSS` Variables
**`variables.css`**
```css
.my-theme {
    background-color: blue;
}

.my-theme .alert {
    border-color: blue;
    
}
```

**`variables.scss`**
```scss
$themeColor: blue;
.my-theme {
    background-color: $themeColor;
    
    .alert {
        border-color: $themeColor;
  }
}
```

A small file like this might not be that amazing, but as you know, when you add variables, you can do a lot more and 
change what you have done very quickly.

#### Importing variables
Say you have a `app.variables.scss` file that holds all your theme variables to use throughout your app like so:
**`app.variables.scss`**
```scss
$primary-color: #0700FF;
$secondary-color: #FFC00D;
$accent-color: #B90CE8;
$success-color: #1AFF00;
$danger-color: #FF0000;
```

Then if you need those variables in your component, do this:
**`some-component.component.scss`**
```scss
@import './app.variables.scss'; /* This is a relative path */

.my-class {
  background-color: $primary-color; 
}
```

### `SCSS` Functions
Functions are amazing, as we all know. Well, `SASS` has it!

Lets say you want a light and dark theme. Make a `scss` file for it:

**`themes.scss`**
```scss
@function light-theme($primary-color, $secondary-color, $accent-color, $success-color, $danger-color) {
  @return (
    primary: $primary-color,
    secondary: $secondary-color,
    accent: $accent-color,
    success: $success-color,
    danger: $danger-color,
    is-dark: false
  );
}

@function dark-theme($primary-color, $secondary-color, $accent-color, $success-color, $danger-color) {
  @return (
    primary: $primary-color,
    secondary: $secondary-color,
    accent: $accent-color,
    success: $success-color,
    danger: $danger-color,
    is-dark: true
  );
}
```

Then you can use these functions in your `styles.scss` file that is used as your main styles file.
**`styles.scss`**
```scss
@import 'themes.scss';
@import 'app.variables.scss';

light-theme($primary-color, $secondary-color, $accent-color, $success-color, $danger-color);
```

NOTE: Want to convert your `styles.css` to `styles.scss` for your `Angular CLI` project? Go to your `angular-cli.json`
file and find the property `styles` and change the css file to scss like so:

**`angular-cli.json`** from 
```json
{
  "compilerOptions": {
    "styles": [
      "styles.css",
      // ...
    ]
  }
}
```
to 
```json
{
  "compilerOptions": {
    "styles": [
      "styles.scss",
      // ...
    ]
  }
}
```

### `SCSS` Mixins
From SASS Basics, they define mixins as follows:

    Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. 
    A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. 
    You can even pass in values to make your mixin more flexible. 
    A good use of a mixin is for vendor prefixes.

Here is their example
    
**`border-radius.mixin.scss`**
```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

This is really awesome, especially when you want to modularize as well as theme. For example, Material 2 did this.
NOTE: any `scss` file that has an underscore like the file below `_all_theme.scss` means its a partial. It tells 
the `scss` compiler not to convert it to css, but rather it will be imported into another file when it is needed.

**`_all-theme.scss`**
```scss
// Import all the theming functionality.
@import '../core';
@import '../../autocomplete/autocomplete-theme';
@import '../../button/button-theme';
@import '../../button-toggle/button-toggle-theme';
// ...

// Create a theme.
@mixin angular-material-theme($theme) {
  @include md-core-theme($theme);
  @include md-autocomplete-theme($theme);
  @include md-button-theme($theme);
  @include md-button-toggle-theme($theme);
  // ...
}
```

This is where the real power of SCSS files come from when you theme your own components. For each component that 
Material 2 makes, they have a theme mixin that you include in the angular-material-theme.

Lets make one for our app.

#### 1. Create your App Mixin
**`_app-theme.mixin.scss`**
```scss
@mixin app-theme($theme) {
  
}
```

#### 2. Create your components and mixin for each component
For the sake of space, I will make a simple example. Its actually from Material 2's [example 
for a toolbar](https://github.com/angular/material2/tree/master/src/demo-app/toolbar)

**`toolbar-demo.component.ts`**
```typescript
import {Component} from '@angular/core';


@Component({
  selector: 'toolbar-demo',
  templateUrl: 'toolbar-demo.component.html',
  styleUrls: ['toolbar-demo.component.scss'],
})
export class ToolbarDemoComponent {}
```

**`toolbar-demo.component.html`**
```html
<md-toolbar class="toolbar">
  <md-icon class="accent">menu</md-icon>
  <span class="primary">Default Toolbar</span>

  <span class="demo-fill-remaining"></span>

  <md-icon class="accent">code</md-icon>
</md-toolbar>
```

**`toolbar-demo.component.scss`**
```scss
.demo-toolbar {
    padding: 6px;
    .demo-toolbar-icon {
        padding: 0 14px;
    }
    
    .demo-fill-remaining {
        flex: 1 1 auto;
    }
}
```

Here is where I will be adding our mixin.

You will notice that we use a few methods you are unfamiliar with (assuming no experience with `scss`). 
1. **`map-get` function.** If you remember, when we created our dark and light theme, we had the function return a list 
of keys and values (also known as a map). This function will simply return the value of the key you ask for. 

    
    @return (
      primary: $primary-color,
      // ...
    );


**`_toolbar-demo.mixin.scss`**
```scss
@mixin toolbar-demo($theme) {
  $primary: map-get($theme, primary);
  $secondary: map-get($theme, secondary);
  $accent: map-get($theme, accent);
  $success: map-get($theme, success);
  $danger: map-get($theme, danger);
  
  .toolbar {
    .primary {
      color: $primary;
    }
    
    .secondary {
      color: $secondary;    
    }
    
    .accent {
      color: $accent;
    }
    
    .success {
      color: $success;    
    }
    
    .danger {
      color: $danger;  
    }
  }
}
```

#### 3. Add your component mixins to your theme
With this mixin, it will allow you to change the primary, secondary, accent, success and danger colors by changing one line of code.

Remember how we made the `_app-theme.mixin.scss` file?
Well, all we need to do is import our new `_toolbar-demo.mixin.scss` file into it like so:

NOTE: Keep in mind that when we imported the mixin, we didn't include the '_'. The compiler knows how to handle this.

**`_app-theme.mixin.scss`**
```scss
@import '../app/toolbar-demo/toolbar-demo.mixin';
@mixin app-theme($theme) {
  @include toolbar-demo($theme);
}
```

#### 4. Apply these changes to your main scss file: `styles.scss`
Then all you need to do is change one more thing in your `styles.scss` file:
**`styles.scss`**
```scss
@import 'themes.scss';
@import 'app.variables.scss';
/* Import our app-theme mixin */
@import 'app-theme.mixin';

/* Set the result of the light-theme function into our theme variable */
$theme: light-theme($primary-color, $secondary-color, $accent-color, $success-color, $danger-color);

/** 
 * Pass in our theme into the app-theme. All of the colors your uses in your light-theme will now be applied to all 
 * your components that you have in your theme. 
 */
app-theme($theme)
```



