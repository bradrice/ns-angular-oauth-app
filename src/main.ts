
import { NativeScriptNgZone, platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular'

import { AppModule } from "./app/app.module";
import { configureOAuthProviders } from "./app/auth-providers-helper";

configureOAuthProviders();

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule, {
      ngZone: new NativeScriptNgZone(),
    }),
  });