$( document ).ready(function(){
		createUser = () => {

		const User = {
			name : undefined,
			imageUrl : undefined,
			score : 0,
			answerArray : []
		}

		return User;
	};

	showMatchModal = (data) =>{

		$("#match-photo").attr("src", data.imageUrl);
		$("#match-name").text(data.name);
		$("#match-modal").modal("toggle");
	}

	$(document).on("click","#submit",()=>{
		const User = createUser();
		const currentUrl = window.location.origin;
		User.name = $("#name").val();
		User.imageUrl = $("#photo").val();
		$(".question").map(function(){

			User.answerArray.push($(this).val());
		});

	    $.post(currentUrl + "/api/friends", User,

	    function(data){
	    	showMatchModal(data);
	    });
	});













});