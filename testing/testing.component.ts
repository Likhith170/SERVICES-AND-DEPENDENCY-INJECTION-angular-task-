import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  title="Audi Q7";
  onENROLL(){
    const enrollservice = new EnrollService();
    enrollservice.onENROLLclicked(this.title);
    }
  
}
