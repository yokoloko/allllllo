 const allocine = require('allocine-api');

// Informations sur un film particulier
allocine.api('showtimelist', {movie: '272929', lat: 46.7738796, long:2.3915233, radius:500}, function(error, result) {
    if(error) { console.log('Error : '+ error); return; }
 
    console.log('Voici les données retournées par l\'API Allociné:');
    result.feed.theaterShowtimes.forEach(element => {
        element.movieShowtimes.forEach(s => s.scr.forEach(c => c.t.forEach(t => console.log(`${element.place.theater.postalCode},${c.d},${t.$}`))));
    });
});