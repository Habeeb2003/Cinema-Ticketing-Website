let g = 0
let goBackCarousel = false
let carouselInterval
// The_King's_Man-Small-size
let nShowInCinema = [{poster: "../Images/fast9Banner.jpg",  Genre: "Genre: Action", movieTitle: "FAST 9"}, 
    {poster: "../Images/venomForCinema.jpg",  Genre: "Genre: Action", movieTitle: "VENOM"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/the-sucide-squad-small-size.jpg",  Genre: "Genre: Action", movieTitle: "SUCIDE SQUAD"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"}]
let comSoonInCinema = [{poster: "../Images/fast9Banner.jpg",  Genre: "Genre: Action", movieTitle: "FAST 9"}, 
    {poster: "../Images/venomForCinema.jpg",  Genre: "Genre: Action", movieTitle: "VENOM"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/the-sucide-squad-small-size.jpg",  Genre: "Genre: Action", movieTitle: "SUCIDE SQUAD"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/The_Kings_Man-Small-size.jpg",  Genre: "Genre: Action", movieTitle: "THE KINGS MAN"}]
let latestMovieCarousel = [{poster: "../Images/free-guy.jpg",  movieDescription: "A bank teller called Guy realises he is a background character in an open world video game called Free City that will soon go offline.", movieTitle: "FREE GUY"}, 
    {poster: "../Images/venom-poster-big-size.jpg",  movieDescription: "Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters. Directed by Andy Serkis, the film also stars Michelle Williams, Naomie Harris and Woody Harrelson, in the role of the villain Cletus Kasady/Carnage.", movieTitle: "VENOM"},
    {poster: "../Images/The-Kings-Man-2020-Big-Size.jpg",  movieDescription: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/The-Suicide-Squad-Big-size.jpeg",  movieDescription: "The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.", movieTitle: "SUCIDE SQUAD"},
    {poster: "../Images/The-Kings-Man-2020-Big-Size.jpg",  movieDescription: "One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.", movieTitle: "THE KINGS MAN"},
    {poster: "../Images/fast9Big-size.jpg",  movieDescription: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most.", movieTitle: "Fast 9"}]
let straightCon = document.querySelectorAll('#straightCon')

function nowShowingInCinema() {
    for (let  i= 0;  i< nShowInCinema.length; i++) {
        let index = nShowInCinema[i] 
        let newNSIC = `
        <div id="cardsDiv">
            <div id="card">
                <div id="border" style="background-image: url('${index.poster}')">
                    <div id="overlayCon">
                        <div id="overlay">
                            <p>${index.Genre}</p>
                            <h6 id="movie_name">${index.movieTitle}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById('cardsCon').innerHTML += newNSIC
    }
}
function commingSoonInCinema() {
    for (let  i= 0;  i< comSoonInCinema.length; i++) {
        let index = nShowInCinema[i] 
        let newNSIC = `
        <div id="cardsDiv">
            <div id="card">
                <div id="border" style="background-image: url('${index.poster}')">
                    <div id="overlayCon">
                        <div id="overlay">
                            <p>${index.Genre}</p>
                            <h6 id="movie_name">${index.movieTitle}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById('ccardsCon').innerHTML += newNSIC
    }
}
function LatestCarousel() {
    for (let  i= 0;  i< latestMovieCarousel.length; i++) {
        let index = latestMovieCarousel[i] 
        let newNSIC = `
        <div id="aDescriptiveCon" style="background-image: url('${index.poster}'">
            <div id="details">
                <div id="movieTitle">
                    <h1>${index.movieTitle}</h1>
                </div>
                <div id="movieDecription">
                    <p>
                        ${index.movieDescription}
                    </p>
                </div>
                <div id="viewDetailsBtniv">
                    <button class="btn">View Details <i class="fa fa-caret-right"></i></button>
                </div>
            </div>
        </div>
        `
        document.getElementById('carouselCon').innerHTML += newNSIC
    }
    
}
function CallCarouselInterval(params) {
    carouselInterval = setInterval(() => { 
        if (goBackCarousel == false) {
            g++
            ImageViewerScroll('iRight', 'interval')
        }
        else if (goBackCarousel == true) {
            g--
            ImageViewerScroll('iLeft', 'interval')
        }
        if (g == 5) {
            goBackCarousel = true
        }
        else if (g == 0) {
            goBackCarousel = false
        }
    }, 5000);
}
function ImageViewerScroll(param1, param2) {
    if (param1 == 'iRight') {
        $('#carouselCon').animate({scrollLeft: `+=${window.visualViewport.width + 17}`}, 1000)
    }
    if (param1 == 'iLeft') {
        $('#carouselCon').animate({scrollLeft: `-=${window.visualViewport.width + 17}`}, 1000)
    }
}
nowShowingInCinema()
commingSoonInCinema()
LatestCarousel()
CallCarouselInterval()
$(document).ready(function() {
    
    $('#nRight').click(function() {
        $('#cardsCon').animate({scrollLeft: '+=200'}, 300)
    })
    $('#nLeft').click(function() {
        $('#cardsCon').animate({scrollLeft: '-=200'}, 300)
    })
    $('#cRight').click(function() {
        $('#ccardsCon').animate({scrollLeft: '+=200'}, 300)
    })
    $('#cLeft').click(function() {
        $('#ccardsCon').animate({scrollLeft: '-=200'}, 300)
    })
    $('#iRight').click(function() {
        clearInterval(carouselInterval)
        ImageViewerScroll('iRight', 'click')
        g++
        CallCarouselInterval()
        // console.log(g);
    })
    $('#iLeft').click(function() {
        clearInterval(carouselInterval)
        g--
        ImageViewerScroll('iLeft', 'click')
        CallCarouselInterval()
    })
})
