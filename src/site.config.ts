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
export const REGISTERED_ADDRESS = 'Järvevana tee 9, Tallinn, 11314, Estonia';
export const COPYRIGHT_YEAR = 2026;
export const TAGLINE = 'Free software. Open protocols.';
