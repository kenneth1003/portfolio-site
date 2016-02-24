// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1644459105809237', // your App ID
        'clientSecret'  : '90a61273a8203f0e2dde693f363b4e76', // your App Secret
        'callbackURL'   : 'https://rocky-dusk-7171.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'ULZqooG7OyudFlE5kxdD2Stpw',
        'consumerSecret'    : 'U2n2mqezBFpzaQvFaq1qQClS8cotxES5TFn5WZmNzLW8VLeUOu',
        'callbackURL'       : 'https://rocky-dusk-7171.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '637063491751-td2rvj153rkb8p99hsn2ak399sm5lkde.apps.googleusercontent.com',
        'clientSecret'  : 'cmPL1LtAjQV8G8buRNjjlSlf',
        'callbackURL'   : 'https://rocky-dusk-7171.herokuapp.com/auth/google/callback'
    }

};