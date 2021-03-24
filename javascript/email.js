 (function () {
     emailjs.init('user_H2qPQ4kLOaXHKL5q6lamG');
 })();


 window.onload = function () {
     document.getElementById('contact-form').addEventListener('submit', function (event) {
         event.preventDefault();
         // generate a five digit number for the contact_number variable
         this.contact_number.value = Math.random() * 100000 | 0;
         // these IDs from the previous steps
         emailjs.sendForm('service_01u1n9g', 'template_rab8k5h', this)
             .then(function () {
                 alert("Jūsų žinutė buvo išsiųsta.");
                 document.getElementById("contact-form").reset();
             }, function (error) {
                 alert("Nepavyko išsiųsti žinutės");
             });
     });
 }
