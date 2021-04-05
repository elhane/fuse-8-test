import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

// import {renderCards} from './modules/render-cards';
// import {getHouses} from './modules/get-houses';
import {getCards} from './modules/get-cards';
import {filterCards} from './modules/filter-cards';
//
// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

// renderCards();
getCards();
filterCards();
