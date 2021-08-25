export const environment = {
  production: true,
  urls: {
    api: '',
    auth: '/api'
  },
  ms_config: {
    config: {
      auth: {
        clientId: '691cc36b-f336-4baf-8fae-a48c6e2f1bcb',
        authority: 'https://login.microsoftonline.com/99f9b903-8447-4711-a2df-c5bd1ad1adf7',
        redirectUri: 'https://edc.excellerentsolutions.com/auth',
        postLogoutRedirectUri: 'https://edc.excellerentsolutions.com/auth'
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
