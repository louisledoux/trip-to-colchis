import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import { Message } from '@trip-to-colchis/api-interfaces';

@Component({
  selector: 'trip-to-colchis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public language = 'fr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  updateLanguage() {
    this.translate.use(this.language);
  }
}
