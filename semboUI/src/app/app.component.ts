import { Component } from '@angular/core';
import { AppService } from '../../../apps/sambo-hotels/src/app.service';
import { Get } from '@nestjs/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semboUI';

  constructor(private service: AppService) { }

  hello: string = this.service.getHello();

}
