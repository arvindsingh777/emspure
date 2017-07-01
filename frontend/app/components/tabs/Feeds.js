//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/organisation';
import Card from 'components/common/Card';
import { FeedsDefault } from 'sources';

class Feeds extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { dispatch } = this.props;
		const feeds = FeedsDefault;
		return (
				<div className={styles.organisation}>
				{
					feeds.map((data, index) => {
						return <Card key={index} title={data.orgName} dispatch={dispatch} cardComponent="FeedsStructure" {...data} />
					})
				}
				</div>
			)
	}
}

export default Feeds;
