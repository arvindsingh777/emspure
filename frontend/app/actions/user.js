import { LOGGED_IN } from 'constants';
import { browserHistory } from 'react-router';
import { API } from 'config';
import Routes from 'routes';

export function login(dispatch, user) {
	const userData = {id: 1, name: 'Surya'};

	fetch(API.signin, {
	    method: 'post',
	    body: {email: "arvind@gmail.com", password: "12345"}
  	})
	.then((resp) => resp.json())
	.then(function(data){
		console.log(data);
		browserHistory.push(Routes.profile);
	})
	.catch(function(err){
		console.log(err);
		browserHistory.push(Routes.profile);
	});

	dispatch({
		type: LOGGED_IN,
		content: userData
	})
}
