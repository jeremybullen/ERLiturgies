import { psalter1662 } from '../psalter1662';

export const thePsalterContent = `# The Psalter, or Psalms of David

` + psalter1662.content.replace(/^# THE PSALMS OF DAVID\.\n\n/, '');
