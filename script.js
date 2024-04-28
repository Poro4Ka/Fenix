function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
 function openVKChat() { 
    var chatWindow = window.open('https://vk.com/im?sel=-173135044', '_blank', 'width=400,height=600,toolbar=no,location=no,status=no,menubar=no'); 
    chatWindow.addEventListener('beforeunload', function (event) {
        event.returnValue = 'Are you sure you want to leave?';
        return null;
    });
  } 
  document.addEventListener('click', function(event) {
    if (event.target.id === 'membershipLink') {
        openPaymentModal();
    }
});
