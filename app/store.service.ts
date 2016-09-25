import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class StoreService {
  
  sub: Subject<number> = new BehaviorSubject(0);

  serviceValue = 0;

  incrementValue(){
    this.serviceValue++;
    this.sub.next(this.serviceValue);
    
    
  };

}
