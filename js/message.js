function ShowMyMessageTest(){
  var pass = prompt("What is my company name?");
  if (pass.toLowerCase() == "youthsspy") ShowMyMessage();
}
function ShowMyMessage(){
  var file = "/chat/message.txt";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
  }
  rawFile.send(null);
}
