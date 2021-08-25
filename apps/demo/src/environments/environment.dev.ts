// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  urls: {
    api: 'http://localhost:9090',
    auth: 'http://localhost:9090/api'
  },
  ms_config: {
    config: {
      auth: {
        clientId: '11c68be7-1f30-495f-9331-9ba739657196',
        authority: 'https://login.microsoftonline.com/99f9b903-8447-4711-a2df-c5bd1ad1adf7',
        redirectUri: 'http://localhost:4200/auth',
        postLogoutRedirectUri: 'http://localhost:4200/auth'
      },
      cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE10 or Edge
      }
    },
    login: {
      scopes: ['openid', 'profile', 'User.Read']
    },
    useRedirect: true
  }
};
