$('#myModalBtn').click(function() {
    CheckIfUserIsLoggedIn($(this).html())
})
function CheckIfUserIsLoggedIn(params, param2) {
    console.log(params, param2);
    if (UserBtn.innerHTML == 'Log Out' && params == 'Log Out') {
        $('#myModal').modal('hide')
        UserBtn.innerHTML = "Sign In"
        localStorage.setItem('UserStatus', UserBtn.innerHTML)
        window.location.href = "./Movie.html"
    }

    else if (UserBtn.innerHTML == 'Sign In') {
        $('#myModal').modal('show')
        
        
    }
    if (UserBtn.innerHTML == 'Log Out' && params != 'Log Out') {
        localStorage.setItem('DateSelected', param2)
        localStorage.setItem('TimeSelected', params)
        window.location.href = "./BookNow.html"   
    }
}
// CheckIfUserIsLoggedIn()