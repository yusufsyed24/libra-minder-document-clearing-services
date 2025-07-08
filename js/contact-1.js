var $form = $("#contact-form"),
 $successMsg = $(".msg-sucess");

$(document).ready(function(){
    
    $("#contact-form").validate({
	rules:{
		fname:{
			minlength:3,
            required:true
		},
		mail:{
			email:true,
			required: true
		},
		phno:{
			number:true,
			minlength: 9,
			maxlength: 15,
			required: true,
		},
		msg:{
		    required: true,
		    minlength:6,
		    
		}
	},
	messages: {
		fname:{
			required: "Please enter your name",
			minlength: "Minimum 3 characters"
		},
		mail:"Please enter your mail",
		phno:"Please enter your phone number",
		msg:"Please enter your message"
	  },
	

	submitHandler: function() {
	  $successMsg.show("#success");
	}
   });

	$('#contact-form').on('click','#send-btn',function(e){
		e.preventDefault();
		
		if ($('#contact-form').valid())
		{
		var fname=$('#fname').val();
        var lname=$('#lname').val();
		var phno=$('#phno').val();
		var mail=$('#mail').val();
		var msg=$('#msg').val();
		
	var mail_obj={
		name:fname+' '+lname,
		phno:phno,
		mail:mail,
		msg:msg
	};
	console.log(mail_obj);
	$.ajax({
		url:'php/contact_mail.php',
		type:'POST',
		data:mail_obj,
		success:function(data){
			console.log(data);
			$('#contact-form input').val('');
			$('#contact-form textarea').val('');
			Swal.fire(
                  'Message send sucessfully'
                )
		}
	});
		}
 });

});




grecaptcha.ready(function () {
	grecaptcha.execute('6LcsWzEgAAAAAJvd2ngCHZnkgNbC2Vih56ukZ__M', { action: 'contact' }).then(function (token) {
	   var recaptchaResponse = document.getElementById('recaptchaResponse');
	   recaptchaResponse.value = token;
	   // Make the Ajax call here
	});
 });


