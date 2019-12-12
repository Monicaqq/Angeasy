let defaultCity = '上海'
try {
    //如果缓存中有city
    if(localStorage.city) {
        defaultCity = localStorage.city 
    }
} catch (e) {}

export default {
    city: defaultCity
}