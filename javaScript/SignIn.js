
let UserBtn = document.getElementById('myModalBtn')
if (localStorage.getItem('UserStatus')) {
    UserBtn.innerHTML = localStorage.getItem('UserStatus')
}
let loggedInUserInfo
// let newUserr = [{userName: "Habeeb", emailAddress: "tawaliu@gmail.com", passWord: "jadesola"}, {userName: "Habeebb", emailAddress: "tawaliuu@gmail.com", passWord: "jadesolaa"}, {userName: "Habeebbb", emailAddress: "tawaliuuu@gmail.com", passWord: "jadesolaaa"}]
function ValidateUser(params) {
    let inputs = document.querySelectorAll('form#userSignIn input')
    let seenEmailAddress = false
    for (let i = 0; i < myUsers.length; i++) {
        let a = myUsers[i]
        if (inputs[0].value == a.emailAddress) {
            if (inputs[1].value != a.passWord) {
                seenEmailAddress == false
                inputs[0].parentElement.className = 'error'
                return false
            }
            seenEmailAddress = true
            loggedInUserInfo = a
        }
        if (i == myUsers.length -1 && seenEmailAddress == false) {
            inputs[0].parentElement.className = 'error'
            return false
        }
    }
    UserBtn.innerHTML = 'Log Out'
    localStorage.setItem('UserStatus', UserBtn.innerHTML)
    console.log(UserBtn.innerHTML);
    return true
}
function ShowSignUpForm(params) {
    document.getElementById('modal_body').innerHTML = 
    `
    <form action="" id="userSignUp" onsubmit="return ValidateForm()" method="POST">
        <div id="newUserUsernameDiv" class="">
            <span>Username</span>
            <input type="text" name="Username" id="newUserUsername" onfocus="Focus(event)" onblur="Blur(event)">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Username must be alphanumeric and contain 5 - 12 characters</small>
        </div>
        <div id="newUserEmailDiv" class="">
            <span>Email</span>
            <input type="email" name="Email" id="newUserEmail" onfocus="Focus(event)" onblur="Blur(event)">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Email must be a valid address e.g example@mydomain.com</small>
        </div>
        <div id="newUserPasswordDiv" class="">
            <span>Password</span>
            <input type="password" name="Password" id="newUserPassword" onfocus="Focus(event)" onblur="Blur(event)">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Password must be alphanumeric and to be 8 - 20 characters</small>
        </div>
        <div id="newUserConfirmPasswordDiv" class="">
            <span>Confirm Password</span>
            <input type="password" name="ConfirmPassword" id="newUserConfirmPassword" onfocus="Focus(event)" onblur="Blur(event)">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Incorrect</small>
        </div>
        <div id="submitBtnDiv">
            <button type="submit" id="submitBtn" class="btn">Sign Up</button>
        </div>
    </form>
    <div id="signUpBtnDiv" class="mt-5">
        <p>Already have an account</p>
        <span id="signUpBtn" class="ml-2" onclick="ShowSignInForm()">Sign in</span>
    </div>
    `
    AddListenersToInput()
    document.getElementById('modal_title').innerHTML = 'Sign Up'
}
function ShowSignInForm(params) {
    document.getElementById('modal_body').innerHTML =
    `
    <form action="" id="userSignIn" onsubmit="return ValidateUser()" method="POST">
        <div id="userEmailDiv">
            <span>Email or Phone</span>
            <input type="email" onfocus="Focus(event)" onblur="Blur(event)" name="" id="userEmail">
            <i class="fa fa-check-circle"></i>
            <i class="fa fa-exclamation-circle"></i>
            <small>Invalid Email Address or Password</small>
        </div>
        <div id="userPasswordDiv" class="">
            <span>Password</span>
            <input type="password" name="" onfocus="Focus(event)" onblur="Blur(event)" id="userPassword">
        </div>
        <div id="submitBtnDiv">
            <button type="submit" id="submitBtn" class="btn">Log In</button>
        </div>
    </form>
    <div id="signUpBtnDiv" class="mt-5">
        <p>Don't have an account yet?</p>
        <span id="signUpBtn" onclick="ShowSignUpForm()" class="ml-2" >Sign Up</span>
    </div>
    `
}
function Focus(e) {
    if (e.target.value == "") {
        e.target.previousElementSibling.classList.remove('gh')
        e.target.previousElementSibling.classList.add('gg')
    }
}
function Blur(e) {
    if (e.target.value == "") {
        e.target.previousElementSibling.classList.remove('gg')
        e.target.previousElementSibling.classList.add('gh')
    }
}