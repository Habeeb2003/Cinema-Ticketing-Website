let patterns = {
    Username: /^[a-z\d]{5,12}$/i,
    Password: /^[\w@-]{8,20}$/,
    Email: /^([a-zA-Z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
let myUsers = [

]
if (localStorage.getItem('MyUsers')) {
    myUsers = JSON.parse(localStorage.getItem("MyUsers"))
}
function ValidateForm() {
    let allInputParent = document.querySelectorAll('form#userSignUp div')
    for (let i = 0; i < allInputParent.length-1; i++) {
        if (allInputParent[i].className == 'error' || allInputParent[i].className == '') {
            return false
        }
    }
    let allInput = document.querySelectorAll('form#userSignUp input')
    let newUser = {userName: "", emailAddress: "", passWord: ""}
    for (let i = 0; i < allInput.length-1; i++) {
        let a = allInput[i]
        if (i == 0) {
            newUser.userName = a.value;
        }
        else if (i == 1) {
            newUser.emailAddress = a.value;
        }
        else if (i == 2) {
            newUser.passWord = a.value
        }  
    }
    myUsers.push(newUser)
    console.log(myUsers);
    localStorage.setItem('MyUsers', JSON.stringify(myUsers))
    UserBtn.innerHTML = 'Log Out'
    localStorage.setItem('UserStatus', UserBtn.innerHTML)
    return true
}
function AddListenersToInput() {
    let inputs = document.querySelectorAll('#userSignUp input')
    inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            if (e.target.attributes.name.value == 'ConfirmPassword') {
                CheckConfirmPassword(e.target, e.target.parentElement)
                return;
            }
            CheckInputValidity(e.target, patterns[e.target.attributes.name.value], e.target.parentElement)
        }) 
    })
}
function CheckInputValidity(field, regex, fieldParent) {
    if (regex.test(field.value)) {
        fieldParent.className = 'success'
    }
    else{
        fieldParent.className = 'error'
    }
}
function CheckConfirmPassword(confirmField, fieldParent) {
    console.log(confirmField.value);
    if (confirmField.value == document.getElementById('newUserPassword').value &&  document.getElementById('newUserPassword').value != "") {
        fieldParent.className = 'success'
    }
    else{
        fieldParent.className = 'error'
    }
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
