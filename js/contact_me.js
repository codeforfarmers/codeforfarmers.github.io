/* http://www.smartaddon.com/contact_form.html */
/*var sa_email_id = '48487-a6e46';  // saheelahmed7@gmail.com
var sa_email_id = '48483-821b8'; // sahmed@qwinixtech.com*/ 
var sa_email_id = '48498-3eab3'; /*dputtannaiah@qwinixtech.com */
var sa_sent_text = 'Thank you for contacting us. We will get back to you soon.';

var sa_params = '';
var sa_frm = document.sentMessage;
			
function sa_htmlent(_val) {
	return _val;
}

function sa_contactsent() {
	// Success message
    $('#success').html("<div class='alert alert-success'>");
    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
    $('#success > .alert-success')
        .append("<strong>"+ sa_sent_text +"</strong>");
    $('#success > .alert-success')
        .append('</div>');

    //clear all fields
    $('#contactForm').trigger("reset");
}

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
			for (i = 0; i < sa_frm.elements.length; i++) {
				var sa_el = sa_frm.elements[i];
				if (sa_frm.elements[i].name) {
					sa_params += '<input type=hidden name=' + sa_frm.elements[i].name + ' value="' + sa_frm.elements[i].value + '">';
				}
			}

			var s = document.createElement('script');
			s.setAttribute('type', 'text/javascript');
			s.setAttribute('src', 'http://www.smartaddon.com/js/postform.js');
			document.body.appendChild(s);
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
