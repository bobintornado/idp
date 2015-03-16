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
      // console.log('go to /');
      // var url = Router.current().url;
      // console.log('and the path is ' + url);
      Session.setPersistent("signUp", "Yes");
      Router.go('/');
    }
  }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});