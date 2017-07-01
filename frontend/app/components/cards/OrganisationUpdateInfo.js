//Creating Footer
import React,{Component} from 'react';
import { FlatButton , FontIcon } from 'material-ui';
import { Link } from 'react-router';
import styles from 'styles/components/common/card';
import Icon from 'components/common/Icon';
import Routes from 'routes';
import {replaceParamInRoot} from 'utils';


class OrganisationUpdateInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
    const { orgNotification } = this.props;
		return (
			<div className={`${styles.orgNotification} row`}>
				<ul className={`${styles.cardItems} col-xs-12`}>
        {
          orgNotification.map((data, index) => {
            return (
              <li className={`${styles.orgItem} col-xs-6 col-sm-3`} key={index}>
                <Icon iconClass={`${data.iconClass} ${styles.fs5em}`} />
                <div className={styles.orgItemName}>
                  <span>{data.displayText}</span>
                  <span className={styles.orgItemCount}>{data.updateCount}</span>
                </div>
              </li>
            );
          })
        }
				</ul>
        <div className={`col-xs-12 text-right`}><Link to={replaceParamInRoot(Routes.organization,'organizationname','oxford')}><FlatButton primary={true} disableTouchRipple={true} label="VIEW" labelPosition="before"  icon={<FontIcon style={{'fontSize':'16px'}} className="fa fa-arrow-right" />}/></Link></div>
			</div>
		);
	}
}

export default OrganisationUpdateInfo;
