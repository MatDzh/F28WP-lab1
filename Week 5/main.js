var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', "repo link");
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.response);
    console.log(ourData[0])
  };
  ourRequest.send();
})


