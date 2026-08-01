/**
 * Site-wide configuration.
 *
 * Design switch: two layout directions from the design handoff are implemented.
 * Change SITE_DESIGN to swap the whole landing page:
 *   - 'layered-bold'       → 1b "Layered / Bold" (default)
 *   - 'terminal-editorial' → 1a "Terminal Editorial"
 */
export type SiteDesign = 'layered-bold' | 'terminal-editorial';

export const SITE_DESIGN: SiteDesign = 'layered-bold';

export const SITE_TITLE = 'ProtoLayer OÜ — Custom development on Bitcoin, Lightning and Nostr';
export const SITE_DESCRIPTION =
  'Estonian technology company building custom software on free technologies and open protocols — Bitcoin, Lightning and Nostr. Development, self-hosting and operations, with no vendor lock-in.';

export const CONTACT_EMAIL = 'contact@protolayer.io';
export const REGISTRY_CODE = '17464577';
/** Registered address, kept structured so schema.org and the footer agree. */
export const ADDRESS = {
  street: 'Järvevana tee 9',
  locality: 'Tallinn',
  postalCode: '11314',
  country: 'EE',
  countryName: 'Estonia',
} as const;

export const REGISTERED_ADDRESS = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.postalCode}, ${ADDRESS.countryName}`;
export const COPYRIGHT_YEAR = 2026;
export const TAGLINE = 'Free software. Open protocols.';
