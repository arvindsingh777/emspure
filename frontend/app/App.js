import React,{Component} from 'react';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory,IndexRedirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Dashboard,Layout,Profile, Signup, Signin, Organization} from 'containers';
import {About,Organisation, Feeds} from 'components/tabs';
import configureStore from 'store/configureStore';
import {replaceParamInRoot} from 'utils';
import Routes from 'routes';

//<Route path={Routes.dashboard} component={Dashboard} activeTab="dashboard">
	//							<IndexRedirect to={replaceParamInRoot(Routes.dashboardOrganization,'username','user')}/>
	//							<Route path={Routes.dashboardOrganization} component={Organisation} />
		//					</Route>

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<Router history={history}>
						<Route path={Routes.home} component={Layout}>
							<IndexRedirect to={Routes.signin} /> 
							<Route path={Routes.signup} component={Signup} />
							<Route path={Routes.signin} component={Signin} />
							<Route path={Routes.dashboard} component={Dashboard} activeTab="dashboard">
								<IndexRedirect to={replaceParamInRoot(Routes.dashboardFeeds,'username','user')}/>
								<Route path={Routes.dashboardFeeds} component={Feeds} />
								<Route path={Routes.dashboardOrganization} component={Organisation} />
							</Route> 
							<Route path={Routes.profile} component={Profile} activeTab="profile">
								<IndexRedirect to={replaceParamInRoot(Routes.profileAbout,'username','user')}/>
								<Route path={Routes.profileAbout} component={About} />
							</Route>
							<Route path={Routes.organization} component={Organization} activeTab="organization">
								<IndexRedirect to={replaceParamInRoot(Routes.organizationAbout,'organizationname','oxford')}/>
								<Route path={Routes.organizationAbout} component={About} />
								<Route path={Routes.organizationBatch} component={Organisation} />
								<Route path={Routes.organizationMisc} component={About} />
							</Route>
						</Route>
					</Router>
				</Provider>
			)
	}
}
export default App;