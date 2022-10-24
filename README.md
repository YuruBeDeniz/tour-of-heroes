# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# create a project
ng new angular-tour-of-heroes

## serve the app
cd angular-tour-of-heroes
ng serve --open

The ng serve command:

Builds the application
Starts the development server
Watches the source files
Rebuilds the application as you make changes
The --open flag opens a browser to http://localhost:4200.

You always import the Component symbol from the Angular core library and annotate the component class with @Component.

@Component is a decorator function that specifies the Angular metadata for the component.

ng generate created three metadata properties:

#### PROPERTIES	DETAILS
selector	The component's CSS element selector.
templateUrl	The location of the component's template file.
styleUrls	The location of the component's private CSS styles.

The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.

The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.

Always export the component class so you can import it elsewhere … like in the AppModule.

### Add a hero property
Add a hero property to the HeroesComponent for a hero named, Windstorm.

hero = 'Windstorm';

### Show the hero
Open the heroes.component.html template file. Delete the default text that ng generate created and replace it with a data binding to the new hero property.

heroes.component.html
<h2>{{hero}}</h2>

### Show the HeroesComponent view
To display the HeroesComponent, you must add it to the template of the shell AppComponent.

Remember that app-heroes is the element selector for the HeroesComponent. Add an <app-heroes> element to the AppComponent template file, just below the title.

src/app/app.component.html
<h1>{{title}}</h1>
<app-heroes></app-heroes>

