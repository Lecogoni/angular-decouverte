# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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



<!-- NAVBAR-->
<app-navbarzone></app-navbarzone>

<!-- ASIDE & CONTENT -->
<div class="d-flex justify-content-between">

  <!-- ASIDE -->
  <div>
    <div class="container">
      <h4>Mes Appareils dans asideComponent</h4>
      <ul>
        <app-asidezone appareilName="machine a laver"></app-asidezone>
        <app-asidezone appareilName="ordi"></app-asidezone>
        <app-asidezone appareilName="machine a café"></app-asidezone>
      </ul>
      <button class="bton btn-success" [disabled]="!isAuth" (click)="onAllumer">Tout allumer</button>
    </div>
  </div>
  <!-- CONTENT -->
  <div>
    <app-contentzone></app-contentzone>
  </div>
</div>

<!-- FOOTER -->
<app-footerzone></app-footerzone>

