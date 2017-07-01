import React , {Component} from 'react';
import styles from 'styles/components/common/expander';

class Expander extends Component{
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		};
		this.toggleText = this.toggleText.bind(this);
		this.getExpanderText = this.getExpanderText.bind(this);
	}

  toggleText() {
		this.setState({ expanded: !this.state.expanded });
  }

  getExpanderText (expText, thLength) {
  	let divText = expText;
    if (!this.state.expanded) {
    	divText = expText.substring(0, thLength || 86);
    }
    return <div className = {styles.expanderContent}> {divText} </div>;
  }

	render(){
		const expText = this.props.expText;
		const thresholdLength = this.props.thresholdLength;
		var expandedDiv = this.getExpanderText(expText, thresholdLength);
    return (
      <div>
        { expandedDiv }
        <a onClick={this.toggleText}>Read more</a>
      </div>
    );
	}
}

export default Expander;
