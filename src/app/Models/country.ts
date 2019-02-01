import { Currency } from './currency';
import { Language } from './language';
import { RegionalBloc } from './regional-bloc';

export class Country {
    name:string;
    topLevelDomain:string[];
    alpha2Code:string[];
    alpha3Code: string;
    callingCodes: number[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: [number,number];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: number;
    currencies: Currency[];
    languages:Language[];
    translations:[string,string][];
    flag:string;
    regionalBlocs:RegionalBloc[];
    cioc:string[];
}
