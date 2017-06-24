import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent  {

    title: string = 'Crud Operation';

    employees = [
        { name: "ovi", position: "software Engineer" },
         { name: "shohan", position: "LLB" },
          { name: "nipu", position: "doctor" }

    ];

    model: any = {};
    model2: any = {};
    msg: any = "";
    addEmployee() {
        this.employees.push(this.model);
        this.model = {};
        this.msg = "Record is successfully added.....";
    }
    deleteEmployee(i) {
        this.employees.splice(i, 1);
        this.msg = "Record is successfully deleted.....";
    }
    myvalue;
    editEmployee(i) {
        this.model2.name = this.employees[i].name;
        this.model2.position = this.employees[i].position;
        this.myvalue = i;
    }
    updateEmployee() {
        let k = this.myvalue;
        for (let i = 0; i < this.employees.length; i++)
        {
            if (i == k) {
                this.employees[i] = this.model2;
                this.model2 = {};
                this.msg = "Record is successfully updated.....";
            }
        }
    }


    clickMe() {
        this.msg = "";
    }

}
