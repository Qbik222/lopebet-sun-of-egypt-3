import {Howl} from "howler"

// sound init
const backgroundMusic = new Howl({
    src: ['main.mp3'],
    volume: 1.0,
    loop: true,

});
const reelSound = new Howl({
    src: ['reels.mp3'],
    volume: 1.0,
    loop: true
});

const popupSound = new Howl({
    src: ['popup.mp3'],
    volume: 1.0,
    loop: false,

});

const btnSound = new Howl({
    src: ['pressBtn.mp3'],
    volume: 1.0,
    loop: false,

});
document.addEventListener("DOMContentLoaded", () =>{
    const wheelBtn = document.querySelector(".land__wheel-btn"),
          wheelSectors = document.querySelector(".land__wheel-sectors"),
          firstPopup = document.querySelector(".firstWin"),
          secondPopup = document.querySelector(".secondWin"),
          popupOverlay = document.querySelector(".popup-overlay"),
          closeFirstBtn = document.querySelector('.firstWin__btn'),
          // closeSecondBtn = document.querySelector('.secondWin__btn'),
          firstBuble = document.querySelector(".firstWin__buble"),
          secondBuble = document.querySelector(".secondWin__buble"),
          coins = document.querySelectorAll(".coin"),
          testPopup1 = document.querySelector(".popup1"),
          testPopup2 = document.querySelector(".popup2"),
          tdsLink = document.querySelector(".tdsLink")

    let spinCounter = 0
    let popupState1 = false
    let popupState2 = false

    document.addEventListener("click", () =>{
        backgroundMusic.play();
    }, {once: true})

    testPopup1.addEventListener("click", () => {
        if (popupState2) {
            hidePopup(secondPopup, popupOverlay, "_opacity");
            popupState2 = false;
        }
        if (!popupState1) {
            showPopup(firstPopup, popupOverlay, "_opacity", firstBuble);
            popupState1 = true;
        } else {
            hidePopup(firstPopup, popupOverlay, "_opacity");
            popupState1 = false;
        }
    });

    testPopup2.addEventListener("click", () => {
        if (popupState1) {
            hidePopup(firstPopup, popupOverlay, "_opacity");
            popupState1 = false;
        }
        if (!popupState2) {
            showPopup(secondPopup, popupOverlay, "_opacity", secondBuble);
            popupState2 = true;
            coins.forEach((coin, i) => {
                setTimeout(() => {
                    coin.classList.add("coinAnim")
                }, i * 400)
            })
        } else {
            hidePopup(secondPopup, popupOverlay, "_opacity");
            popupState2 = false;
        }
    });
        function showPopup(popup, overlay, hideClass, buble) {
            overlay.classList.remove(hideClass)
            popup.classList.remove(hideClass)
            if (buble) {
                buble.classList.add("showBuble")
            }

        }

        function hidePopup(popup, overlay, hideClass) {
            overlay.classList.add(hideClass)
            popup.classList.add(hideClass)
        }


        closeFirstBtn.addEventListener("click", () => {
            hidePopup(firstPopup, popupOverlay, "_opacity")
        })
        // closeSecondBtn.addEventListener("click", () => {
        //     hidePopup(secondPopup, popupOverlay, "_opacity")
        // })

        function Spin(sectors, animClass, position) {
            sounds()
            sectors.classList.add(animClass)
            sectors.addEventListener("animationend", () => {
                sectors.style.transform = `rotate(${position}deg)`
                sectors.classList.remove(animClass)
                if (spinCounter === 0) {
                    showPopup(firstPopup, popupOverlay, "_opacity", firstBuble)
                } else {
                    showPopup(secondPopup, popupOverlay, "_opacity", secondBuble)
                    coins.forEach((coin, i) => {
                        setTimeout(() => {
                            coin.classList.add("coinAnim")
                        }, i * 400)
                    })
                    tdsLink.style.display = "block"


                }
                spinCounter++
            }, {once: true})
        }

        wheelBtn.addEventListener("click", () => {
            if (spinCounter === 0) {
                Spin(wheelSectors, "firstSpin", 2701)
            } else {
                Spin(wheelSectors, "secondSpin", 4187)

            }
        })

    // music

    function sounds(){
        function delaySound(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async function playSounds() {
            try {
                await btnSound.play();
                await delaySound(1000);
                await reelSound.play();
                await delaySound(4700);
                reelSound.pause();
                reelSound.currentTime = 0;
                await delaySound(2700);
                popupSound.play()
            } catch (error) {
                console.error("sounds play error: ", error);
            }
        })();
    }

    // tds
    (function () {
        var url = new URL(window.location.href);
        var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
        var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

        if (url.searchParams.has('redirectUrl')) {
            var redirectUrl = new URL(url.searchParams.get('redirectUrl'));

            if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
                //если ссылка в ссылка redirectUrl корректная
                localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
            }
        }

        params.forEach(function (param) {
            if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
        });

        linkParams.forEach(function (linkParam) {
            if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
        });

        window.addEventListener('click', function (e) {
            var link,
                parent = e.target.closest('a');

            if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
                return;
            }

            if (parent) {
                e.preventDefault();
                var affid = localStorage.getItem('affid');
                var cpaid = localStorage.getItem('cpaid');

                if (localStorage.getItem("redirectUrl")) {
                    link = new URL(localStorage.getItem("redirectUrl"));
                } else {
                    link = new URL(parent.href);
                    if (affid && cpaid) {
                        link.pathname = '/' + affid + '/' + cpaid;
                    }
                }

                params.forEach(function (param) {
                    if (url.searchParams.has(param)) {
                        link.searchParams.set(param, localStorage.getItem(param));
                    }
                });

                document.location.href = link;
            }
        });
    })();

})