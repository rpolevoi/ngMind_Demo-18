import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { StoreService } from './store.service';
import 'rxjs/add/operator/do';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Shared Store displayed in parent = {{storeVal}}</h3>
              <h3 *ngIf="lastVal >= 0">Previous value was {{lastVal}}</h3>
             <button (click)="incrementStore()" >Click to ++ store value</button>
             <br>
             <br>
             <app-child-component></app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  storeVal: number;
  lastVal: number;
  
  constructor(private store: StoreService) {
              this.store.sub
                .do(() => this.lastVal = this.storeVal)
                .subscribe(n => this.storeVal = n);
  }
  
  incrementStore() {this.store.incrementValue();}
  
}
