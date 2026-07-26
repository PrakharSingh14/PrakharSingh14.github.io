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
    file: "jrf-srf-review.jpg",
    caption:
      "<strong><em>The talk that had me nervous all week</em></strong> <br /> Presenting my JRF-to-SRF review talk — the milestone review where a Junior Research Fellow turns into a Senior Research Fellow, marking two years into the PhD",
  },
  {
    file: "udaipur-gang.jpg",
    caption:
      "<strong><em>Chai o'clock at USO</em></strong> <br /> Late-night chai breaks by the side of Fatehsagar Lake with the USO gang, during a research visit to Udaipur Solar Observatory — one of several trips there for the ISRO RESPOND project",
  },
  {
    file: "manipal-gang.jpg",
    caption:
      "<strong><em>The Place That Started It</em></strong> <br /> Back at the Manipal Centre for Natural Sciences, MAHE, for the statistics school — the perfect excuse to reconnect with the group where my interest in solar physics first took root, before I moved to ARIES for my PhD",
  },
  {
    file: "dipu-gang.jpg",
    caption:
      "<strong><em>The one with the Dipu gang 🌞</em></strong> <br /> A full house at ARIES for The Variable Sun (TVS) conference — from super seniors to supervisor to their supervisor, the whole chain was there",
  },
];
