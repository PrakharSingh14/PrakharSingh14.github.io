// Add or edit entries here to update the /phd-life page.
// 1. Drop the image file into src/assets/phd-life/
// 2. Add an entry below with the matching filename and a caption
// Entries render in order, alternating image-left/image-right down the page.

export interface PhdLifeEntry {
	file: string; // filename inside src/assets/phd-life/
	caption: string;
}

export const phdLifeEntries: PhdLifeEntry[] = [
	{
		file: 'udaipur-gang.jpg',
		caption:
			"Evenings with the gang during a research visit to Udaipur Solar Observatory — one of several trips there for the ISRO RESPOND project, between long days of SoLEXS and HEL1OS data work.",
	},
	{
		file: 'manipal-gang.jpg',
		caption:
			"Back at Manipal Centre for Natural Sciences, MAHE, with the group from my time there working on active-region UV/EUV emission and photospheric magnetic activity, before I moved to ARIES for my PhD.",
	},
	{
		file: 'dipu-gang.jpg',
		caption:
			"A full house at one of the Aditya-L1 Support Cell workshops — I've been on both sides of these over the years, first as a participant and later mentoring newer students through SoLEXS data analysis.",
	},
	{
		file: 'jrf-srf-review.jpg',
		caption:
			"Presenting my JRF-to-SRF review talk, walking through the classification of confined versus eruptive solar flares — one of the milestones along the way to where the research stands now.",
	},
];
