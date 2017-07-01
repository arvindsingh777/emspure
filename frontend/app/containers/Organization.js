import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from 'styles/components/dashboard';
import {ContentLayout} from 'components';

class Organization extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {headerLinks, route, dispatch} = this.props;
		return (
				<ContentLayout dispatch={dispatch} children={this.props.children} tabs={headerLinks[route.activeTab]["subTab"]}/>
			)
	}
}

function mapStateToProps(state) {
	return {
	
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Organization);
