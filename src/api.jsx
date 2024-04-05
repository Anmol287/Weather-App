
export const WEATHER_API_URL = import.meta.env.VITE_APIURL_WEATHER;
export const WEATHER_API_KEY = import.meta.env.VITE_APIKEY_WEATHER;


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6831aba04msh0d175e5dfadf4fdp14adafjsn867ce1967bfe',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
