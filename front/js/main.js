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
          coins = document.querySelectorAll(".coin")

    let spinCounter = 0

    function showPopup(popup, overlay, hideClass, buble){
        overlay.classList.remove(hideClass)
        popup.classList.remove(hideClass)
        if(buble){
            buble.classList.add("showBuble")
        }

    }
    function hidePopup(popup, overlay, hideClass){
        overlay.classList.add(hideClass)
        popup.classList.add(hideClass)
    }


    closeFirstBtn.addEventListener("click", () =>{
        hidePopup(firstPopup, popupOverlay, "_opacity")
    })
    closeSecondBtn.addEventListener("click", () =>{
        hidePopup(secondPopup, popupOverlay, "_opacity")
    })

    function Spin(sectors, animClass, position){
        sectors.classList.add(animClass)
        sectors.addEventListener("animationend", () =>{
            sectors.style.transform = `rotate(${position}deg)`
            sectors.classList.remove(animClass)
            if(spinCounter === 0){
                showPopup(firstPopup, popupOverlay, "_opacity", firstBuble)
            }else{
                showPopup(secondPopup, popupOverlay, "_opacity", secondBuble)
                coins.forEach((coin, i) =>{
                    setTimeout(() =>{
                        coin.classList.add("coinAnim")
                    }, i*400 )
                })

            }
            spinCounter++
        }, {once: true})
    }

    wheelBtn.addEventListener("click", () =>{
        if(spinCounter === 0){
            Spin(wheelSectors, "firstSpin", 2701)
        }else {
            Spin(wheelSectors, "secondSpin", 4187)
        }
    })

})