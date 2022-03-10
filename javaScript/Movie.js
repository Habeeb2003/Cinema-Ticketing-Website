( ($)=>{

    let storedMovie = JSON.parse(localStorage.getItem('SelectedMovie'))
    function That(params) {
        console.log(params);
    }
    function GetAndSetMovieInfo(params) {      
        let trailerSect = document.getElementById('trailerSect')
        let movie_infoSect = document.getElementById('movie_infoSect')
        let allShow_timesDiv = document.getElementById('allShow_timesDiv')
        let current = new Date()
        let trailerDiv = 
        `
        <div id="trailerDiv">
            ${storedMovie.trailer}
        </div> 
        `
        let movie_infoDiv = 
        `
        <div id="imageBg" class="col-4">
                <div id="bbg" style="background-image: url('${storedMovie.poster}');">

                </div>
            </div>
            <div id="movie_infoDiv" class="col-8">
                <div id="movieTitle">
                    <h1>${storedMovie.name}</h1>
                </div>
                <div id="movieDescription">
                    <p>
                        ${storedMovie.description}
                    </p>
                </div>
                <div id="extraDetails">
                    <p><b>Duration: </b>${storedMovie.duration}</p>
                    <p><b>Genre: </b>${SetGenre()}</p>
                    <p><b>Rating: </b>18</p>
                    <p><b>Released Date: </b>${storedMovie.releaseDate}</p>
                </div>
            </div>
        `
        trailerSect.innerHTML += trailerDiv
        movie_infoSect.innerHTML += movie_infoDiv
        for (let i = 0; i < storedMovie.showTimes.length; i++) {
            let a = storedMovie.showTimes[i]
            let show_timeTime = `<div id="show_timeTime">`
            for (let j = 0; j < a.realTime.length; j++) {
                let show_time
                let show_timeDate
                let show_timeDiv = `<div id="show_timeDiv">`
                if (new Date(a.realTime[j]).getTime() > current.getTime()) {
                    console.log(new Date(a.realTime[j]).getTime() > current.getTime());
                    show_timeDate = `<div id="show_timeDate">
                                        <h6><b>${a.date}</b></h6>
                                     </div>
                                    `
                    show_time = `<button class="btn show_time" onclick="">${a.time[j]}</button>`
                    show_timeTime += show_time;
                    
                }
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////
                if (j == a.realTime.length -1 && new Date(a.realTime[j]).getTime() > current.getTime()) {
                    show_timeTime += `</div> `
                    show_timeDiv += show_timeDate
                    show_timeDiv += show_timeTime
                    show_timeDiv += `</div>`
                    allShow_timesDiv.innerHTML += show_timeDiv
                }
            }          
        }
        
    }
    function Bindbtn(params) {
        $('button.show_time').click(function() {
            CheckIfUserIsLoggedIn($(this).html(), $(this).parent().siblings('#show_timeDate').children().children().html())
        })
    }
    let myF = async()=>{
        GetAndSetMovieInfo()
        await Bindbtn()
    }
    myF();
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

    // SetGenre()
})(jQuery)