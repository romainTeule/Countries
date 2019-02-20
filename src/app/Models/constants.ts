export class Constants {
    public static API_BASE_URL: string = "https://restcountries.eu/rest/v2/";
    public static API_ALL_ENDPOINT: string = "all/";
    public static API_CODE_ENDPOINT: string = "alpha/";
    private static API_NAME_ENDPOINT: string = "name/";
    private static API_CURRENCY_ENDPOINT: string = "currency/";
    private static API_REGION_ENDPOINT: string = "region/";
    private static API_LANGUAGE_ENDPOINT: string = "lang/";
    public static API_RESPONSE_FILTER: string = "?fields=name;alpha3Code;flag";

    public static NAME : [string,string] = ["Nom",Constants.API_NAME_ENDPOINT];
    public static CURRENCY : [string,string]= ["Monnaie",Constants.API_CURRENCY_ENDPOINT];
    public static REGION  : [string,string]= [ "Région",Constants.API_REGION_ENDPOINT];
    public static LANGUAGE : [string,string]= ["Langue",Constants.API_LANGUAGE_ENDPOINT];

  

    public static SearchableFields: Array<[string,string]>=[Constants.NAME,Constants.CURRENCY, Constants.REGION, Constants.LANGUAGE];


 
}
