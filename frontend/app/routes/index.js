const ROOT = "";
const HOME = `${ROOT}/`;
const SIGNUP = `/signup`;
const SIGNIN = `/signin`;
const DASHBOARD = `/dashboard`;
const PROFILE = `/:username`;
const PROFILE_ABOUT = `/:username/about`;
const DASHBOARD_ORGANIZATION = `/:username/organization`;
const DASHBOARD_FEEDS = `/:username/feeds`;
const DEFAULT = `${PROFILE}`;
const SERVICES = `/services`;
const CONTACTUS = `/contact-us`;
const ORGANIZATION = `/organization/:organizationname`;
const ORGANIZATION_ABOUT = `/organization/:organizationname/about`;
const ORGANIZATION_BATCH = `/organization/:organizationname/batch`;
const ORGANIZATION_MISC = `/organization/:organizationname/misc`;

const ROUTER_MASTER = {
	default: DEFAULT,
	home: HOME,
	signin: SIGNIN,
	signup: SIGNUP,
	dashboard: DASHBOARD,
	profile: PROFILE,
	profileAbout: PROFILE_ABOUT,
	dashboardOrganization: DASHBOARD_ORGANIZATION,
	dashboardFeeds: DASHBOARD_FEEDS,
	services: SERVICES,
	contactUs: CONTACTUS,
	organization: ORGANIZATION,
	organizationAbout: ORGANIZATION_ABOUT,
	organizationBatch: ORGANIZATION_BATCH,
	organizationMisc: ORGANIZATION_MISC
}

export default ROUTER_MASTER;