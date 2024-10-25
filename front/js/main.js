document.addEventListener("DOMContentLoaded", () =>{
    const wheelBtn = document.querySelector(".land__wheel-btn"),
          wheelSectors = document.querySelector(".land__wheel-sectors"),
          firstPopup = document.querySelector(".firstWin"),
          secondPopup = document.querySelector(".secondWin"),
          popupOverlay = document.querySelector(".popup-overlay"),
          closeFirstBtn = document.querySelector('.firstWin__btn'),
          closeSecondBtn = document.querySelector('.secondWin__btn'),
          firstBuble = document.querySelector(".firstWin__buble"),
          secondBuble = document.querySelector(".secondWin__buble"),
          coins = document.querySelectorAll(".coin"),
          testPopup1 = document.querySelector(".popup1"),
          testPopup2 = document.querySelector(".popup2")

    let spinCounter = 0
    let popupState1 = false
    let popupState2 = false

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
        closeSecondBtn.addEventListener("click", () => {
            hidePopup(secondPopup, popupOverlay, "_opacity")
        })

        function Spin(sectors, animClass, position) {
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
})