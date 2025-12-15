import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { routes } from './app.routes';
import { ThemeToggleService } from '@jeppesen-foreflight/dp-dls-global-angular/theme-toggle';
import { DensityToggleService, LocalStorageDensityStorage, DENSITY_STORAGE_SERVICE } from '@jeppesen-foreflight/dp-dls-global-angular/density-toggle';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    ThemeToggleService,
    DensityToggleService,
    {
      provide: DENSITY_STORAGE_SERVICE,
      useClass: LocalStorageDensityStorage,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {floatLabel: 'auto'}
    }
  ]
};
