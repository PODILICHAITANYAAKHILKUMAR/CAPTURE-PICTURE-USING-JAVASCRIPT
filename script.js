Webcam.set({
    width:780,
    height:720,
    image_format: 'jpeg',
    jpeg_quality:  100    
    });
    Webcam.attach('#camera');
    takeSnapShot = function() {
        Webcam.snap(function(data_uri) {
        document.getElementById('snapShot').innerHTML = 
        '<img src=" ' +data_uri+' " width="400" height="400">';
        })
    }
