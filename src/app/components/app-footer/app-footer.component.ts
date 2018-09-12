import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

  currentDate: Date = new Date();
  version: string = '0.0.1-alpha';
  environment: string = 'Development';
}
