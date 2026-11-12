import { LiturgicalBook } from '../types/liturgy';

export const er1947Book: LiturgicalBook = {
  id: '1947',
  slug: '1947',
  year: 1947,
  title: 'The Book of Worship (1947)',
  shortTitle: '1947 Book of Worship',
  formalTitle: 'The Book of Worship for the Evangelical and Reformed Church',
  tradition: 'Evangelical and Reformed',
  jurisdiction: 'Evangelical and Reformed Church (United States)',
  sourceNote: 'Approved by the General Synod of the Evangelical and Reformed Church (1947). Eden Publishing House, St. Louis, Missouri. Public domain.',
  historicalContext: 'Formed in 1934 by the union of the Reformed Church in the United States (tracing back to the Heidelberg Catechism) and the Evangelical Synod of North America (Prussian Union heritage), the Evangelical and Reformed Church authorized this monumental 1947 Book of Worship. It stands as a sublime synthesis of classic German Reformed liturgy (Palatinate, Mercersburg) and Evangelical biblical devotion.',
  status: 'available',
  accentColor: 'emerald',
  services: [
    // I. Worship and Sacraments
    {
      id: 'er-order-of-worship',
      slug: 'order-of-worship',
      title: 'The Order of Worship',
      category: 'Holy Communion',
      description: 'The historic Sunday morning liturgy of Word, Praise, and Prayer.',
      blocks: []
    },
    {
      id: 'er-alternate-order-of-worship',
      slug: 'alternate-order-of-worship',
      title: 'An Alternate Order of Worship',
      category: 'Holy Communion',
      description: 'An alternate Lord’s Day order of praise, scripture reading, and general prayer.',
      blocks: []
    },
    {
      id: 'er-evening-service',
      slug: 'evening-service',
      title: 'The Evening Service',
      category: 'Daily Office',
      description: 'The evening prayer office with responsive prayers for peace and protection.',
      blocks: []
    },
    {
      id: 'er-litany',
      slug: 'the-litany',
      title: 'The Litany',
      category: 'Penitential',
      description: 'General supplication to be said kneeling on days of penitence.',
      blocks: []
    },
    {
      id: 'er-general-prayers',
      slug: 'general-prayers',
      title: 'The General Prayers',
      category: 'Prayers & Thanksgivings',
      description: 'Seasonal general prayers for Advent, Christmas, Epiphany, Lent, Easter, and Pentecost-Trinity.',
      blocks: []
    },
    {
      id: 'er-preparatory-service',
      slug: 'preparatory-service',
      title: 'The Preparatory Service',
      category: 'Penitential',
      description: 'Preparatory service of the Ten Commandments, Litany, and self-examination before Holy Communion.',
      blocks: []
    },
    {
      id: 'er-holy-communion',
      slug: 'holy-communion',
      title: 'The Order for Holy Communion',
      category: 'Holy Communion',
      description: 'The celebration of the Lord’s Supper with the historic Eucharistic Prayer and manual acts.',
      blocks: []
    },
    {
      id: 'er-alternate-holy-communion',
      slug: 'alternate-holy-communion',
      title: 'An Alternate Order for Holy Communion',
      category: 'Holy Communion',
      description: 'An alternate form for the administration of the Holy Supper.',
      blocks: []
    },
    {
      id: 'er-communion-sick',
      slug: 'communion-of-the-sick',
      title: 'The Order for the Communion of the Sick',
      category: 'Pastoral Offices',
      description: 'Private administration of the Holy Communion to the sick and infirm.',
      blocks: []
    },
    {
      id: 'er-baptism-infants',
      slug: 'baptism-of-infants',
      title: 'The Order for Baptism of Infants',
      category: 'Pastoral Offices',
      description: 'Holy Baptism administered to infants and young children.',
      blocks: []
    },
    {
      id: 'er-baptism-adults',
      slug: 'baptism-of-adults',
      title: 'The Order for Baptism of Adults',
      category: 'Pastoral Offices',
      description: 'Holy Baptism administered to adults upon personal confession of faith.',
      blocks: []
    },

    // II. The Church Year
    {
      id: 'er-church-year-propers',
      slug: 'introits-collects-epistles-gospels',
      title: 'Introits, Collects, Epistles, and Gospels',
      category: 'Prayers & Thanksgivings',
      description: 'Proper Introits, Collects, Epistles, and Gospels for the Church Year.',
      blocks: []
    },
    {
      id: 'er-proper-psalms',
      slug: 'proper-psalms',
      title: 'Proper Psalms for Seasons and Days',
      category: 'Daily Office',
      description: 'Table of appointed Psalms for mornings and evenings of the Christian Year.',
      blocks: []
    },
    {
      id: 'er-history-passion',
      slug: 'history-of-the-passion',
      title: 'The History of the Passion of Our Lord',
      category: 'Penitential',
      description: 'The unified Passion history of the Four Evangelists in seven parts.',
      blocks: []
    },

    // III. Occasional Services
    {
      id: 'er-confirmation',
      slug: 'confirmation',
      title: 'The Order for Confirmation',
      category: 'Catechism & Rites',
      description: 'Confirmation and renewal of baptismal vows with the laying on of hands.',
      blocks: []
    },
    {
      id: 'er-receiving-communicants',
      slug: 'receiving-communicants',
      title: 'An Order for Receiving Communicants from Other Churches',
      category: 'Catechism & Rites',
      description: 'Reception of members by profession of faith or letters of transfer.',
      blocks: []
    },
    {
      id: 'er-restoration',
      slug: 'restoration-to-membership',
      title: 'An Order for Restoration to Communicant Membership',
      category: 'Catechism & Rites',
      description: 'Restoration of members to full communion upon renewal of faith.',
      blocks: []
    },
    {
      id: 'er-visitation-sick',
      slug: 'visitation-of-the-sick',
      title: 'An Order for the Visitation of the Sick',
      category: 'Pastoral Offices',
      description: 'Pastoral office of scripture, prayers for healing, and commendation of the dying.',
      blocks: []
    },
    {
      id: 'er-marriage',
      slug: 'marriage',
      title: 'The Order for Marriage',
      category: 'Pastoral Offices',
      description: 'The solemnization of holy matrimony.',
      blocks: []
    },
    {
      id: 'er-alternate-marriage',
      slug: 'alternate-marriage',
      title: 'An Alternate Order for Marriage',
      category: 'Pastoral Offices',
      description: 'An alternate order for Christian marriage.',
      blocks: []
    },
    {
      id: 'er-burial',
      slug: 'burial',
      title: 'The Order for Burial of the Dead',
      category: 'Pastoral Offices',
      description: 'Funeral service, commendation, and the burial of a child.',
      blocks: []
    },
    {
      id: 'er-ordination',
      slug: 'ordination',
      title: 'The Order for Ordination of a Minister',
      category: 'Pastoral Offices',
      description: 'The solemn rite of ordination to the Holy Ministry.',
      blocks: []
    },
    {
      id: 'er-installation-minister',
      slug: 'installation-of-a-minister',
      title: 'The Order for Installation of a Minister',
      category: 'Pastoral Offices',
      description: 'Installation of a pastor into a parish congregation.',
      blocks: []
    },
    {
      id: 'er-ordination-elders-deacons',
      slug: 'ordination-and-installation-of-elders-and-deacons',
      title: 'The Order for Ordination and Installation of Elders and Deacons',
      category: 'Pastoral Offices',
      description: 'Ordination and installation of church elders and deacons.',
      blocks: []
    },
    {
      id: 'er-consecration-workers',
      slug: 'consecration-of-commissioned-workers',
      title: 'The Order for Consecration of Commissioned Workers',
      category: 'Pastoral Offices',
      description: 'Consecration of lay workers to special church service.',
      blocks: []
    },
    {
      id: 'er-commissioned-missionaries',
      slug: 'commissioned-missionaries',
      title: 'An Order for Commissioned Missionaries',
      category: 'Pastoral Offices',
      description: 'Commissioning of missionaries for ministry at home and abroad.',
      blocks: []
    },
    {
      id: 'er-church-school-officers',
      slug: 'church-school-officers',
      title: 'An Order for Installation of Officers and Teachers of the Church School',
      category: 'Pastoral Offices',
      description: 'Installation of Sunday school teachers and educational officers.',
      blocks: []
    },
    {
      id: 'er-congregation-organizations',
      slug: 'congregation-organizations',
      title: 'An Order for Installation of Officers of Organizations in a Congregation',
      category: 'Pastoral Offices',
      description: 'Installation of officers of the Women’s Guild, Brotherhood, and Youth Fellowship.',
      blocks: []
    },
    {
      id: 'er-laying-cornerstone',
      slug: 'laying-the-corner-stone',
      title: 'An Order for Laying the Corner-Stone of a Church',
      category: 'Pastoral Offices',
      description: 'Blessing and laying the foundation corner-stone of a house of God.',
      blocks: []
    },
    {
      id: 'er-dedication-church',
      slug: 'dedication-of-a-church',
      title: 'An Order for Dedication of a Church',
      category: 'Pastoral Offices',
      description: 'Solemn dedication of a church sanctuary to Almighty God.',
      blocks: []
    },
    {
      id: 'er-dedication-appointments',
      slug: 'dedication-of-appointments',
      title: "An Order for Dedication of the Lord's Table, Font, Pulpit, Organ, or Memorials",
      category: 'Pastoral Offices',
      description: 'Setting apart furnishings, instruments of praise, and memorials.',
      blocks: []
    },

    // IV. Forms & V. Prayers
    {
      id: 'er-licensure-inauguration',
      slug: 'licensure-and-inauguration',
      title: 'The Forms of Licensure & Inauguration of a Teacher of Theology',
      category: 'Pastoral Offices',
      description: 'Formula of licensure and inauguration of seminary professors.',
      blocks: []
    },
    {
      id: 'er-treasury-prayers',
      slug: 'treasury-of-prayers',
      title: 'A Treasury of Prayers, Offertory Sentences and Ascriptions',
      category: 'Prayers & Thanksgivings',
      description: 'Prayers for national holidays, church meetings, family life, and litanies of the people.',
      blocks: []
    },
    {
      id: 'er-preface-rubrics',
      slug: 'preface-and-general-rubrics',
      title: 'Preface & General Rubrics',
      category: 'Catechism & Rites',
      description: 'Historical preface and general rubrics authorized by the General Synod.',
      blocks: []
    }
  ]
};
