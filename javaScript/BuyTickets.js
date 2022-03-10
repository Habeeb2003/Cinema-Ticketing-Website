const cinemaJson = JSON.parse(localStorage.getItem("CinemaJson"))
function Selec(params) {
    let current = new Date()
    let select_state = document.getElementById('sta')
    let select_cinema = document.getElementById('cini')
    let select_category = document.getElementById('cate')
    let availableMovieInCinemaSect = document.getElementById('availableMovieInCinemaSect')
    availableMovieInCinemaSect.innerHTML = ""
    select_cinema.innerHTML = ""
    for (let i = 0; i < cinemaJson.length; i++) {
        let z = cinemaJson[i]
        if (z.state == select_state.value) {
            for (let j = 0; j < z.cinema.length; j++) {
                let y = z.cinema[j]
                select_cinema.innerHTML += `<option value="${y.name}">${y.name}</option>`
                if (y.name == select_cinema.value) {
                    for (let k = 0; k < y.movies.length; k++) {
                        let x = y.movies[k]
                        if (new Date(x.date).getTime() < current.getTime()) {
                            y.nowShowing.push(x)
                        }
                        if (new Date(x.date).getTime() > current.getTime()) {
                            y.upcomingMovies.push(x)
                        }    
                    }
                    if (select_category.value == "Now Showing") {
                        
                            for (let m = 0; m < y.nowShowing.length; m++) {
                            let xx = y.nowShowing[m]

                            if (m % 2 == 0) {
                                availableMovieInCinemaSect.innerHTML += 
                                ` 
                                    <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                        <div id="aMovieInfoConCol1" class="col-lg ">
                                            <div id="mainMovieInfoDiv">
                                                <div id="image" style="background-image: url('${xx.poster}');">

                                                </div>
                                                <div id="notes">
                                                    <div id="moviNaDiv">
                                                        <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                    </div>
                                                    <div id="whatMoviesIsAbout">
                                                        ${ShowSmallText(xx.description)}
                                                    </div>
                                                    <div id="showtimesDiv">
                                                        <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                    </div>
                                                    <div id="timeAndGenreDiv">
                                                        <span id="movieDuration">${xx.duration}</span>
                                                        <span id="rating">18</span>
                                                        <span id="genre">${xx.genre[0]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>                         
                                `
                                continue;
                            }
                            let seco = document.querySelectorAll('#aMovieInfoConRow')
                            let se =    `
                                <div id="aMovieInfoConCol2" class="col-lg ">
                                    <div id="mainMovieInfoDiv">
                                        <div id="image" style="background-image: url('${xx.poster}');">

                                        </div>
                                        <div id="notes">
                                            <div id="moviNaDiv">
                                                <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                            </div>
                                            <div id="whatMoviesIsAbout">
                                                ${ShowSmallText(xx.description)}
                                            </div>
                                            <div id="showtimesDiv">
                                                <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                            </div>
                                            <div id="timeAndGenreDiv">
                                                <span id="movieDuration">${xx.duration}</span>
                                                <span id="rating">18</span>
                                                <span id="genre">${xx.genre[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `   
                                seco[seco.length-1].innerHTML += se
                        }   
                    }
                    if (select_category.value == "Upcoming Movie") {
                        for (let m = 0; m < y.upcomingMovies.length; m++) {
                            let xx = y.upcomingMovies[m]

                            if (m % 2 == 0) {
                                availableMovieInCinemaSect.innerHTML += 
                                ` 
                                    <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                        <div id="aMovieInfoConCol1" class="col-lg ">
                                            <div id="mainMovieInfoDiv">
                                                <div id="image" style="background-image: url('${xx.poster}');">

                                                </div>
                                                <div id="notes">
                                                    <div id="moviNaDiv">
                                                        <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                    </div>
                                                    <div id="whatMoviesIsAbout">
                                                        ${ShowSmallText(xx.description)}
                                                    </div>
                                                    <div id="showtimesDiv">
                                                        <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                    </div>
                                                    <div id="timeAndGenreDiv">
                                                        <span id="movieDuration">${xx.duration}</span>
                                                        <span id="rating">18</span>
                                                        <span id="genre">${xx.genre[0]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>                         
                                `
                                continue;
                            }
                            let seco = document.querySelectorAll('#aMovieInfoConRow')
                            let se =    `
                                <div id="aMovieInfoConCol2" class="col-lg ">
                                    <div id="mainMovieInfoDiv">
                                        <div id="image" style="background-image: url('${xx.poster}');">

                                        </div>
                                        <div id="notes">
                                            <div id="moviNaDiv">
                                                <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                            </div>
                                            <div id="whatMoviesIsAbout">
                                                ${ShowSmallText(xx.description)}
                                            </div>
                                            <div id="showtimesDiv">
                                                <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                            </div>
                                            <div id="timeAndGenreDiv">
                                                <span id="movieDuration">${xx.duration}</span>
                                                <span id="rating">18</span>
                                                <span id="genre">${xx.genre[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `   
                                seco[seco.length-1].innerHTML += se
                        }   
                    }
                }
            }
        }
    }
}
function Cinema(params) {
    let current = new Date()
    let select_state = document.getElementById('sta')
    let select_cinema = document.getElementById('cini')
    let select_category = document.getElementById('cate')
    let availableMovieInCinemaSect = document.getElementById('availableMovieInCinemaSect')
    availableMovieInCinemaSect.innerHTML = ""
    for (let i = 0; i < cinemaJson.length; i++) {
        let z = cinemaJson[i]
        if (z.state == select_state.value) {
            for (let j = 0; j < z.cinema.length; j++) {
                let y = z.cinema[j]
                if (y.name == select_cinema.value) {
                    y.nowShowing = []
                    y.upcomingMovies = []
                    for (let k = 0; k < y.movies.length; k++) {
                        let x = y.movies[k]
                        if (new Date(x.date).getTime() < current.getTime()) {
                            y.nowShowing.push(x)
                        }
                        if (new Date(x.date).getTime() > current.getTime()) {
                            y.upcomingMovies.push(x)
                        }    
                    }
                    if (select_category.value == "Now Showing") {
                        
                        for (let m = 0; m < y.nowShowing.length; m++) {
                        let xx = y.nowShowing[m]

                        if (m % 2 == 0) {
                            availableMovieInCinemaSect.innerHTML += 
                            ` 
                                <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                    <div id="aMovieInfoConCol1" class="col-lg ">
                                        <div id="mainMovieInfoDiv">
                                            <div id="image" style="background-image: url('${xx.poster}');">

                                            </div>
                                            <div id="notes">
                                                <div id="moviNaDiv">
                                                    <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                </div>
                                                <div id="whatMoviesIsAbout">
                                                    ${ShowSmallText(xx.description)}
                                                </div>
                                                <div id="showtimesDiv">
                                                    <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                </div>
                                                <div id="timeAndGenreDiv">
                                                    <span id="movieDuration">${xx.duration}</span>
                                                    <span id="rating">18</span>
                                                    <span id="genre">${xx.genre[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>                         
                            `
                            continue;
                        }
                        let seco = document.querySelectorAll('#aMovieInfoConRow')
                        let se =    `
                            <div id="aMovieInfoConCol2" class="col-lg ">
                                <div id="mainMovieInfoDiv">
                                    <div id="image" style="background-image: url('${xx.poster}');">

                                    </div>
                                    <div id="notes">
                                        <div id="moviNaDiv">
                                            <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                        </div>
                                        <div id="whatMoviesIsAbout">
                                            ${ShowSmallText(xx.description)}
                                        </div>
                                        <div id="showtimesDiv">
                                            <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                        </div>
                                        <div id="timeAndGenreDiv">
                                            <span id="movieDuration">${xx.duration}</span>
                                            <span id="rating">18</span>
                                            <span id="genre">${xx.genre[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `   
                            seco[seco.length-1].innerHTML += se
                    }   
                }
                if (select_category.value == "Upcoming Movie") {
                    for (let m = 0; m < y.upcomingMovies.length; m++) {
                        let xx = y.upcomingMovies[m]

                        if (m % 2 == 0) {
                            availableMovieInCinemaSect.innerHTML += 
                            ` 
                                <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                    <div id="aMovieInfoConCol1" class="col-lg ">
                                        <div id="mainMovieInfoDiv">
                                            <div id="image" style="background-image: url('${xx.poster}');">

                                            </div>
                                            <div id="notes">
                                                <div id="moviNaDiv">
                                                    <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                </div>
                                                <div id="whatMoviesIsAbout">
                                                    ${ShowSmallText(xx.description)}
                                                </div>
                                                <div id="showtimesDiv">
                                                    <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                </div>
                                                <div id="timeAndGenreDiv">
                                                    <span id="movieDuration">${xx.duration}</span>
                                                    <span id="rating">18</span>
                                                    <span id="genre">${xx.genre[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>                         
                            `
                            continue;
                        }
                        let seco = document.querySelectorAll('#aMovieInfoConRow')
                        let se =    `
                            <div id="aMovieInfoConCol2" class="col-lg ">
                                <div id="mainMovieInfoDiv">
                                    <div id="image" style="background-image: url('${xx.poster}');">

                                    </div>
                                    <div id="notes">
                                        <div id="moviNaDiv">
                                            <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                        </div>
                                        <div id="whatMoviesIsAbout">
                                            ${ShowSmallText(xx.description)}
                                        </div>
                                        <div id="showtimesDiv">
                                            <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                        </div>
                                        <div id="timeAndGenreDiv">
                                            <span id="movieDuration">${xx.duration}</span>
                                            <span id="rating">18</span>
                                            <span id="genre">${xx.genre[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `   
                            seco[seco.length-1].innerHTML += se
                    }   
                }   
                }
            }
        }
    }
    
}
function Category(params) {
    let current = new Date()
    let select_state = document.getElementById('sta')
    let select_cinema = document.getElementById('cini')
    let select_category = document.getElementById('cate')
    let availableMovieInCinemaSect = document.getElementById('availableMovieInCinemaSect')
    availableMovieInCinemaSect.innerHTML = ""
    for (let i = 0; i < cinemaJson.length; i++) {
        let z = cinemaJson[i]
        if (z.state == select_state.value) {
            for (let j = 0; j < z.cinema.length; j++) {
                let y = z.cinema[j]
                if (y.name == select_cinema.value) {
                    y.nowShowing = []
                    y.upcomingMovies = []
                    for (let k = 0; k < y.movies.length; k++) {
                        let x = y.movies[k]
                        if (new Date(x.date).getTime() < current.getTime()) {
                            y.nowShowing.push(x)
                        }
                        if (new Date(x.date).getTime() > current.getTime()) {
                            y.upcomingMovies.push(x)
                        }    
                    }
                    if (select_category.value == "Now Showing") {
                        
                            for (let m = 0; m < y.nowShowing.length; m++) {
                            let xx = y.nowShowing[m]

                            if (m % 2 == 0) {
                                availableMovieInCinemaSect.innerHTML += 
                                ` 
                                    <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                        <div id="aMovieInfoConCol1" class="col-lg ">
                                            <div id="mainMovieInfoDiv">
                                                <div id="image" style="background-image: url('${xx.poster}');">

                                                </div>
                                                <div id="notes">
                                                    <div id="moviNaDiv">
                                                        <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                    </div>
                                                    <div id="whatMoviesIsAbout">
                                                        ${ShowSmallText(xx.description)}
                                                    </div>
                                                    <div id="showtimesDiv">
                                                        <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                    </div>
                                                    <div id="timeAndGenreDiv">
                                                        <span id="movieDuration">${xx.duration}</span>
                                                        <span id="rating">18</span>
                                                        <span id="genre">${xx.genre[0]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>                         
                                `
                                continue;
                            }
                            let seco = document.querySelectorAll('#aMovieInfoConRow')
                            let se =    `
                                <div id="aMovieInfoConCol2" class="col-lg ">
                                    <div id="mainMovieInfoDiv">
                                        <div id="image" style="background-image: url('${xx.poster}');">

                                        </div>
                                        <div id="notes">
                                            <div id="moviNaDiv">
                                                <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                            </div>
                                            <div id="whatMoviesIsAbout">
                                                ${ShowSmallText(xx.description)}
                                            </div>
                                            <div id="showtimesDiv">
                                                <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                            </div>
                                            <div id="timeAndGenreDiv">
                                                <span id="movieDuration">${xx.duration}</span>
                                                <span id="rating">18</span>
                                                <span id="genre">${xx.genre[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `   
                                seco[seco.length-1].innerHTML += se
                        }   
                    }
                    if (select_category.value == "Upcoming Movie") {
                        for (let m = 0; m < y.upcomingMovies.length; m++) {
                            let xx = y.upcomingMovies[m]

                            if (m % 2 == 0) {
                                availableMovieInCinemaSect.innerHTML += 
                                ` 
                                    <div id="aMovieInfoConRow" class="row mr-0 ml-0">
                                        <div id="aMovieInfoConCol1" class="col-lg ">
                                            <div id="mainMovieInfoDiv">
                                                <div id="image" style="background-image: url('${xx.poster}');">

                                                </div>
                                                <div id="notes">
                                                    <div id="moviNaDiv">
                                                        <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                                    </div>
                                                    <div id="whatMoviesIsAbout">
                                                        ${ShowSmallText(xx.description)}
                                                    </div>
                                                    <div id="showtimesDiv">
                                                        <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                                    </div>
                                                    <div id="timeAndGenreDiv">
                                                        <span id="movieDuration">${xx.duration}</span>
                                                        <span id="rating">18</span>
                                                        <span id="genre">${xx.genre[0]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>                         
                                `
                                continue;
                            }
                            let seco = document.querySelectorAll('#aMovieInfoConRow')
                            let se =    `
                                <div id="aMovieInfoConCol2" class="col-lg ">
                                    <div id="mainMovieInfoDiv">
                                        <div id="image" style="background-image: url('${xx.poster}');">

                                        </div>
                                        <div id="notes">
                                            <div id="moviNaDiv">
                                                <h3 id="moviNa" class="mb-1">${xx.name}</h3>
                                            </div>
                                            <div id="whatMoviesIsAbout">
                                                ${ShowSmallText(xx.description)}
                                            </div>
                                            <div id="showtimesDiv">
                                                <button id="showtimesBtn" onclick="CollectMovieInfo(event)" class="btn myBtn mt-2">Showtimes <i class="fa fa-caret-right"></i></button>
                                            </div>
                                            <div id="timeAndGenreDiv">
                                                <span id="movieDuration">${xx.duration}</span>
                                                <span id="rating">18</span>
                                                <span id="genre">${xx.genre[0]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `   
                                seco[seco.length-1].innerHTML += se
                        }   
                    }
                }
            }
        }
    }
}
function CollectMovieInfo(e) {
    let selectedMovieName = e.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerHTML;
    let selectedStateName = document.getElementById('sta').value;
    let selectedCinemaName = document.getElementById('cini').value
    for (let i = 0; i < cinemaJson.length; i++) {
        let z = cinemaJson[i]
        if (z.state == selectedStateName) {
            for (let j = 0; j < z.cinema.length; j++) {
                let y = z.cinema[j]
                if (y.name == selectedCinemaName) {
                    for (let k = 0; k < y.movies.length; k++) {
                        let x = y.movies[k]
                        if (x.name == selectedMovieName) {
                            localStorage.setItem("SelectedMovie", JSON.stringify(x))
                            localStorage.setItem('State', z.state)
                            localStorage.setItem('Cinema', y.name)
                            localStorage.setItem('NoOfSeatInCinema', y.noOfSeat)
                            window.location.href = "./Movie.html"
                        }
                    }
                }
            }
        }
    }
}
function ShowSmallText(params) {
    let split = params.split("")
    let shortenedText = ""
    for (let i = 0; i < split.length; i++) {
        if (i >= 120) {
            shortenedText += '...'
            break;
        }
        shortenedText += split[i]
    }
    return shortenedText
}
function SetGenre(params) {
    let allGenre = ""
    for (let i = 0; i < storedMovie.genre.length; i++) {
        let a = storedMovie.genre[i]
        allGenre += a
        if (i != storedMovie.genre.length-1) {
            allGenre += ", "
        }
    }
    return allGenre
}
Cinema()
Selec()