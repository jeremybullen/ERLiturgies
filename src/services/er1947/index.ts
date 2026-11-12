import { ServiceItem } from '../types';
import { theOrderOfWorshipContent } from './the_order_of_worship';
import { anAlternateOrderOfWorshipContent } from './an_alternate_order_of_worship';
import { theEveningServiceContent } from './the_evening_service';
import { theOrderForHolyCommunionContent } from './the_order_for_holy_communion';
import { anAlternateOrderForHolyCommunionContent } from './an_alternate_order_for_holy_communion';
import { thePreparatoryServiceContent } from './the_preparatory_service';
import { theLitanyContent } from './the_litany';
import { generalPrayersContent } from './general_prayers';
import { communionOfTheSickContent } from './communion_of_the_sick';
import { baptismOfInfantsContent } from './baptism_of_infants';
import { baptismOfAdultsContent } from './baptism_of_adults';
import { churchYearPropers1947Content } from './church_year_propers';
import { properPsalms1947Content } from './proper_psalms';
import { passionHistory1947Content } from './passion_history';
import { confirmationContent } from './confirmation';
import { receivingCommunicantsContent } from './receiving_communicants';
import { restorationContent } from './restoration';
import { visitationOfTheSickContent } from './visitation_of_the_sick';
import { marriageContent } from './marriage';
import { alternateMarriageContent } from './alternate_marriage';
import { burialContent } from './burial';
import { ordinationContent } from './ordination';
import { installationOfAMinisterContent } from './installation_of_a_minister';
import { ordinationEldersDeaconsContent } from './ordination_elders_deacons';
import { commissionedWorkersContent } from './commissioned_workers';
import { commissionedMissionariesContent } from './commissioned_missionaries';
import { churchSchoolOfficersContent } from './church_school_officers';
import { congregationOrganizationsContent } from './congregation_organizations';
import { layingTheCornerStone1947Content } from './laying_the_corner_stone';
import { dedicationOfAChurch1947Content } from './dedication_of_a_church';
import { dedicationOfAppointmentsContent } from './dedication_of_appointments';
import { licensureAndInaugurationContent } from './licensure_and_inauguration';
import { treasuryOfPrayersContent } from './treasury_of_prayers';
import { prefaceAndRubricsContent } from './preface_and_rubrics';

export {
  theOrderOfWorshipContent,
  anAlternateOrderOfWorshipContent,
  theEveningServiceContent,
  theOrderForHolyCommunionContent,
  anAlternateOrderForHolyCommunionContent,
  thePreparatoryServiceContent,
  theLitanyContent,
  generalPrayersContent,
  communionOfTheSickContent,
  baptismOfInfantsContent,
  baptismOfAdultsContent,
  churchYearPropers1947Content,
  properPsalms1947Content,
  passionHistory1947Content,
  confirmationContent,
  receivingCommunicantsContent,
  restorationContent,
  visitationOfTheSickContent,
  marriageContent,
  alternateMarriageContent,
  burialContent,
  ordinationContent,
  installationOfAMinisterContent,
  ordinationEldersDeaconsContent,
  commissionedWorkersContent,
  commissionedMissionariesContent,
  churchSchoolOfficersContent,
  congregationOrganizationsContent,
  layingTheCornerStone1947Content,
  dedicationOfAChurch1947Content,
  dedicationOfAppointmentsContent,
  licensureAndInaugurationContent,
  treasuryOfPrayersContent,
  prefaceAndRubricsContent
};

export const services1947: ServiceItem[] = [
  // I. Worship and Sacraments
  {
    id: 'er-order-of-worship',
    slug: 'order-of-worship',
    title: 'The Order of Worship',
    shortTitle: 'The Order of Worship',
    category: 'Holy Communion',
    content: theOrderOfWorshipContent
  },
  {
    id: 'er-alternate-order-of-worship',
    slug: 'alternate-order-of-worship',
    title: 'An Alternate Order of Worship',
    shortTitle: 'An Alternate Order of Worship',
    category: 'Holy Communion',
    content: anAlternateOrderOfWorshipContent
  },
  {
    id: 'er-evening-service',
    slug: 'evening-service',
    title: 'The Evening Service',
    shortTitle: 'The Evening Service',
    category: 'Daily Office',
    content: theEveningServiceContent
  },
  {
    id: 'er-litany',
    slug: 'the-litany',
    title: 'The Litany',
    shortTitle: 'The Litany',
    category: 'Penitential',
    content: theLitanyContent
  },
  {
    id: 'er-general-prayers',
    slug: 'general-prayers',
    title: 'The General Prayers',
    shortTitle: 'The General Prayers',
    category: 'Prayers & Thanksgivings',
    content: generalPrayersContent
  },
  {
    id: 'er-preparatory-service',
    slug: 'preparatory-service',
    title: 'The Preparatory Service',
    shortTitle: 'The Preparatory Service',
    category: 'Penitential',
    content: thePreparatoryServiceContent
  },
  {
    id: 'er-holy-communion',
    slug: 'holy-communion',
    title: 'The Order for Holy Communion',
    shortTitle: 'The Order for Holy Communion',
    category: 'Holy Communion',
    content: theOrderForHolyCommunionContent
  },
  {
    id: 'er-alternate-holy-communion',
    slug: 'alternate-holy-communion',
    title: 'An Alternate Order for Holy Communion',
    shortTitle: 'An Alternate Order for Holy Communion',
    category: 'Holy Communion',
    content: anAlternateOrderForHolyCommunionContent
  },
  {
    id: 'er-communion-sick',
    slug: 'communion-of-the-sick',
    title: 'The Order for the Communion of the Sick',
    shortTitle: 'The Order for the Communion of the Sick',
    category: 'Pastoral Offices',
    content: communionOfTheSickContent
  },
  {
    id: 'er-baptism-infants',
    slug: 'baptism-of-infants',
    title: 'The Order for Baptism of Infants',
    shortTitle: 'The Order for Baptism of Infants',
    category: 'Pastoral Offices',
    content: baptismOfInfantsContent
  },
  {
    id: 'er-baptism-adults',
    slug: 'baptism-of-adults',
    title: 'The Order for Baptism of Adults',
    shortTitle: 'The Order for Baptism of Adults',
    category: 'Pastoral Offices',
    content: baptismOfAdultsContent
  },

  // II. The Church Year
  {
    id: 'er-church-year-propers',
    slug: 'introits-collects-epistles-gospels',
    title: 'Introits, Collects, Epistles, and Gospels',
    shortTitle: 'Introits, Collects, Epistles, and Gospels',
    category: 'Prayers & Thanksgivings',
    content: churchYearPropers1947Content
  },
  {
    id: 'er-proper-psalms',
    slug: 'proper-psalms',
    title: 'Proper Psalms for Seasons and Days',
    shortTitle: 'Proper Psalms for Seasons and Days',
    category: 'Daily Office',
    content: properPsalms1947Content
  },
  {
    id: 'er-history-passion',
    slug: 'history-of-the-passion',
    title: 'The History of the Passion of Our Lord',
    shortTitle: 'The History of the Passion of Our Lord',
    category: 'Penitential',
    content: passionHistory1947Content
  },

  // III. Occasional Services
  {
    id: 'er-confirmation',
    slug: 'confirmation',
    title: 'The Order for Confirmation',
    shortTitle: 'The Order for Confirmation',
    category: 'Catechism & Rites',
    content: confirmationContent
  },
  {
    id: 'er-receiving-communicants',
    slug: 'receiving-communicants',
    title: 'An Order for Receiving Communicants from Other Churches',
    shortTitle: 'An Order for Receiving Communicants from Other Churches',
    category: 'Catechism & Rites',
    content: receivingCommunicantsContent
  },
  {
    id: 'er-restoration',
    slug: 'restoration-to-membership',
    title: 'An Order for Restoration to Communicant Membership',
    shortTitle: 'An Order for Restoration to Communicant Membership',
    category: 'Catechism & Rites',
    content: restorationContent
  },
  {
    id: 'er-visitation-sick',
    slug: 'visitation-of-the-sick',
    title: 'An Order for the Visitation of the Sick',
    shortTitle: 'An Order for the Visitation of the Sick',
    category: 'Pastoral Offices',
    content: visitationOfTheSickContent
  },
  {
    id: 'er-marriage',
    slug: 'marriage',
    title: 'The Order for Marriage',
    shortTitle: 'The Order for Marriage',
    category: 'Pastoral Offices',
    content: marriageContent
  },
  {
    id: 'er-alternate-marriage',
    slug: 'alternate-marriage',
    title: 'An Alternate Order for Marriage',
    shortTitle: 'An Alternate Order for Marriage',
    category: 'Pastoral Offices',
    content: alternateMarriageContent
  },
  {
    id: 'er-burial',
    slug: 'burial',
    title: 'The Order for Burial of the Dead',
    shortTitle: 'The Order for Burial of the Dead',
    category: 'Pastoral Offices',
    content: burialContent
  },
  {
    id: 'er-ordination',
    slug: 'ordination',
    title: 'The Order for Ordination of a Minister',
    shortTitle: 'The Order for Ordination of a Minister',
    category: 'Pastoral Offices',
    content: ordinationContent
  },
  {
    id: 'er-installation-minister',
    slug: 'installation-of-a-minister',
    title: 'The Order for Installation of a Minister',
    shortTitle: 'The Order for Installation of a Minister',
    category: 'Pastoral Offices',
    content: installationOfAMinisterContent
  },
  {
    id: 'er-ordination-elders-deacons',
    slug: 'ordination-and-installation-of-elders-and-deacons',
    title: 'The Order for Ordination and Installation of Elders and Deacons',
    shortTitle: 'The Order for Ordination and Installation of Elders and Deacons',
    category: 'Pastoral Offices',
    content: ordinationEldersDeaconsContent
  },
  {
    id: 'er-consecration-workers',
    slug: 'consecration-of-commissioned-workers',
    title: 'The Order for Consecration of Commissioned Workers',
    shortTitle: 'The Order for Consecration of Commissioned Workers',
    category: 'Pastoral Offices',
    content: commissionedWorkersContent
  },
  {
    id: 'er-commissioned-missionaries',
    slug: 'commissioned-missionaries',
    title: 'An Order for Commissioned Missionaries',
    shortTitle: 'An Order for Commissioned Missionaries',
    category: 'Pastoral Offices',
    content: commissionedMissionariesContent
  },
  {
    id: 'er-church-school-officers',
    slug: 'church-school-officers',
    title: 'An Order for Installation of Officers and Teachers of the Church School',
    shortTitle: 'An Order for Installation of Officers and Teachers of the Church School',
    category: 'Pastoral Offices',
    content: churchSchoolOfficersContent
  },
  {
    id: 'er-congregation-organizations',
    slug: 'congregation-organizations',
    title: 'An Order for Installation of Officers of Organizations in a Congregation',
    shortTitle: 'An Order for Installation of Officers of Organizations in a Congregation',
    category: 'Pastoral Offices',
    content: congregationOrganizationsContent
  },
  {
    id: 'er-laying-cornerstone',
    slug: 'laying-the-corner-stone',
    title: 'An Order for Laying the Corner-Stone of a Church',
    shortTitle: 'An Order for Laying the Corner-Stone of a Church',
    category: 'Pastoral Offices',
    content: layingTheCornerStone1947Content
  },
  {
    id: 'er-dedication-church',
    slug: 'dedication-of-a-church',
    title: 'An Order for Dedication of a Church',
    shortTitle: 'An Order for Dedication of a Church',
    category: 'Pastoral Offices',
    content: dedicationOfAChurch1947Content
  },
  {
    id: 'er-dedication-appointments',
    slug: 'dedication-of-appointments',
    title: "An Order for Dedication of the Lord's Table, Font, Pulpit, Organ, or Memorials",
    shortTitle: "An Order for Dedication of the Lord's Table, Font, Pulpit, Organ, or Memorials",
    category: 'Pastoral Offices',
    content: dedicationOfAppointmentsContent
  },

  // IV. Forms & V. Prayers
  {
    id: 'er-licensure-inauguration',
    slug: 'licensure-and-inauguration',
    title: 'The Forms of Licensure & Inauguration of a Teacher of Theology',
    shortTitle: 'The Forms of Licensure & Inauguration of a Teacher of Theology',
    category: 'Pastoral Offices',
    content: licensureAndInaugurationContent
  },
  {
    id: 'er-treasury-prayers',
    slug: 'treasury-of-prayers',
    title: 'A Treasury of Prayers, Offertory Sentences and Ascriptions',
    shortTitle: 'A Treasury of Prayers, Offertory Sentences and Ascriptions',
    category: 'Prayers & Thanksgivings',
    content: treasuryOfPrayersContent
  },
  {
    id: 'er-preface-rubrics',
    slug: 'preface-and-general-rubrics',
    title: 'Preface & General Rubrics',
    shortTitle: 'Preface & General Rubrics',
    category: 'Catechism & Rites',
    content: prefaceAndRubricsContent
  }
];

export function get1947ServiceBySlug(slug?: string): ServiceItem {
  if (!slug) return services1947[0];
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  const found = services1947.find(s => {
    const sSlug = s.slug.toLowerCase();
    const sId = s.id.toLowerCase();
    return sSlug === clean || sId === clean ||
      (clean === 'order-of-worship' && sSlug === 'order-of-worship') ||
      (clean === 'morning-worship' && sSlug === 'order-of-worship') ||
      (clean === 'alternate-order-of-worship' && sSlug === 'alternate-order-of-worship') ||
      (clean === 'evening-service' && sSlug === 'evening-service') ||
      (clean === 'evening-worship' && sSlug === 'evening-service') ||
      (clean === 'litany' && sSlug === 'the-litany') ||
      (clean === 'general-prayers' && sSlug === 'general-prayers') ||
      (clean === 'preparatory-service' && sSlug === 'preparatory-service') ||
      (clean === 'holy-communion' && sSlug === 'holy-communion') ||
      (clean === 'communion' && sSlug === 'holy-communion') ||
      (clean === 'alternate-holy-communion' && sSlug === 'alternate-holy-communion') ||
      (clean === 'communion-of-the-sick' && sSlug === 'communion-of-the-sick') ||
      ((clean === 'baptism' || clean === 'infants-baptism' || clean === 'baptism-infants') && sSlug === 'baptism-of-infants') ||
      ((clean === 'adults-baptism' || clean === 'adult-baptism' || clean === 'baptism-adults') && sSlug === 'baptism-of-adults') ||
      ((clean === 'propers' || clean === 'collects' || clean === 'epistles-gospels') && sSlug === 'introits-collects-epistles-gospels') ||
      (clean === 'proper-psalms' && sSlug === 'proper-psalms') ||
      (clean === 'passion' && sSlug === 'history-of-the-passion') ||
      (clean === 'confirmation' && sSlug === 'confirmation') ||
      (clean === 'receiving-communicants' && sSlug === 'receiving-communicants') ||
      (clean === 'restoration' && sSlug === 'restoration-to-membership') ||
      (clean === 'visitation-of-the-sick' && sSlug === 'visitation-of-the-sick') ||
      ((clean === 'marriage' || clean === 'matrimony') && sSlug === 'marriage') ||
      (clean === 'alternate-marriage' && sSlug === 'alternate-marriage') ||
      ((clean === 'burial' || clean === 'funeral') && sSlug === 'burial') ||
      (clean === 'ordination' && sSlug === 'ordination') ||
      (clean === 'installation' && sSlug === 'installation-of-a-minister') ||
      ((clean === 'elders-deacons' || clean === 'officers') && sSlug === 'ordination-and-installation-of-elders-and-deacons') ||
      (clean === 'commissioned-workers' && sSlug === 'consecration-of-commissioned-workers') ||
      (clean === 'missionaries' && sSlug === 'commissioned-missionaries') ||
      (clean === 'church-school' && sSlug === 'church-school-officers') ||
      (clean === 'organizations' && sSlug === 'congregation-organizations') ||
      (clean === 'cornerstone' && sSlug === 'laying-the-corner-stone') ||
      (clean === 'dedication' && sSlug === 'dedication-of-a-church') ||
      (clean === 'appointments' && sSlug === 'dedication-of-appointments') ||
      (clean === 'licensure' && sSlug === 'licensure-and-inauguration') ||
      (clean === 'prayers' && sSlug === 'treasury-of-prayers') ||
      (clean === 'preface' && sSlug === 'preface-and-general-rubrics');
  });
  return found || services1947[0];
}
