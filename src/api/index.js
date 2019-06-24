import ajax from "./ajax";


const BASE = '/api'

export const reqHomeData = () => ajax('/home')

export const reqInitSearch = () => ajax(BASE + '/xhr/search/init.json')

export const reqAutoSearch = (data) => ajax(BASE + '/xhr/search/searchAutoComplete.json', { keywordPrefix: data })

export const reqCategory = () => ajax('/categorylist')

// 获取第三页头部tab 
export const reqArticleTab = () => ajax(BASE + '/topic/v1/find/getTabs.json')

// 获取第三页初始数据
export const reqArticleManual = () => ajax(BASE + '/topic/v1/find/recManual.json')

// 上拉加载
export const reqAuto = (data) => ajax(BASE + `/topic/v1/find/recAuto.json?page=${data}&size=5`)