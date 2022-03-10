( ($)=>{

    /// print code
        document.getElementById("btnPrint").onclick = 
        function() {
            printElementt(document.getElementById("printThis"))
        }
        function printElementt(params) {
            var domClone = params.cloneNode(true)

            var $printSection = document.getElementById("printSection")
                if (!$printSection) {
                var $printSection = document.createElement("div")
                $printSection.id = "printSection";
                document.body.appendChild($printSection)
            }
            $printSection.innerHTML = ""
            $printSection.appendChild(domClone)
            window.print()
        }
//////////
        let SEATS = ""
        let NOOFSEAT = 0
        let seatArr = []
       $('#mov_Name').html(JSON.parse(localStorage.getItem('SelectedMovie')).name)
       let cini_location = localStorage.getItem('State') +  " - " + localStorage.getItem('Cinema')
       let mov_Date = localStorage.getItem('DateSelected') + " - " + localStorage.getItem('TimeSelected')
       $('#cini_location').html(cini_location.toUpperCase())
       $('#mov_Date').html(localStorage.getItem('DateSelected').toUpperCase())
       $('#selected_Showtime').html(localStorage.getItem('TimeSelected').toUpperCase())
       $('#movie_Banner').css("background-image", 'url(' + "'" + JSON.parse(localStorage.getItem("SelectedMovie")).Banner + "'" + ')')
    function Seat(params) {
        let noOfSeats = localStorage.getItem('NoOfSeatInCinema') 
        let seatDiv = document.getElementById('seatDiv')
        
        for (let i = 0; i < cinemaJson.length; i++) {
            let z = cinemaJson[i]
            if (z.state == localStorage.getItem('State')) {
                for (let j = 0; j < z.cinema.length; j++) {
                    let y = z.cinema[j]
                    if (y.name == localStorage.getItem('Cinema')) {
                        for (let k = 1; k <= y.noOfSeat; k++) {
                            let x = k
                            let seatAvail = true
                            console.log('ads');
                            if (y.pickedSeat.length != 0) {
                                for (let m = 0; m < y.pickedSeat.length; m++) {
                                    console.log('df');
                                    if (y.pickedSeat[m] == k) {
                                        seatAvail = false
                                        seatDiv.innerHTML += `<button disabled id="seatNo">${k}</button>`
                                        
                                    }
                                    if (m == y.pickedSeat.length - 1 && seatAvail == true) {
                                        seatDiv.innerHTML += `<button id="seatNo">${k}</button>`
                                    }
                                } 
                            }
                            else{
                                seatDiv.innerHTML += `<button id="seatNo">${k}</button>`
                            }          
                        }
                    }
                }
            }
        }
        
    }
    function DisableUnavailableSeat(params) {
        
    }
    
    function ChooseSeatNo(params, param2) {
        if (param2 == "add") {
            seatArr.push(params)
            console.log("the seat no are " + seatArr);
            
            SEATS += params + " "
            $('#yourSeatNo').html("NO " + seatArr)
            for (let i = 0; i < cinemaJson.length; i++) {
                let z = cinemaJson[i]
                if (z.state == localStorage.getItem('State')) {
                    for (let j = 0; j < z.cinema.length; j++) {
                        let y = z.cinema[j]
                        if (y.name == localStorage.getItem('Cinema')) {
                            y.pickedSeat.push(params)
                            console.log(y.pickedSeat);
                        }
                    }
                }
            }
        }
        if (param2 == "remove") {
            seatArr.splice(seatArr.indexOf(params), 1)
            $('#yourSeatNo').html("NO " + seatArr)
            for (let i = 0; i < cinemaJson.length; i++) {
                let z = cinemaJson[i]
                if (z.state == localStorage.getItem('State')) {
                    for (let j = 0; j < z.cinema.length; j++) {
                        let y = z.cinema[j]
                        if (y.name == localStorage.getItem('Cinema')) {
                            y.pickedSeat.splice(y.pickedSeat.indexOf(params), 1)
                            console.log(y.pickedSeat);
                        }
                    }
                }
            }
        }
        
    }
    $('#nextStep').click(function(){
        ShowNextForm($('#stppp').html(), $('.guest').html())
    })
    function ShowNextForm(step, check) {
        console.log(step, check);
        if (check == "0") {
            console.log('re');
            $('#formError').css({display: "block"})
            return
        }
        if (step == "STEP 1") {
            console.log('aa');
            let a = `<div id="pickSectCon" class="bg-light">
                        <h2 class="text-center">Pick Seat(s)</h2>
                        <div class="d-flex justify-content-around">
                            <div class="d-flex">
                                <p id="availColor"></p>
                                <span>Available</span>
                            </div>
                            <div class="d-flex">
                                <p id="unavailColor"></p>
                                <span>Unavailable</span>
                            </div>
                            <div class="d-flex">
                                <p id="yaSeat"></p>
                                <span>Your Seat</span>
                            </div>
                        </div>
                        <div id="seatDiv" class="">
                        </div>
                    </div>
            `
            $('#tpp').html(a)
            $('#stppp').html("STEP 2")
            $('#formError').css({display: "none"})
            Seat()
            $('button#seatNo').unbind('click').click(function() {
                
                if (NOOFSEAT >= $('#total_guest').html()) {
                    return
                }
                if ($(this).css("background-color") == "rgb(2, 48, 71)") {
                    NOOFSEAT--
                    $(this).css({backgroundColor: '#219EBC', color: "black"})
                    ChooseSeatNo($(this).html(), "remove")
                    return
                } 
                if ($(this).css("background-color") != "rgb(2, 48, 71)") {
                    NOOFSEAT++
                    $(this).css({backgroundColor: '#023047', color: "white"});
                    ChooseSeatNo($(this).html(), "add")
                    return
                }
                
            })
            // return
        }
        if (step == "STEP 2") {
            if (seatArr.length != $('#total_guest').html()) {
                $('#formError').css({display: "block"})
                
                $('#formError').children().html("Please select " +$('#total_guest').html() + "seats")
                return
            }
            for (let i = 0; i < seatArr.length; i++) {
                let a = `
                <div class="ticketCon" style="background-image: url('../Images/8-88499_movie-roll-clip-art.png'); background-position: center; background-repeat: no-repeat; background-size: contain;">
                    <div id="primary">
                        <div>
                            <h3>CINEMA TICKET</h3>
                        </div>
                        <div id="tic_Infi" class="pb-2">
                            <div>
                                <p><b>Date:</b>${localStorage.getItem('DateSelected')}</p>
                                <p><b>Time:</b>${localStorage.getItem('TimeSelected')}</p>
                                <p><b>Seat No:</b>${seatArr[i]}</p>
                            </div>
                        </div>
                    </div>
                    <div id="secondary">
                        <div>
                            <h3>ADMIT ONE</h3>
                        </div>
                        <div>
                            <h6>Movie Ticket</h6>
                        </div>
                        <div id="barcodeDiv">
                            <i class="fa fa-barcode"></i>
                            <p></p>
                        </div>
                    </div>
                </div>
                `
                document.getElementById('modal_body').innerHTML += a   
            }
            
            $('#myModal').modal('show')
        }
        
        
    }
        
        $('._BTNP').click(function() {
            let noOfGuest = 0
            $(this).parent().siblings('#lBtnDiv').children().removeAttr('disabled')
            $(this).parent().siblings('#tic_quan').children().html(parseInt($(this).parent().siblings('#tic_quan').children().html()) +1)
            // $(this).parents('#oRallTicQanCon').siblings('#sub_toDiv').children().html($(this).parent().siblings('#tic_quan').children().html() * $(this).parents('#oRallTicQanCon').siblings('#pr').children('span:nth-child(2)').html())
            $('.guest').each(function() {
                noOfGuest += parseInt($(this).html())
                $('#total_guest').html(noOfGuest)   
                $('#overTotalAmount').html($('#total_guest').html() * $('#pr_pr').html())
            });
            if ($(this).parent().siblings('#tic_quan').children().html() >= 5) {
                $(this).attr('disabled', 'true')
            }
        })
        $('._BTNM').click(function() {
            let noOfGuest = 0
            if ($(this).parent().siblings('#rBtnDiv').children().attr('disabled')) {
                $(this).parent().siblings('#rBtnDiv').children().removeAttr('disabled')
            }
            $(this).parent().siblings('#tic_quan').children().html(parseInt($(this).parent().siblings('#tic_quan').children().html()) -1)
            // $(this).parents('#oRallTicQanCon').siblings('#sub_toDiv').children().html($(this).parent().siblings('#tic_quan').children().html() * $(this).parents('#oRallTicQanCon').siblings('#pr').children('span:nth-child(2)').html())
            $('.guest').each(function() {
                noOfGuest += parseInt($(this).html())
                $('#total_guest').html(noOfGuest)
                $('#overTotalAmount').html($('#total_guest').html() * $('#pr_pr').html()) 
            });
            if ($(this).parent().siblings('#tic_quan').children().html() <= 0) {
                $(this).attr('disabled', 'true')
            }
        })
    })(jQuery)