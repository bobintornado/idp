Template.signup.events({
    'click #submitSignup': function(e) {
        e.preventDefault();
        // console.log('this');
        var name = $('#nameInput').val();
        var email = $('#emailInput').val();
        var password = $('#passwordInput').val();
        var age = $('#ageInput').val();
        var nationality = $('#nationalityInput').val();
        // And following names also...
        // Gender: 'Male',
        // BodyClock: 'NormalZZZ',
        // Noiseduringsleep: 'SleepingLog',
        // SensitivitytoCleanliness: 'Ok',
        // HavingMeals: 'HomeCooked',
        // Smokingathome: 'Yes',
        var options = {
            username: email,
            email: email,
            password: password,
            profile: {
                Name: name,
                Age: age,
                Country: nationality
                    // fill in the rest later
            }
        };
        Accounts.createUser(options, function(error) {
            // console.log(error);
            if (error == undefined) {
                // Successfully create and login in user
                Router.go('/');
            };
        });
    }
});
