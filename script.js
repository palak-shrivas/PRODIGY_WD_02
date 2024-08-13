window.onload = function () {
    let min = '00';
    let sec = '00';
    let msec = '00';
    let appendMin = document.querySelector('#min')
    let appendSec = document.querySelector('#sec')
    let appendMsec = document.querySelector('#msec')
    let startBtn = document.querySelector('#start')
    let resetBtn = document.querySelector('#reset')
    let pauseBtn = document.querySelector('#pause')
    let lapBtn = document.querySelector('#lap')
    let lapsDiv = document.querySelector('.laps')
    let laps = ``
    let lapCount = 0
    let interval;

    startBtn.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    pauseBtn.addEventListener('click', () => {
        clearInterval(interval);
    })

    lapBtn.addEventListener('click', () => {
        lapCount ++
        laps += `<div class="lap">
                    <p>
                        <span>Lap-${lapCount}</span>
                        <span> ${appendMin.textContent}:</span>
                        <span>${appendSec.textContent}:</span>
                        <span>${appendMsec.textContent}</span>
                    </p>
                </div>`
        
        lapsDiv.innerHTML = laps;
    })


    resetBtn.addEventListener('click', () => {
        clearInterval(interval);
        laps = ''
        lapCount = 0
        msec = '00';
        sec = '00';
        min = '00';
        appendSec.innerHTML = sec;
        appendMsec.innerHTML = msec;
        appendMin.innerHTML = min;
        lapsDiv.innerHTML = laps
    })


    function startTimer(){
        msec++;
        if(msec <= 9){
            appendMsec.innerHTML = '0' + msec;
        }
        if(msec > 9){
            appendMsec.innerHTML = msec;
        }
        if(msec > 99){
            sec++;
            appendSec.innerHTML = '0' + sec;
            msec = 0;
            appendMsec.innerHTML = '0' + 0;
        }
        if(sec > 9){
            appendSec.innerHTML = sec;
        }
        if(sec > 59){
            min++;
            appendMin.innerHTML = '0' + min;
            sec = 0;
            appendSec.innerHTML = '0' + 0;
        }
        if(min > 9){
            appendSec.innerHTML = min;
        }
    }
}