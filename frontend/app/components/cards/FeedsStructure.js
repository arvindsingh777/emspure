//Creating Footer
import React,{Component} from 'react';
import { FlatButton , FontIcon } from 'material-ui';
import { Link } from 'react-router';
import styles from 'styles/components/common/card';
import Icon from 'components/common/Icon';
import Routes from 'routes';
import {replaceParamInRoot} from 'utils';


class FeedsStructure extends Component{
	constructor(props){
		super(props);
	}
	render(){
    const { feed } = this.props;
		return (
			<div className={`${styles.feed} row`}>
				<ul className={`${styles.cardItems} col-xs-12`}>
			        {
			          Object.keys(feed).map((data, index) => {
			            return (
			              <li key={index}>
			                	<span>{data}</span> : <span>{feed[data]}</span>
			              </li>
			            );
			          })
			        }
				</ul>
        	</div>
		);
	}
}

export default FeedsStructure;
