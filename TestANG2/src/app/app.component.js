"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Crud Operation';
        this.employees = [
            { name: "ovi", position: "software Engineer" },
            { name: "shohan", position: "LLB" },
            { name: "nipu", position: "doctor" }
        ];
        this.model = {};
        this.model2 = {};
        this.msg = "";
    }
    AppComponent.prototype.addEmployee = function () {
        this.employees.push(this.model);
        this.model = {};
        this.msg = "Record is successfully added.....";
    };
    AppComponent.prototype.deleteEmployee = function (i) {
        this.employees.splice(i, 1);
        this.msg = "Record is successfully deleted.....";
    };
    AppComponent.prototype.editEmployee = function (i) {
        this.model2.name = this.employees[i].name;
        this.model2.position = this.employees[i].position;
        this.myvalue = i;
    };
    AppComponent.prototype.updateEmployee = function () {
        var k = this.myvalue;
        for (var i = 0; i < this.employees.length; i++) {
            if (i == k) {
                this.employees[i] = this.model2;
                this.model2 = {};
                this.msg = "Record is successfully updated.....";
            }
        }
    };
    AppComponent.prototype.clickMe = function () {
        this.msg = "";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map