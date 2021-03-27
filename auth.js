// const logout = document.getElementById('logout');





//listen for auth status
auth.onAuthStateChanged(user => {
    if(user){
        console.log('user logged in: ', user);
        document.getElementById('button').style.visibility;
        document.getElementById('login').style.visibility = 'hidden';
        
        // document.getElementById('sett').classList.add('settinghide');
        // const element = document.getElementById('logout');
        
    }else {
        document.getElementById('button').style.visibility = 'hidden';
        console.log('user logged out');
        document.getElementById('logout').classList.add('loggedout');
        // document.getElementById('setting').classList.add('settinghide');
    }

})

//Signup
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) =>{
    e.preventDefault();
    //getuserinfo

    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;

    //signuptheuser
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupform.reset();
    });
});

//logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();

   

});


//login

const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e) =>{

    e.preventDefault();

    //getuserinfo

    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then( cred => {

        //close login modal
        const modal= document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginform.reset();  
    });

});