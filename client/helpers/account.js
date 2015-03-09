// Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
      Router.go('/');
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
      console.log('go to /');
      var url = Router.current().url;
      console.log('and the url is ' + url);
      Router.go('/');
    }
  }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});