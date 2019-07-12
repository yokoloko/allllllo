 const allocine = require('allocine-api');

const coordinates = [
    [49.62286,2.36416],
    [47.94363,-1.94248],
    [48.35411,1.39736], 
    [48.41248,6.05556],
    [46.14717,-0.18467],
    [46.45078,2.71572],
    [46.81290,5.26455],
    [44.97807,0.43056],
    [44.91586,2.97939],
    [44.85359,5.35244],
    [43.21084,1.83681],
    [46.7738796, 2.3915233]
];

// Informations sur un film particulier
coordinates.forEach(coordinate => {
    allocine.api('showtimelist', {movie: '272929', lat: coordinate[0], long:coordinate[1], radius:10000}, function(error, result) {
        result.feed.theaterShowtimes.forEach(element => {
            // console.log(element);
            element.movieShowtimes.forEach(s => s.scr.forEach(c => c.t.forEach(t => console.log(`${element.place.theater.postalCode},${c.d},${t.$}`))));
        });
    });
});
