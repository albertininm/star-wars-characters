import { getFormattedSynopsis, getInitialsFromName } from './string';

describe('Helpers: string', () => {
  describe('getInitialsFromName', () => {
    it('should return first letter if sigle name is provided', () => {
      const name = 'Yoda';
      const initial = getInitialsFromName(name);

      expect(initial).toStrictEqual(name[0]);
    });

    it('should return first two letters if composed name is provided', () => {
      const name = 'Darth Vader Star Wars';
      const initials = getInitialsFromName(name);

      expect(initials).toStrictEqual('DV');
    });
  });

  describe('getFormattedSynopsis', () => {
    it('should limit output to 150 characters, removing line breaks', () => {
      const synopsis = 'It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire\'s\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire\'s\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....';

      const formattedSynopsis = getFormattedSynopsis(synopsis);

      expect(formattedSynopsis).toStrictEqual('It is a period of civil war.  Rebel spaceships, striking  from a hidden base, have won  their first victory against  the evil Galactic Empire.    Durin...');
      expect(formattedSynopsis).not.toContain('\n');
      expect(formattedSynopsis).not.toContain('\r');
    });
  });
});