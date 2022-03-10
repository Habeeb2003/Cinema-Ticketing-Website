let media1 = window.matchMedia("(max-width:1024px)")
function Media1 (params){
    if (params.matches) {
        let listItem = document.querySelectorAll('#navUl li')
        listItem.forEach(function(element) {
            document.getElementById('menuUlSm').append(element)
        })
    }
    else{
        let listTem = document.querySelectorAll('#menuUlSm li')
        listTem.forEach(function(element) {
            document.getElementById('navUl').append(element)
        })
    }
}
Media1(media1)
media1.addListener(Media1)
$(document).ready(function() {
    $('#openMenBtn').click(function() {
        $(this).addClass('to')
        $('#navMenuSm').slideDown()
        $('#closeMenuBtn').removeClass('to')
    })
    $('#closeMenuBtn').click(function() {
        $(this).addClass('to')
        $('#openMenBtn').removeClass('to')
        $('#navMenuSm').slideUp()
    })
})