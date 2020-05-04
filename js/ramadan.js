function getTodayDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return {dd, mm, yyyy};
}

function httpGet(theUrl) {
    fetch(theUrl).then(function(response) {
        let a = response;
        return response;
    }).then(function(data) {
        console.log(data);
    }).catch(function() {
        console.log("Booo");
    });
}

let {dd, mm, yyyy} = getTodayDate();

let ramadanApi = " shogan.herokuapp.com/ramadan"

today = mm + '/' + dd + '/' + yyyy;
// Set the date we're counting down to
let countDownDate = new Date(mm + " " + dd + ", " + yyyy + httpGet(ramadanApi) + ":00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);