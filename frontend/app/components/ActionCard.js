import React , {Component} from 'react';
import styles from 'styles/components/profileSummaryCard';

class ActionCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			styleScroll: { transform: 'translateY(0px)' },
		}
	}

	render(){
		return(
			<div className={`${styles.actionCard} row`}>
				<div className={`${styles.widgetHeader}`}>Actions</div>
				<div className={`${styles.widgetContent}`}>
					<div>Add Batch</div>
					<div>Add Fee</div>
					<div>Add Member</div>
					<div>Aur kuchh kuchh</div>
				</div>
			</div>
		)
	}
}

export default ActionCard;