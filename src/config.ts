// ----------------------------------------------------------------
//  MV Lab — site configuration
//  Edit this file to change nav items, footer links, contact info,
//  and global metadata. No need to touch component files.
// ----------------------------------------------------------------

export const SITE = {
  name: 'MV Lab',
  tagline: 'Mechanisms of Heart Rate Adaptability',
  description:
    'The MV Lab studies the intrinsic and extrinsic mechanisms that modulate cardiac pacemaker function across vertebrates. Based at the University of Washington and the Howard Hughes Medical Institute.',
  // The institution(s) shown in the footer
  affiliations: [
    {
      name: 'Howard Hughes Medical Institute',
      short: 'HHMI',
      url: 'https://www.hhmi.org',
    },
    {
      name: 'University of Washington',
      short: 'UW',
      url: 'https://www.washington.edu',
    },
  ],
  // Contact
  email: 'mvlab@uw.edu',
  twitter: '', // e.g. 'https://x.com/mvlab' — leave blank to hide
  bluesky: '', // e.g. 'https://bsky.app/profile/mvlab.bsky.social'
  github: '',  // e.g. 'https://github.com/mv-lab'
  address: [
    'University of Washington',
    'Department of [Department]',
    'Seattle, WA 98195',
  ],
};

// Top navigation — order matters
export const NAV = [
  { href: '/',             label: 'Home' },
  { href: '/research/',    label: 'Research' },
  { href: '/philosophy/',  label: 'Philosophy' },
  { href: '/team/',        label: 'Team' },
  { href: '/publications/',label: 'Publications' },
  { href: '/outreach/',    label: 'Outreach' },
  { href: '/contact/',     label: 'Contact' },
];

// Footer link columns
export const FOOTER_LINKS = [
  {
    column: 'Site',
    links: [
      { href: '/',             label: 'Home' },
      { href: '/research/',    label: 'Our research' },
      { href: '/philosophy/',  label: 'Our mentorship philosophy' },
    ],
  },
  {
    column: 'Lab',
    links: [
      { href: '/team/',        label: 'Meet our team' },
      { href: '/outreach/',    label: 'BRIGHT-UP' },
      { href: '/contact/',     label: 'Contact us' },
    ],
  },
];
