import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';


export const authConfig: AuthConfig = {
    issuer:  environment.identity + 'auth',
    clientId: 'spa',
    redirectUri: window.location.origin + '',
    silentRefreshRedirectUri: window.location.origin + '',
    postLogoutRedirectUri: window.location.origin,
    responseType: 'code',
    scope: 'openid profile',
    silentRefreshTimeout: 500000, // For faster testing
     // For faster testing
     requireHttps: false,
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
  };