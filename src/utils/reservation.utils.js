/* eslint-disable max-len */
import { CYCLE_DURATIONS, CYCLE_TYPES } from './cycle.utils';

const getSelectedHostingByMinAvailableCycle = (
  minCycle,
  hostingsHash,
  numNights,
) => {
  let selectedHosting = hostingsHash[minCycle];
  let priceByMinCycle = selectedHosting.rate;
  let discount = 0;

  if (
    CYCLE_DURATIONS[minCycle] < CYCLE_DURATIONS[CYCLE_TYPES.WEEK]
    && numNights >= CYCLE_DURATIONS[CYCLE_TYPES.WEEK]
    && hostingsHash[CYCLE_TYPES.WEEK]
  ) {
    selectedHosting = hostingsHash[CYCLE_TYPES.WEEK];
    priceByMinCycle = (selectedHosting.rate * CYCLE_DURATIONS[minCycle]) / CYCLE_DURATIONS[CYCLE_TYPES.WEEK];
    discount = hostingsHash[minCycle].rate - priceByMinCycle;
  }
  if (
    CYCLE_DURATIONS[minCycle] < CYCLE_DURATIONS[CYCLE_TYPES.MONTH]
    && numNights >= CYCLE_DURATIONS[CYCLE_TYPES.MONTH]
    && hostingsHash[CYCLE_TYPES.MONTH]
  ) {
    selectedHosting = hostingsHash[CYCLE_TYPES.MONTH];
    priceByMinCycle = (selectedHosting.rate * CYCLE_DURATIONS[minCycle]) / CYCLE_DURATIONS[CYCLE_TYPES.MONTH];
    discount = hostingsHash[CYCLE_TYPES.NIGHT].rate - priceByMinCycle;
  }

  const priceByNight = selectedHosting.rate / CYCLE_DURATIONS[selectedHosting.cycle];

  return {
    hosting: selectedHosting,
    minCycle,
    priceByMinCycle,
    priceByNight,
    accommodationPrice: priceByNight * numNights,
    discount,
  };
};

export const getSelectedHostingFromNumNights = ({ minCycleHosting, hostings, numNights }) => {
  const hostingsHash = hostings.reduce(
    (acc, hosting) => ({
      ...acc,
      [hosting.cycle]: hosting,
    }),
    {},
  );

  if (minCycleHosting) {
    return getSelectedHostingByMinAvailableCycle(
      minCycleHosting.cycle,
      hostingsHash,
      numNights,
    );
  }

  return null;
};
