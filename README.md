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
- [Tips for Angular 2](instructions/angular2Tips.md)



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
From here on out, I will be using `scss`. You can learn about this [here](instructions/angular2Themes#). It would be best that you do too, 
mainly because you can store variables in your styles!

- **Rename `src/styles.css` to `src/styles.scss`**
- **Edit `angular-cli.json` and change `styles.css` to `styles.scss` like so:**
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

- **<a name="convert-to-sass-component"></a> Convert any component's styling from `css` to `scss` as follows:**
 - *Rename your component's `css` file to a `scss` file. All your css styles will still apply in your `scss`.*
 - *Apply the file extension change in your component class so your result is as follows:*

    ```typescript
    import { Component } from '@angular/core';

    @Component({
        selector: 'example',
        styleUrls: ['./example.component.scss'], // <= Changed from css to scss
        templateUrl: './example.component.html'
    })
    export class ExampleComponent {}
    ```

### <a name="material-2-import-theme"><a/> [Include Material 2's theme](https://material.angular.io/guide/theming)
This is where I got hung up for a day or so. The styles of Material 2 were not being applied. It was because I missed adding
a theme to Material 2. You have these choices:

- `@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';`
- `@import '~@angular/material/core/theming/prebuilt/indigo-pink.css';`
- `@import '~@angular/material/core/theming/prebuilt/pink-bluegrey.css';`
- `@import '~@angular/material/core/theming/prebuilt/purple-green.css';`

I like #2 the best. But you can test them by adding one of them to your `style.scss` like so:

**`styles.scss`**
```scss
@import '~@angular/material/core/theming/prebuilt/indigo-pink.css';
```

### <a name="create-own-theme"><a/> Creating your own theme
It is so much easier when you have a theme built out to use throughout your app. It can save you a lot of valuable
time. In order to do this, you can either use Material's theme or build your own. These links will help you get started:

1. [Theming with Material 2](instructions/angular2Themes.md). This will show you directly how to
style your app very quickly (but it can be confusing without the tutorial linked below).

2. [Theming with SASS (`scss`) Tutorial](instructions/angular2Themes.md#sass-tutorial). To understand how Material does its theming "magic", go
through this tutorial. It helps you understand how to theme using SASS and what SASS is.


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