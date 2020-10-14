
var user_email = prompt('Inserisci il tuo indirizzo email');

var email_list = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];


for(var i = 0; i < email_list.length; i++) {

    var mail_giuste = email_list[i]

    if (user_email == mail_giuste) {
        console.log('la tua email è corretta');
    }

}

if (user_email != mail_giuste) {
    console.log('la tua email NON è corretta');
}
