// Add or edit entries here to update the /links page — no other file needs to change.
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

export const links: SiteLink[] = [];
