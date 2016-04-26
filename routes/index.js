require('../lib/db');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var captchapng = require('captchapng');
var passport = require('passport');
var captchaNum;
var captchaImg = function(){
        captchaNum = parseInt(Math.random()*9000+1000);
        var p = new captchapng(100,30, captchaNum); // width,height,numeric captcha
        p.color(115, 95, 197, 100);  // First color: background (red, green, blue, alpha)
        p.color(30, 104, 21, 255); // Second color: paint (red, green, blue, alpha)
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        return imgbase64;
};
router.get('/', function(request, response) {
  response.render('index');
});
router.get('/profile', function(request, response) {
  response.render('profile');
});
router.get('/skills', function(request, response) {
  response.render('skills');
});
router.get('/portfolio', function(request, response) {
  response.render('portfolio');
});
router.get('/guest', function(request, response) {
var valicode = new Buffer(captchaImg()).toString('base64');   
  response.render('guest', {'valicode' : valicode, 'wrongCap': ''});
});
router.get('/header', function(req, res){
  // res.render('test');
  res.set('Content-Type', 'text/plain')
  var s = req;
  for(name in req.headers){
    s += name + ': ' + req.headers[name] + '\n' 
  }
  res.send(s)  
})

router.get('/db-comments', function(req, res, next){
    Comment.find(function(err, data){
        if(err){
            console.log('can not fetch the data')
        }
        res.send(data);
    })
});

router.post('/comment', function(req, res, next) {
    console.log('get comment');
    if(req.body.captcha != captchaNum){
        var valicode = new Buffer(captchaImg()).toString('base64');   
        res.render('guest', {'valicode' : valicode, 'wrongCap': '驗證碼輸入錯誤'});
        return;
    }
    new Comment({
        Visitor: req.body.visitor,
        Comment: req.body.comment,
        CreateDate: req.body.tim
    }).save( function( err ){
        if (err) {
            console.log('Fail to save to DB.');
            return;
        }
        console.log('Save to DB.');
    });     

        var valicode = new Buffer(captchaImg()).toString('base64');   
        res.render('guest', {'valicode' : valicode, 'wrongCap': ''});
});

// =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    router.get('/auth/index', function(req, res) {
        res.render('auth/index'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    router.get('/auth/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('auth/login', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    router.get('/auth/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('auth/signup', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    router.get('/auth/profile', isLoggedIn, function(req, res) {
        res.render('auth/profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    router.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/auth/index');
    });

    router.post('/auth/signup', passport.authenticate('local-signup', {
        successRedirect : '/auth/profile', // redirect to the secure profile section
        failureRedirect : '/auth/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
       // process the login form
    router.post('/auth/login', passport.authenticate('local-login', {
        successRedirect : '/auth/profile', // redirect to the secure profile section
        failureRedirect : '/auth/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

     // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/auth/profile',
            failureRedirect : '/auth/index'
        }));
     // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    router.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/auth/profile',
                    failureRedirect : '/auth/index'
            }));

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    router.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/auth/profile',
            failureRedirect : '/auth/index'
        }));



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/auth/index');
}








module.exports = router;
