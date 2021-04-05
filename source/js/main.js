import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {getCards} from './modules/get-cards';
import {filterCards} from './modules/filter-cards';
//
// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

getCards();
filterCards();
