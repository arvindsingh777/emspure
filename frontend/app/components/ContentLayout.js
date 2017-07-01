import React , {Component} from 'react';
import CoverPic from './common/CoverPic';
import ProfileSummaryCard from './ProfileSummaryCard';
import ActionCard from './ActionCard';
import styles from 'styles/components/contentLayout';
import TabContainer from './common/TabContainer';
import {renderChildren} from 'utils';
//import profileConfig from './config/profileConfig';
//import dashboardConfig from './config/dashboardConfig';

class ContentLayout extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {tabs, dispatch} = this.props;

		return(
			<div className={styles.contentLayoutContainer}>
				<div className={styles.coverWrapper}>
					<CoverPic dispatch={dispatch} />
					<TabContainer tabs={tabs}/>
				</div>
				<div className={`${styles.leftContent} col-sm-3 col-xs-12`}>
					<ProfileSummaryCard dispatch={dispatch} />
					<ActionCard dispatch={dispatch} />
				</div>
				<div className={styles.contentWrapper}>
					<div className={`${styles.middleContent} col-sm-6 col-xs-12 col-sm-offset-3`}>
						{renderChildren(this.props.children,{dispatch})}
					</div>
					<div className={`${styles.rightContent} col-sm-3 col-xs-12`}>
					</div>
				</div>
			</div>
			)
	}
}

export default ContentLayout;