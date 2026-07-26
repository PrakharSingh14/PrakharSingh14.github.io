// Each project gets its own page at /research/<slug>.
// Add a figures folder at src/assets/projects/<slug>/ and drop images in any time —
// they show up on that project's page automatically.

export interface Project {
	slug: string;
	title: string;
	summary: string; // short description shown on the Research page card
	body: string[]; // paragraphs shown on the project's own page
}

export const projects: Project[] = [
	{
		slug: 'xray-spectroscopy-solar-flares',
		title: 'X-ray spectroscopy of solar flares',
		summary:
			'Isothermal XSPEC fitting (chisoth / CHIANTI) of 47 SoLEXS-observed M-class flares to trace plasma temperature, emission measure and abundance evolution.',
		body: [
			'Isothermal XSPEC fitting (chisoth / CHIANTI) of 47 SoLEXS-observed M-class flares to trace plasma temperature, emission measure and abundance evolution.',
			'A joint SoLEXS + HEL1OS pipeline combines soft and hard X-ray diagnostics, constraining flare plasma properties across a broader energy range than either instrument alone.',
		],
	},
	{
		slug: 'standard-to-blowout-jets',
		title: 'Standard-to-blowout jet transitions',
		summary:
			'Multi-wavelength kinematics and DEM-based energetics of a recurrent active-region jet, with NFFF magnetic extrapolation linking a plasmoid-driven eruption to a null-point reconnection site.',
		body: [
			'Multi-wavelength kinematics and DEM-based energetics of a recurrent active-region jet, using SDO/AIA, HMI, IRIS and Hinode/XRT to characterize a plasmoid-driven transition from standard to blowout jet morphology.',
			'Non-force-free field (NFFF) magnetic extrapolation reveals a null-point topology underlying the jet, linking the eruption to an associated Type III radio burst.',
		],
	},
];
