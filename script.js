function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";

    //10% charge case 
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
      }, 1000);

      //25%charge case
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);

      //50% charge case 
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);

      //100% charge case
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);