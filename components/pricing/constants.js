export const FISCAL_HOST_ACCESS = ['dashboard', 'outsideFunds', 'bankTransfer', 'creditCard'];
export const COLLECTIVE_ACCESS = ['collectivePage', 'outsideFunds', 'bankTransfer', 'creditCard'];

export const PLANS = [
  {
    id: 'start',
    fee: 'Free',
    actionLink: '/organizations/new',
    actionType: 'joinAsFiscalHost',
  },
  {
    id: 'grow',
    fee: '15%',
    actionLink: '/organizations/new',
    actionType: 'joinAsFiscalHost',
  },
  {
    id: 'scale',
    fee: 'Negotiable',
    actionLink: '/help',
    actionType: 'contactUs',
  },
];

export const FEATURES = [
  {
    id: 'unlimitedCollectives',
    plans: ['start', 'grow', 'scale'],
  },
  {
    id: 'addFunds',
    plans: ['start', 'grow', 'scale'],
  },
  {
    id: 'configureHost',
    plans: ['grow', 'scale'],
  },
];
