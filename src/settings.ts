export const profile = {
	fullName: 'Prakhar Singh',
	title: 'PhD Researcher, Solar Physics',
	institute: 'ARIES, Nainital · IIT Roorkee',
	author_name: 'P. Singh', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Flare diagnostics',
			description: 'X-ray spectroscopic diagnostics of solar flares using Aditya-L1/SoLEXS and Chandrayaan-2/XSM, deriving plasma temperature, emission measure and elemental abundances.',
			field: 'physics',
		},
		{
			title: 'Jet dynamics',
			description: 'Energetic and kinematic properties of recurrent solar active-region jets using SDO, IRIS and Hinode, including plasmoid-driven morphology transitions.',
			field: 'physics',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'prakhar@aries.res.in',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/PrakharSingh14',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0009-0005-1007-9159',
}

export const template = {
	website_url: 'https://prakharsingh14.github.io', // Astro needs to know your site's deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'solar', // Custom Daisy UI theme, see tailwind.config.mjs
	darkTheme: 'corona',
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Prakhar Singh — Solar Physics',
	default_description: 'Prakhar Singh, PhD researcher in solar physics at ARIES / IIT Roorkee. X-ray spectroscopic diagnostics of solar flares and coronal jet dynamics using Aditya-L1, SDO, IRIS and Hinode.',
	default_image: '',
}
