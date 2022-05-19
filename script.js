var i = 1
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function load() {
  let theme = getCookie("theme")

  if(theme === "") {
    setCookie("theme", "red", 9999)
  }
  document.getElementById("cryosveryoriginallink").className = theme
  document.getElementById("reload").className = theme
  document.getElementById("Exit").className = theme

  let proxy = getCookie("proxy")
  if(proxy === "") {
    setCookie("proxy", "uv", 9999)
  }
    document.getElementsByClassName("cryoscoolimage")[0].src = theme + ".png"
    document.getElementById("shortcut icon").href = theme + ".png"
}

function proxy() {
  var proxy = getCookie("proxy")
  var frame = document.getElementById("frame")
  if (proxy === "wom") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      frame.src = "https://w.cryodream.dev/main/" + input.value
      frame.style.width = "100%"
      frame.style.height = "900px"
      input.style.marginTop = "-2.5%"
      input.style.left = "400px"
      input.style.position = "absolute"
      document.getElementById("reload").style.display = "block"
      document.getElementById("Exit").style.display = "block"
    } else if (input.value) {
      document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
      frame.src = "https://w.cryodream.dev/main/https://www.google.com/search?q=" + input.value
      frame.style.width = "100%"
      frame.style.height = "900px"
      input.style.marginTop = "-2.5%"
      input.style.left = "400px"
      input.style.position = "absolute"
      document.getElementById("reload").style.display = "block"
      document.getElementById("Exit").style.display = "block"
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "uv") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      frame.src = "https://u.cryodream.dev/service/" + input.value
      frame.style.width = "100%"
      frame.style.height = "900px"
      input.style.marginTop = "-2.5%"
      input.style.left = "400px"
      input.style.position = "absolute"
      document.getElementById("reload").style.display = "block"
      document.getElementById("Exit").style.display = "block"
    } else if (input.value) {
      document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
      frame.src = "https://u.cryodream.dev/service/https://www.google.com/search?q=" + input.value
      frame.style.width = "100%"
      frame.style.height = "900px"
      input.style.marginTop = "-2.5%"
      input.style.left = "400px"
      input.style.position = "absolute"
      document.getElementById("reload").style.display = "block"
      document.getElementById("Exit").style.display = "block"
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "ram") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');
    
      if(getCookie("ram-alert") !== "0") {
        if(confirm("Rammerhead does not work with the input cryosveryoriginallink above, confirm to hide this message forever"))        {
          setCookie("ram-alert", "0", 9999)
        }
      }
      
      frame.src = "https://r.cryodream.dev/"
      frame.style.width = "100%"
      frame.style.height = "900px"
      frame.style.backgroundColor = "white"
      input.style.marginTop = "-2.5%"
      input.style.left = "30.5%"
      input.style.position = "absolute"
    document.getElementById("reload").style.display = "block"
      document.getElementById("Exit").style.display = "block"
  }
}
function reload() {
  document.getElementById("frame").src = document.getElementById("frame").src
}

function exit() {
  var input = document.getElementById('cryosveryoriginallink');
  var frame = document.getElementById("frame");
  frame.src = "";
  frame.style.width = "0px"
  frame.style.height = "0px"
  input.style.marginTop = "6%"
  input.style.position = "relative"
  input.style.left = "0%"
  document.getElementById('Exit').style.display = "none"
  document.getElementById('reload').style.display = "none"
document.getElementsByClassName("cryoscoolimage")[0].style.display = "block"
}

function direct() {
  var proxy = getCookie("proxy")
  if (proxy === "wom") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "https://w.cryodream.dev/main/" + input.value
      window.location.href = link
    } else if (input.value) {
      var link = "https://w.cryodream.dev/main/https://www.google.com/search?q=" + input.value
      window.location.href = link
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "uv") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "https://u.cryodream.dev/service/" + input.value
      window.location.href = link
    } else if (input.value) {
      var link = "https://u.cryodream.dev/service/https://www.google.com/search?q=" + input.value
      window.location.href = link
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "ram") {
    var input = document.getElementById('cryosveryoriginallink');
    
      if(getCookie("ram-alert") !== "0") {
        if(confirm("Rammerhead does not work with the input cryosveryoriginallink above, confirm to hide this message forever"))        {
          setCookie("ram-alert", "0", 9999)
        }
      }
      window.location.href="https://r.cryodream.dev"
  }
}

function ab() {
  var proxy = getCookie("proxy")
  if (proxy === "wom") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "https://w.cryodream.dev/main/" + input.value
      var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "" //Any url
      })
      page.setUrl(link)
      page.open()
    } else if (input.value) {
      var link = "https://w.cryodream.dev/main/https://www.google.com/search?q=" + input.value
      var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "" //Any url
      })
      page.setUrl(link)
      page.open()
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "uv") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "https://u.cryodream.dev/service/" + input.value
      var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "" //Any url
      })
      page.setUrl(link)
      page.open()
    } else if (input.value) {
      var link = "https://u.cryodream.dev/service/https://www.google.com/search?q=" + input.value
      var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "" //Any url
      })
      page.setUrl(link)
      page.open()
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "ram") {
    var input = document.getElementById('cryosveryoriginallink');
    
      if(getCookie("ram-alert") !== "0") {
        if(confirm("Rammerhead does not work with the input cryosveryoriginallink above, confirm to hide this message forever"))        {
          setCookie("ram-alert", "0", 9999)
        }
      }
      var page = new ABC({
        "type": "blank", //Blank, blob, or overwrite
        "url": "https://r.cryodream.dev" //Any url
      })
      page.open()
  }
}