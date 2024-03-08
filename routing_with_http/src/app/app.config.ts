import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  //registerig application level routes wih the rouer service
  providers: [provideRouter(routes),provideHttpClient()]
};
