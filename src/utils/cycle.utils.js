/* eslint-disable implicit-arrow-linebreak */
export const CYCLE_TYPES = {
  NIGHT: 'night',
  WEEK: 'week',
  MONTH: 'month',
};

export const CYCLE_DURATIONS = {
  [CYCLE_TYPES.NIGHT]: 1,
  [CYCLE_TYPES.WEEK]: 7,
  [CYCLE_TYPES.MONTH]: 30,
};

export const getCycleAmountInNights = (amount, cycleType) =>
  amount * CYCLE_DURATIONS[cycleType];
