// Add or edit entries here to update the /resources page — no other file needs to change.
// Example:
// {
//   title: 'My GitHub',
//   url: 'https://github.com/PrakharSingh14',
//   description: 'Code and analysis scripts for my research.',
// },

export interface SiteLink {
	title: string;
	url: string;
	description?: string;
}

export const links: SiteLink[] = [
	{
		title: 'Aditya-L1 Support Cell (ARIES)',
		url: 'https://al1ssc.aries.res.in/',
		description: 'Data-analysis support cell for SoLEXS and HEL1OS onboard Aditya-L1.',
	},
];
