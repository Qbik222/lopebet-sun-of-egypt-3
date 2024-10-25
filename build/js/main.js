"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var wheelBtn = document.querySelector(".land__wheel-btn"),
    wheelSectors = document.querySelector(".land__wheel-sectors"),
    firstPopup = document.querySelector(".firstWin"),
    secondPopup = document.querySelector(".secondWin"),
    popupOverlay = document.querySelector(".popup-overlay"),
    closeFirstBtn = document.querySelector('.firstWin__btn'),
    closeSecondBtn = document.querySelector('.secondWin__btn'),
    firstBuble = document.querySelector(".firstWin__buble"),
    secondBuble = document.querySelector(".secondWin__buble"),
    coins = document.querySelectorAll(".coin");
  var spinCounter = 0;
  function showPopup(popup, overlay, hideClass, buble) {
    overlay.classList.remove(hideClass);
    popup.classList.remove(hideClass);
    if (buble) {
      buble.classList.add("showBuble");
    }
  }
  function hidePopup(popup, overlay, hideClass) {
    overlay.classList.add(hideClass);
    popup.classList.add(hideClass);
  }
  closeFirstBtn.addEventListener("click", function () {
    hidePopup(firstPopup, popupOverlay, "_opacity");
  });
  closeSecondBtn.addEventListener("click", function () {
    hidePopup(secondPopup, popupOverlay, "_opacity");
  });
  function Spin(sectors, animClass, position) {
    sectors.classList.add(animClass);
    sectors.addEventListener("animationend", function () {
      sectors.style.transform = "rotate(".concat(position, "deg)");
      sectors.classList.remove(animClass);
      if (spinCounter === 0) {
        showPopup(firstPopup, popupOverlay, "_opacity", firstBuble);
      } else {
        showPopup(secondPopup, popupOverlay, "_opacity", secondBuble);
        coins.forEach(function (coin, i) {
          setTimeout(function () {
            coin.classList.add("coinAnim");
          }, i * 400);
        });
      }
      spinCounter++;
    }, {
      once: true
    });
  }
  wheelBtn.addEventListener("click", function () {
    if (spinCounter === 0) {
      Spin(wheelSectors, "firstSpin", 2701);
    } else {
      Spin(wheelSectors, "secondSpin", 4187);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2hlZWxCdG4iLCJxdWVyeVNlbGVjdG9yIiwid2hlZWxTZWN0b3JzIiwiZmlyc3RQb3B1cCIsInNlY29uZFBvcHVwIiwicG9wdXBPdmVybGF5IiwiY2xvc2VGaXJzdEJ0biIsImNsb3NlU2Vjb25kQnRuIiwiZmlyc3RCdWJsZSIsInNlY29uZEJ1YmxlIiwiY29pbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BpbkNvdW50ZXIiLCJzaG93UG9wdXAiLCJwb3B1cCIsIm92ZXJsYXkiLCJoaWRlQ2xhc3MiLCJidWJsZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhpZGVQb3B1cCIsIlNwaW4iLCJzZWN0b3JzIiwiYW5pbUNsYXNzIiwicG9zaXRpb24iLCJzdHlsZSIsInRyYW5zZm9ybSIsImZvckVhY2giLCJjb2luIiwiaSIsInNldFRpbWVvdXQiLCJvbmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQUs7RUFDL0MsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNyREMsWUFBWSxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztJQUM3REUsVUFBVSxHQUFHTCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERHLFdBQVcsR0FBR04sUUFBUSxDQUFDRyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ2xESSxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZESyxhQUFhLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3hETSxjQUFjLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFETyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZEUSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3pEUyxLQUFLLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0VBRWhELElBQUlDLFdBQVcsR0FBRyxDQUFDO0VBRW5CLFNBQVNDLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFDO0lBQ2hERixPQUFPLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDSCxTQUFTLENBQUM7SUFDbkNGLEtBQUssQ0FBQ0ksU0FBUyxDQUFDQyxNQUFNLENBQUNILFNBQVMsQ0FBQztJQUNqQyxJQUFHQyxLQUFLLEVBQUM7TUFDTEEsS0FBSyxDQUFDQyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDcEM7RUFFSjtFQUNBLFNBQVNDLFNBQVMsQ0FBQ1AsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBQztJQUN6Q0QsT0FBTyxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQ0osU0FBUyxDQUFDO0lBQ2hDRixLQUFLLENBQUNJLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDSixTQUFTLENBQUM7RUFDbEM7RUFHQVYsYUFBYSxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUN6Q3NCLFNBQVMsQ0FBQ2xCLFVBQVUsRUFBRUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUNuRCxDQUFDLENBQUM7RUFDRkUsY0FBYyxDQUFDUixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUMxQ3NCLFNBQVMsQ0FBQ2pCLFdBQVcsRUFBRUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUNwRCxDQUFDLENBQUM7RUFFRixTQUFTaUIsSUFBSSxDQUFDQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFDO0lBQ3ZDRixPQUFPLENBQUNMLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDSSxTQUFTLENBQUM7SUFDaENELE9BQU8sQ0FBQ3hCLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFLO01BQzFDd0IsT0FBTyxDQUFDRyxLQUFLLENBQUNDLFNBQVMsb0JBQWFGLFFBQVEsU0FBTTtNQUNsREYsT0FBTyxDQUFDTCxTQUFTLENBQUNDLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDO01BQ25DLElBQUdaLFdBQVcsS0FBSyxDQUFDLEVBQUM7UUFDakJDLFNBQVMsQ0FBQ1YsVUFBVSxFQUFFRSxZQUFZLEVBQUUsVUFBVSxFQUFFRyxVQUFVLENBQUM7TUFDL0QsQ0FBQyxNQUFJO1FBQ0RLLFNBQVMsQ0FBQ1QsV0FBVyxFQUFFQyxZQUFZLEVBQUUsVUFBVSxFQUFFSSxXQUFXLENBQUM7UUFDN0RDLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSTtVQUN0QkMsVUFBVSxDQUFDLFlBQUs7WUFDWkYsSUFBSSxDQUFDWCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUM7VUFDbEMsQ0FBQyxFQUFFVSxDQUFDLEdBQUMsR0FBRyxDQUFFO1FBQ2QsQ0FBQyxDQUFDO01BRU47TUFDQWxCLFdBQVcsRUFBRTtJQUNqQixDQUFDLEVBQUU7TUFBQ29CLElBQUksRUFBRTtJQUFJLENBQUMsQ0FBQztFQUNwQjtFQUVBaEMsUUFBUSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNwQyxJQUFHYSxXQUFXLEtBQUssQ0FBQyxFQUFDO01BQ2pCVSxJQUFJLENBQUNwQixZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQztJQUN6QyxDQUFDLE1BQUs7TUFDRm9CLElBQUksQ0FBQ3BCLFlBQVksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQzFDO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgICBjb25zdCB3aGVlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtYnRuXCIpLFxuICAgICAgICAgIHdoZWVsU2VjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtc2VjdG9yc1wiKSxcbiAgICAgICAgICBmaXJzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdFdpblwiKSxcbiAgICAgICAgICBzZWNvbmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kV2luXCIpLFxuICAgICAgICAgIHBvcHVwT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtb3ZlcmxheVwiKSxcbiAgICAgICAgICBjbG9zZUZpcnN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0V2luX19idG4nKSxcbiAgICAgICAgICBjbG9zZVNlY29uZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRXaW5fX2J0bicpLFxuICAgICAgICAgIGZpcnN0QnVibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0V2luX19idWJsZVwiKSxcbiAgICAgICAgICBzZWNvbmRCdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kV2luX19idWJsZVwiKSxcbiAgICAgICAgICBjb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29pblwiKVxuXG4gICAgbGV0IHNwaW5Db3VudGVyID0gMFxuXG4gICAgZnVuY3Rpb24gc2hvd1BvcHVwKHBvcHVwLCBvdmVybGF5LCBoaWRlQ2xhc3MsIGJ1YmxlKXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKGhpZGVDbGFzcylcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShoaWRlQ2xhc3MpXG4gICAgICAgIGlmKGJ1YmxlKXtcbiAgICAgICAgICAgIGJ1YmxlLmNsYXNzTGlzdC5hZGQoXCJzaG93QnVibGVcIilcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpZGVQb3B1cChwb3B1cCwgb3ZlcmxheSwgaGlkZUNsYXNzKXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKGhpZGVDbGFzcylcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChoaWRlQ2xhc3MpXG4gICAgfVxuXG5cbiAgICBjbG9zZUZpcnN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaGlkZVBvcHVwKGZpcnN0UG9wdXAsIHBvcHVwT3ZlcmxheSwgXCJfb3BhY2l0eVwiKVxuICAgIH0pXG4gICAgY2xvc2VTZWNvbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBoaWRlUG9wdXAoc2Vjb25kUG9wdXAsIHBvcHVwT3ZlcmxheSwgXCJfb3BhY2l0eVwiKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBTcGluKHNlY3RvcnMsIGFuaW1DbGFzcywgcG9zaXRpb24pe1xuICAgICAgICBzZWN0b3JzLmNsYXNzTGlzdC5hZGQoYW5pbUNsYXNzKVxuICAgICAgICBzZWN0b3JzLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG4gICAgICAgICAgICBzZWN0b3JzLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtwb3NpdGlvbn1kZWcpYFxuICAgICAgICAgICAgc2VjdG9ycy5jbGFzc0xpc3QucmVtb3ZlKGFuaW1DbGFzcylcbiAgICAgICAgICAgIGlmKHNwaW5Db3VudGVyID09PSAwKXtcbiAgICAgICAgICAgICAgICBzaG93UG9wdXAoZmlyc3RQb3B1cCwgcG9wdXBPdmVybGF5LCBcIl9vcGFjaXR5XCIsIGZpcnN0QnVibGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzaG93UG9wdXAoc2Vjb25kUG9wdXAsIHBvcHVwT3ZlcmxheSwgXCJfb3BhY2l0eVwiLCBzZWNvbmRCdWJsZSlcbiAgICAgICAgICAgICAgICBjb2lucy5mb3JFYWNoKChjb2luLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uY2xhc3NMaXN0LmFkZChcImNvaW5BbmltXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sIGkqNDAwIClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGluQ291bnRlcisrXG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICB3aGVlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHNwaW5Db3VudGVyID09PSAwKXtcbiAgICAgICAgICAgIFNwaW4od2hlZWxTZWN0b3JzLCBcImZpcnN0U3BpblwiLCAyNzAxKVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBTcGluKHdoZWVsU2VjdG9ycywgXCJzZWNvbmRTcGluXCIsIDQxODcpXG4gICAgICAgIH1cbiAgICB9KVxuXG59KSJdfQ==
