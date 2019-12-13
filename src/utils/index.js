export default {
    /* eslint-disable */
    install(Vue) {
        /* Get方法 */
        function GetMethod(salf, path, data, headers, callback) {
            salf.$axios({
                method: 'get', url: path, params: data, headers: headers
            }).then(e => {
                var func = callback
                if (func) {
                    callback(e.data)
                }
            }).catch(e => {
                console.log("网络错误:" + e)
            })
        }
        /* Post方法 */
        function PostMethod(salf, path, data, headers, callback) {
            salf.$axios({
                method: 'post', url: path, data: data, headers: headers
            }).then(e => {
                var func = callback
                if (func) {
                    callback(e.data)
                }
            }).catch(e => {
                console.log("网络错误:", e)
            })
        }
        /* 天气查询 */
        Vue.prototype.weatherInfo = function (salf, json, callback) {
            json.key = "f1127a9de8aa0d9452a76839afe688b8"
            GetMethod(salf, "https://restapi.amap.com/v3/weather/weatherInfo?parameters", json, {}, callback)
        }
        /* IP定位 */
        Vue.prototype.ipInfo = function (salf, json, callback) {
            json.key = "f1127a9de8aa0d9452a76839afe688b8"
            GetMethod(salf, "https://restapi.amap.com/v3/ip?parameters", json, {}, callback)
        }
    }
}