const main = () => {
    window.addEventListener("deviceorientation", onOrientationChange);

    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({video: {
            facingMode: 'environment'
        }})
            .then(function(signal) {
                const video = document.getElementById("myVideo");
                video.srcObject = signal;
                video.play();
            })
            .catch(function (err) {
                alert(err);
            })
    }
}

// this will only trigger on a device with an orientation sensor
const onOrientationChange = (event) => {
    let angle = event.beta - 90;
    if (angle < 0) {
        angle = 0;
    }

    const distance = document.getElementById("mySlider").value;
    document.getElementById("myLabel").innerHTML = "Distance: " + distance + " meters";
    const height = Math.tan(angle * Math.PI / 180) * distance;

    document.getElementById("heightInfo").innerHTML = height.toFixed(1) + " m (" + angle.toFixed(1) + "&deg;)";
}