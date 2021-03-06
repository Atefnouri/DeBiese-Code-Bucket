﻿'use strict';
module DeBiese.NgResources.Part2.Components {
    import ctrls = DeBiese.NgResources.Part2.Controllers;

    export class HomeComponent implements ng.IComponentOptions {
        static id = 'homeComponent';

        templateUrl = '/app/components/home/homeView.html';
        controllerAs = 'vm';
        controller = ctrls.HomeController;

        constructor() {

        }
    }

    app.component(HomeComponent.id, new HomeComponent());
}