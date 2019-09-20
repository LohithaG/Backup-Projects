let BACKEND_URL = 'http://192.168.3.117:2121';
let FILEUPLOAD_URL = 'http://192.168.3.117:3131';
export const environment: any = {
    production: true,
    PMJ_URL: BACKEND_URL,
    USER_LOGIN: BACKEND_URL + '/login',
    USER_API_ENDPOINT: BACKEND_URL + '/api/users/',
    TARGET_VS_ACTUALS: BACKEND_URL + '/pmj/targetVsActual/',
    GROWTH_ENDPOINT: BACKEND_URL + '/pmj/growthCalculation/',
    LOCATIONS: BACKEND_URL + '/pmj/location/',
    EMPLOYEES: BACKEND_URL + '/pmj/employee/',
    PERFORMANCE_ANALYSIS: BACKEND_URL + '/pmj/performanceAnalysis/',
    TICKET_SIZE: BACKEND_URL + '/pmj/ticketsize/',
    FILE_UPLOAD: FILEUPLOAD_URL + '/pmj/upload/',
    CONVERSION_FACTORS: BACKEND_URL + '/pmj/conversionFactors/',
    D2H_CONVERSION_FACTOR: BACKEND_URL + '/pmj/conversionfactor/'
};