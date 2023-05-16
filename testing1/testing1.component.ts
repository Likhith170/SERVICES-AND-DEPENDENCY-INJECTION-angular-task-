import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css']
})
export class Testing1Component {
  title="Maruthi 800";
  onENROLL(){
    const enrollservice = new EnrollService();
    enrollservice.onENROLLclicked(this.title);
    }
  
}
