/**
 * Created by Artem on 04.09.2018.
 */

import { get } from './http-request.js';

const appUrl = 'http://demo-slot-server.herokuapp.com/slot';
const slotConfigURL = `${appUrl}/config`;
const slotStateURL = `${appUrl}/state`;
const spinSlotURL = `${appUrl}/spin`;
const resetSlotURL = `${appUrl}/reset`;

export const initializeSlotConfig = () => {
    return get(slotConfigURL);
};

export const initializeSlotState = () => {
    return get(slotStateURL);
};

export const spinSlot = (lineBet, linesCount) => {
    const url = `${spinSlotURL}?lineBet=${lineBet}&linesCount=${linesCount}`;
    return get(url);
};

export const resetSlot = () => {
    return get(resetSlotURL);
};
