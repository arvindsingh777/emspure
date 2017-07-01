import React , {Component} from 'react';
import styles from 'styles/components/common/coverPic';
import styless from 'styles/components/common/card';
import Icon from 'components/common/Icon';

//<span onClick={this.handleEditClick} className={`${styless.customEdit} ${styless.cardEditButton}`}>
					//	<Icon iconClass={`fa-pencil fa-lg`}/>
					//</span> <img src="/details/img/myImage.png />
class ProfilePic extends Component{
	constructor(props){
		super(props);
	}

	handleEditClick(){
		console.log("Profile Clicked!!!");
	}

	render(){
		return(
				<div className={`${styles.profilePicContainerWrapper} col-xs-3 col-sm-12`}>
					<div className={styles.profilePicContainer}>
						<img className={styles.profilePic} src="../../app/images/profile.jpeg" />
						<span onClick={this.handleEditClick} className={`${styless.customEdit} ${styless.topRightEditButton}`}>
							<Icon iconClass={`fa-pencil fa-lg`}/>
						</span>
					</div>
				</div>
			)
	}
}

export default ProfilePic;