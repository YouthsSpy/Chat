function SendMail() {
  if(document.getElementById("mailBodyText").value == "")  return;
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'YNFDoAWm5FEa5d7kANAZsQ',
      'message': {
        'from_email': "efrat.jell@gmail.com",
        'from_name': "אפרת",
        'to': [
        {
        'email': "elikhaim@gmail.com",
        'name': 'eli',
        'type': 'to'
        }
        ],
        'autotext': 'true',
        'subject': "Message From Efrat",
        'html': document.getElementById("mailBodyText").value
      }
    }
  }).done(function(response) {
      document.getElementById("mailBodyText").value = "";
      console.log(response);
  });
}
