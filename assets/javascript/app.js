//Timer
// This code will run as soon as the page loads
// window.onload = function() {
//     $("#lap").on("click", recordLap);
//     $("#stop").on("click", stop);
//     $("#reset").on("click", reset);
//     $("#start").on("click", start);
// };
  
//  after 120 seconds, execute the timeUp function
setTimeout(timeUp, 1000 * 10);
  

function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    // $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
    alert("Times UP!")

    // The following line will play the audio file we linked to above:
    // audio.play();
}
//true and false
//Start Button