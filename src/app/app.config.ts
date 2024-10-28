import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { URL_POST } from './post/posturl';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      {
        provide : URL_POST, useValue:'https://my-json-server.typicode.com/typicode/demo'
      },
      provideHttpClient(withFetch())
    ]
};
