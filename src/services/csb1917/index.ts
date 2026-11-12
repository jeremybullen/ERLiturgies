import { ServiceItem } from '../types';
import { theServiceContent } from './theService';
import { matinsContent } from './matins';
import { vespersContent } from './vespers';
import { theLitanyAndSuffragesContent } from './theLitanyAndSuffrages';
import { theSuffragesContent } from './theSuffrages';
import { theBiddingPrayerContent } from './theBiddingPrayer';
import { sentencesForTheSeasonsContent } from './sentencesForTheSeasons';
import { thePsalterContent } from './thePsalter';
import { smallCatechismContent } from './smallCatechism';
import { canticlesContent } from './canticles';
import { historyOfPassionContent } from './historyOfPassion';
import { collectsAndPrayersContent } from './collectsAndPrayers';
import { baptismOfInfantsContent } from './baptismOfInfants';
import { baptismOfAdultsContent } from './baptismOfAdults';
import { confirmationContent } from './confirmation';
import { publicConfessionContent } from './publicConfession';
import { privateConfessionContent } from './privateConfession';
import { communionOfTheSickContent } from './communionOfTheSick';
import { commendationOfTheDyingContent } from './commendationOfTheDying';
import { marriageContent } from './marriage';
import { burialOfTheDeadContent } from './burialOfTheDead';
import { ordinationContent } from './ordination';
import { installationOfAPastorContent } from './installationOfAPastor';
import { layingTheCornerStoneContent } from './layingTheCornerStone';
import { dedicationOfAChurchContent } from './dedicationOfAChurch';
import { openingOfSynodsContent } from './openingOfSynods';
import { closingOfSynodsContent } from './closingOfSynods';
import { installationOfAChurchCouncilContent } from './installationOfAChurchCouncil';
import { prefacesAndRubricsContent } from './prefacesAndRubrics';

export {
  theServiceContent,
  matinsContent,
  vespersContent,
  theLitanyAndSuffragesContent,
  theSuffragesContent,
  theBiddingPrayerContent,
  sentencesForTheSeasonsContent,
  thePsalterContent,
  smallCatechismContent,
  canticlesContent,
  historyOfPassionContent,
  collectsAndPrayersContent,
  baptismOfInfantsContent,
  baptismOfAdultsContent,
  confirmationContent,
  publicConfessionContent,
  privateConfessionContent,
  communionOfTheSickContent,
  commendationOfTheDyingContent,
  marriageContent,
  burialOfTheDeadContent,
  ordinationContent,
  installationOfAPastorContent,
  layingTheCornerStoneContent,
  dedicationOfAChurchContent,
  openingOfSynodsContent,
  closingOfSynodsContent,
  installationOfAChurchCouncilContent,
  prefacesAndRubricsContent
};

export const services1917: ServiceItem[] = [
  // Primary Services & Daily Offices
  {
    id: 'csb-the-service',
    slug: 'the-service',
    title: 'The Service',
    shortTitle: 'The Service',
    category: 'Holy Communion',
    content: theServiceContent
  },
  {
    id: 'csb-matins',
    slug: 'matins',
    title: 'Matins',
    shortTitle: 'Matins',
    category: 'Daily Office',
    content: matinsContent
  },
  {
    id: 'csb-vespers',
    slug: 'vespers',
    title: 'Vespers',
    shortTitle: 'Vespers',
    category: 'Daily Office',
    content: vespersContent
  },

  // Penitential & General Devotions
  {
    id: 'csb-litany',
    slug: 'the-litany',
    title: 'The Litany',
    shortTitle: 'The Litany',
    category: 'Litany & Suffrages',
    content: theLitanyAndSuffragesContent
  },
  {
    id: 'csb-suffrages',
    slug: 'the-suffrages',
    title: 'The Suffrages',
    shortTitle: 'The Suffrages',
    category: 'Litany & Suffrages',
    content: theSuffragesContent
  },
  {
    id: 'csb-bidding-prayer',
    slug: 'the-bidding-prayer',
    title: 'The Bidding Prayer',
    shortTitle: 'The Bidding Prayer',
    category: 'Litany & Suffrages',
    content: theBiddingPrayerContent
  },

  // Catechism & Scripture Propers
  {
    id: 'csb-small-catechism',
    slug: 'small-catechism',
    title: 'The Small Catechism of Dr. Martin Luther',
    shortTitle: 'The Small Catechism of Dr. Martin Luther',
    category: 'Catechism',
    content: smallCatechismContent
  },
  {
    id: 'csb-psalter',
    slug: 'the-psalter',
    title: 'The Psalter, or Psalms of David',
    shortTitle: 'The Psalter, or Psalms of David',
    category: 'Psalms & Canticles',
    content: thePsalterContent
  },
  {
    id: 'csb-canticles',
    slug: 'the-canticles',
    title: 'The Canticles',
    shortTitle: 'The Canticles',
    category: 'Psalms & Canticles',
    content: canticlesContent
  },
  {
    id: 'csb-sentences-seasons',
    slug: 'sentences-for-the-seasons',
    title: 'Sentences for the Seasons',
    shortTitle: 'Sentences for the Seasons',
    category: 'Prayers & Propers',
    content: sentencesForTheSeasonsContent
  },
  {
    id: 'csb-collects-and-prayers',
    slug: 'collects-and-prayers',
    title: 'Collects and Prayers',
    shortTitle: 'Collects and Prayers',
    category: 'Prayers & Propers',
    content: collectsAndPrayersContent
  },
  {
    id: 'csb-history-of-the-passion',
    slug: 'history-of-the-passion',
    title: 'The History of the Passion of Our Lord',
    shortTitle: 'The History of the Passion of Our Lord',
    category: 'Prayers & Propers',
    content: historyOfPassionContent
  },

  // Occasional Services: Pastoral Offices
  {
    id: 'csb-baptism-infants',
    slug: 'baptism-of-infants',
    title: 'Order for the Baptism of Infants',
    shortTitle: 'Order for the Baptism of Infants',
    category: 'Occasional Services',
    content: baptismOfInfantsContent
  },
  {
    id: 'csb-baptism-adults',
    slug: 'baptism-of-adults',
    title: 'Order for the Baptism of Adults',
    shortTitle: 'Order for the Baptism of Adults',
    category: 'Occasional Services',
    content: baptismOfAdultsContent
  },
  {
    id: 'csb-confirmation',
    slug: 'confirmation',
    title: 'Order for Confirmation',
    shortTitle: 'Order for Confirmation',
    category: 'Occasional Services',
    content: confirmationContent
  },
  {
    id: 'csb-public-confession',
    slug: 'public-confession',
    title: 'Order for Public Confession',
    shortTitle: 'Order for Public Confession',
    category: 'Occasional Services',
    content: publicConfessionContent
  },
  {
    id: 'csb-private-confession',
    slug: 'private-confession',
    title: 'Order for Private Confession and Absolution',
    shortTitle: 'Order for Private Confession and Absolution',
    category: 'Occasional Services',
    content: privateConfessionContent
  },
  {
    id: 'csb-communion-of-the-sick',
    slug: 'communion-of-the-sick',
    title: 'Order for the Communion of the Sick',
    shortTitle: 'Order for the Communion of the Sick',
    category: 'Occasional Services',
    content: communionOfTheSickContent
  },
  {
    id: 'csb-commendation-of-the-dying',
    slug: 'commendation-of-the-dying',
    title: 'Order for the Commendation of the Dying',
    shortTitle: 'Order for the Commendation of the Dying',
    category: 'Occasional Services',
    content: commendationOfTheDyingContent
  },
  {
    id: 'csb-marriage',
    slug: 'marriage',
    title: 'Order for Marriage',
    shortTitle: 'Order for Marriage',
    category: 'Occasional Services',
    content: marriageContent
  },
  {
    id: 'csb-burial-of-the-dead',
    slug: 'burial-of-the-dead',
    title: 'Order for the Burial of the Dead',
    shortTitle: 'Order for the Burial of the Dead',
    category: 'Occasional Services',
    content: burialOfTheDeadContent
  },
  {
    id: 'csb-ordination',
    slug: 'ordination',
    title: 'Order for the Ordination of Ministers',
    shortTitle: 'Order for the Ordination of Ministers',
    category: 'Occasional Services',
    content: ordinationContent
  },
  {
    id: 'csb-installation-of-a-pastor',
    slug: 'installation-of-a-pastor',
    title: 'Order for the Installation of a Pastor',
    shortTitle: 'Order for the Installation of a Pastor',
    category: 'Occasional Services',
    content: installationOfAPastorContent
  },
  {
    id: 'csb-laying-cornerstone',
    slug: 'laying-the-corner-stone',
    title: 'Order for Laying the Corner-Stone of a Church',
    shortTitle: 'Order for Laying the Corner-Stone of a Church',
    category: 'Occasional Services',
    content: layingTheCornerStoneContent
  },
  {
    id: 'csb-dedication-of-a-church',
    slug: 'dedication-of-a-church',
    title: 'Order for the Dedication of a Church',
    shortTitle: 'Order for the Dedication of a Church',
    category: 'Occasional Services',
    content: dedicationOfAChurchContent
  },
  {
    id: 'csb-opening-of-synods',
    slug: 'opening-of-synods',
    title: 'Order for the Opening of Synods',
    shortTitle: 'Order for the Opening of Synods',
    category: 'Occasional Services',
    content: openingOfSynodsContent
  },
  {
    id: 'csb-closing-of-synods',
    slug: 'closing-of-synods',
    title: 'Order for the Closing of Synods',
    shortTitle: 'Order for the Closing of Synods',
    category: 'Occasional Services',
    content: closingOfSynodsContent
  },
  {
    id: 'csb-installation-of-a-church-council',
    slug: 'installation-of-a-church-council',
    title: 'Order for the Installation of a Church Council',
    shortTitle: 'Order for the Installation of a Church Council',
    category: 'Occasional Services',
    content: installationOfAChurchCouncilContent
  },

  // Prefaces & General Rubrics
  {
    id: 'csb-prefaces-and-rubrics',
    slug: 'prefaces-and-rubrics',
    title: 'Prefaces and General Rubrics',
    shortTitle: 'Prefaces and General Rubrics',
    category: 'Prefaces & Rubrics',
    content: prefacesAndRubricsContent
  }
];

export function get1917ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return services1917[0];
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1917.find(s => {
    const sSlug = s.slug.toLowerCase();
    const sId = s.id.toLowerCase();
    return sSlug === clean || sId === clean ||
      (clean === 'service' && sSlug === 'the-service') ||
      (clean === 'communion' && sSlug === 'the-service') ||
      (clean === 'holy-communion' && sSlug === 'the-service') ||
      (clean === 'morning-prayer' && sSlug === 'matins') ||
      (clean === 'evening-prayer' && sSlug === 'vespers') ||
      (clean === 'litany' && sSlug === 'the-litany') ||
      (clean === 'suffrages' && sSlug === 'the-suffrages') ||
      (clean === 'bidding-prayer' && sSlug === 'the-bidding-prayer') ||
      (clean === 'bidding' && sSlug === 'the-bidding-prayer') ||
      ((clean === 'catechism' || clean === 'luthers-catechism') && sSlug === 'small-catechism') ||
      (clean === 'psalter' && sSlug === 'the-psalter') ||
      (clean === 'psalms' && sSlug === 'the-psalter') ||
      (clean === 'canticles' && sSlug === 'the-canticles') ||
      ((clean === 'sentences' || clean === 'sentences-seasons') && sSlug === 'sentences-for-the-seasons') ||
      (clean === 'passion' && sSlug === 'history-of-the-passion') ||
      ((clean === 'collects' || clean === 'prayers') && sSlug === 'collects-and-prayers') ||
      ((clean === 'baptism' || clean === 'infant-baptism' || clean === 'holy-baptism') && sSlug === 'baptism-of-infants') ||
      ((clean === 'adult-baptism' || clean === 'baptism-adults') && sSlug === 'baptism-of-adults') ||
      (clean === 'confirm' && sSlug === 'confirmation') ||
      ((clean === 'confession' || clean === 'preparatory') && sSlug === 'public-confession') ||
      ((clean === 'private-confession-absolution' || clean === 'auricular-confession') && sSlug === 'private-confession') ||
      ((clean === 'communion-sick' || clean === 'visitation-of-the-sick') && sSlug === 'communion-of-the-sick') ||
      ((clean === 'dying' || clean === 'commendation') && sSlug === 'commendation-of-the-dying') ||
      ((clean === 'matrimony' || clean === 'holy-matrimony') && sSlug === 'marriage') ||
      ((clean === 'burial' || clean === 'funeral') && sSlug === 'burial-of-the-dead') ||
      ((clean === 'ordering' || clean === 'ministry') && sSlug === 'ordination') ||
      ((clean === 'install-pastor' || clean === 'installation-pastor') && sSlug === 'installation-of-a-pastor') ||
      ((clean === 'cornerstone' || clean === 'laying-cornerstone') && sSlug === 'laying-the-corner-stone') ||
      ((clean === 'dedication' || clean === 'church-dedication') && sSlug === 'dedication-of-a-church') ||
      (clean === 'synod-opening' && sSlug === 'opening-of-synods') ||
      (clean === 'synod-closing' && sSlug === 'closing-of-synods') ||
      ((clean === 'council-installation' || clean === 'install-council') && sSlug === 'installation-of-a-church-council') ||
      ((clean === 'occasional-services' || clean === 'pastoral') && sSlug === 'baptism-of-infants') ||
      ((clean === 'preface' || clean === 'rubrics') && sSlug === 'prefaces-and-rubrics');
  });
  return found || services1917[0];
}
