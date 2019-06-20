import ajax from "./ajax";
const BASE = '/api'

export const reqHomeData = () => ajax('/home')

export const reqInitSearch = () => ajax(BASE + '/xhr/search/init.json')

export const reqAutoSearch = (data) => ajax(BASE + '/xhr/search/searchAutoComplete.json', {keywordPrefix: data})