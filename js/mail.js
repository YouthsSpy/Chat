function sendMail() {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'YNFDoAWm5FEa5d7kANAZsQ',
      'message': {
        'from_email': "efrat.jell@gmail.com",
        'to': [
        {
        'email': "elikhaim@gmail.com",
        'name': 'RECIPIENT NAME (OPTIONAL)',
        'type': 'to'
        }
        ],
        'autotext': 'true',
        'subject': "Message From Efrat",
        'html': byName("body").value
      }
    }
  }).done(function(response) {
      console.log(response);
  });
}
