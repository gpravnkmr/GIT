# GIT
BE_GIT
{
    provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>',
  }, { provide: LocationStrategy, useClass: HashLocationStrategy }
  import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
