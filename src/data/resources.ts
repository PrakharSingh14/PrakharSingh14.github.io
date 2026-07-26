// Add or edit entries here to update the /resources page — no other file needs to change.
// Add a new category by adding an object with `category` and a `links` array;
// add a new link within a category the same way — just title and url, no description needed.

export interface ResourceLink {
	title: string;
	url: string;
}

export interface ResourceCategory {
	category: string;
	links: ResourceLink[];
}

export const resourceCategories: ResourceCategory[] = [
	{
		category: 'Aditya-L1 Support Cell',
		links: [
			{ title: 'Aditya-L1 Support Cell (ARIES)', url: 'https://al1ssc.aries.res.in/' },
		],
	},
	{
		category: 'Space Missions',
		links: [
			{ title: 'SDO (Solar Dynamics Observatory)', url: 'https://sdo.gsfc.nasa.gov/' },
			{ title: 'SOHO (Solar & Heliospheric Observatory)', url: 'https://soho.nascom.nasa.gov/' },
			{ title: 'Hinode / Solar-B', url: 'https://hinode.nao.ac.jp/' },
			{ title: 'IRIS (Interface Region Imaging Spectrograph)', url: 'https://iris.lmsal.com/' },
			{ title: 'STEREO', url: 'https://stereo.gsfc.nasa.gov/' },
			{ title: 'Parker Solar Probe', url: 'https://parkersolarprobe.jhuapl.edu/' },
			{ title: 'Solar Orbiter', url: 'https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter' },
			{ title: 'DKIST (Daniel K. Inouye Solar Telescope)', url: 'https://nso.edu/telescopes/dkist/' },
			{ title: 'GONG (Global Oscillation Network Group)', url: 'https://gong.nso.edu/' },
		],
	},
	{
		category: 'Solar Data Archive',
		links: [
			{ title: 'Heliophysics Data Portal', url: 'https://heliophysicsdata.gsfc.nasa.gov/' },
			{ title: 'Space Weather Data Portal', url: 'https://lasp.colorado.edu/space-weather-portal' },
			{ title: 'Virtual Solar Observatory (VSO)', url: 'https://sdac.virtualsolar.org/cgi/search' },
			{ title: 'SolarSoft / SSW', url: 'https://www.lmsal.com/solarsoft/' },
			{ title: 'JSOC (Joint Science Operations Center)', url: 'http://jsoc.stanford.edu/' },
			{ title: 'Solar Data Archive System (SDAS)', url: 'https://hinode.nao.ac.jp/SDAS/index_e.shtml' },
		],
	},
	{
		category: 'Solar Monitoring & Space Weather',
		links: [
			{ title: 'Space Weather Prediction Center (SWPC/NOAA)', url: 'https://www.swpc.noaa.gov/' },
			{ title: 'Solar Monitor', url: 'https://solarmonitor.org/' },
			{ title: 'Helioviewer', url: 'https://www.helioviewer.org/' },
			{ title: 'SunToday', url: 'https://suntoday.lmsal.com/' },
			{ title: 'SIDC (Sunspot Index & Long-term Solar Observations)', url: 'https://www.sidc.be/' },
			{ title: 'LASCO CME Catalog', url: 'https://cdaw.gsfc.nasa.gov/CME_list/' },
			{ title: 'CACTus CME Detection', url: 'https://www.sidc.be/cactus/' },
		],
	},
	{
		category: 'Research Databases & Literature',
		links: [
			{ title: 'NASA ADS (Astrophysics Data System)', url: 'https://ui.adsabs.harvard.edu/' },
			{ title: 'arXiv Solar & Stellar Astrophysics', url: 'https://arxiv.org/list/astro-ph.SR/recent' },
			{ title: 'Living Reviews in Solar Physics', url: 'https://link.springer.com/journal/41116' },
			{ title: 'Solar Physics Journal', url: 'https://link.springer.com/journal/11207' },
			{ title: 'HelioIndex', url: 'https://helioindex.org/' },
		],
	},
	{
		category: 'Professional Societies & Communities',
		links: [
			{ title: 'American Astronomical Society / SPD', url: 'https://spd.aas.org/' },
			{ title: 'American Geophysical Union (AGU)', url: 'https://www.agu.org/' },
			{ title: 'International Astronomical Union (IAU)', url: 'https://www.iau.org/' },
			{ title: 'SHINE (Solar, Heliospheric & INterplanetary Environment)', url: 'https://shinecon.org/' },
			{ title: 'COSPAR', url: 'https://cosparhq.cnes.fr/' },
		],
	},
	{
		category: 'Software & Analysis Tools',
		links: [
			{ title: 'SunPy', url: 'https://sunpy.org/' },
			{ title: 'SolarSoftware (SSWIDL)', url: 'https://www.lmsal.com/solarsoft/' },
			{ title: 'Astropy', url: 'https://www.astropy.org/' },
			{ title: 'JHelioviewer', url: 'https://www.jhelioviewer.org/' },
		],
	},
	{
		category: 'Education & Outreach',
		links: [
			{ title: 'NASA Heliophysics Science Division', url: 'https://science.nasa.gov/heliophysics/' },
			{ title: 'Stanford Solar Center', url: 'http://solar-center.stanford.edu/' },
			{ title: 'NSO (National Solar Observatory)', url: 'https://nso.edu/' },
			{ title: 'ESA Space Weather', url: 'https://spaceweather.esa.int/' },
		],
	},
];
