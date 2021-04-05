document.addEventListener('click', (e) => {

    if (e.target.className === "btn") {

        let button_name = e.target.innerText;
        let audio = document.getElementById(button_name);

        stop_audio();
        audio.play();
    }
})

function stop_audio() {

    let audios = document.querySelectorAll("audio");
    audios.forEach(audio => {

        audio.pause();
        audio.currentTime = 0;

    });

}
