const Users = {

	userList : [],

	findMatch : function(currentUser){

		const Users = this;
		let currentMatch = {};
		let currentDif = 0;
		let previousDif = 0;

		for(let i = 0; i < Users.userList.length;i++){

			if(i===0){
				currentMatch = Users.userList[i];
				previousDif = Math.abs(Users.userList[i].score - currentUser.score);
			}
			else{
				currentDif = Math.abs(Users.userList[i].score - currentUser.score);
				if(currentDif < previousDif){
					previousDif = currentDif;
					currentMatch = Users.userList[i];
				}
			}		
		}
		return currentMatch;
	}

}

module.exports = Users;