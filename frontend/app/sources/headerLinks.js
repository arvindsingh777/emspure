import Routes from 'routes';
import {replaceParamInRoot} from 'utils';

const headerLinks = {
	'dashboard':{
		displayText: 'Dashboard',
		toLink: Routes.dashboard,
		role: true,
		subTab: [
			{
				displayText: 'FEEDS',
				toLink: replaceParamInRoot(Routes.dashboardFeeds , 'username' , 'user')
			},
			{
				displayText: 'ORGANISATIONS',
				toLink: replaceParamInRoot(Routes.dashboardOrganization , 'username' , 'user')
			}
		]
	},
	'profile':{
		displayText: 'Profile',
		toLink: Routes.profile,
		role: true,
		subTab: [
			{
				displayText: 'ABOUT',
				toLink: replaceParamInRoot(Routes.profileAbout,'username','user')
			}
		],
		subLinks: [
			{
				displayText: 'Profile',
				toLink: Routes.profile,
				iconClass: 'fa-code',
			},
			{
				displayText: 'Logout',
				toLink: Routes.signin,
				iconClass: 'fa-code',
			}
		]
	},
	'services':{
		displayText: 'Services',
		toLink: Routes.services,
		role: false
	},
	'contactus':{
		displayText: 'Contact us',
		toLink: Routes.contactUs,
		role: false
	},
	'organization':{
		displayText: 'Organization',
		toLink: Routes.organization,
		role: true,
		subTab: [
			{
				displayText: 'ABOUT',
				toLink: replaceParamInRoot(Routes.organizationAbout, 'organizationname', 'oxford')
			},
			{
				displayText: 'BATCH',
				toLink: replaceParamInRoot(Routes.organizationBatch,'organizationname','oxford')
			},
			{
				displayText: 'MISC',
				toLink: replaceParamInRoot(Routes.organizationMisc,'organizationname','oxford')
			}
		],
		subLinks: [
			{
				displayText: 'Profile',
				toLink: Routes.profile,
				iconClass: 'fa-code',
			},
			{
				displayText: 'Logout',
				toLink: Routes.signin,
				iconClass: 'fa-code',
			}
		]
	},
};

export default headerLinks;
