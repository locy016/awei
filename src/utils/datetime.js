export default {
    install(Vue) {
        /* 格式化日期 */
        Vue.prototype.GetFormatDate = (date) => {
            var currDate = date || new Date()
            var year = currDate.getFullYear();
            var month = ((currDate.getMonth() + 1).toString().length > 1) ? currDate.getMonth() + 1 : "0" + (currDate.getMonth() + 1)
            var day = (currDate.getDate().toString().length > 1) ? currDate.getDate() : "0" + currDate.getDate()
            return year + "/" + month + "/" + day;
        }
        /* 格式化年份 */
        Vue.prototype.GetFormatYear = () => {
            var currDate = new Date()
            var year = currDate.getFullYear();
            return year
        }
        /* 格式化年份 */
        Vue.prototype.GetFormatMonth = () => {
            var currDate = new Date()
            var month = ((currDate.getMonth() + 1).toString().length > 1) ? currDate.getMonth() + 1 : "0" + (currDate.getMonth() + 1)
            return month
        }
        /* 格式化年份 */
        Vue.prototype.GetFormatDay = () => {
            var currDate = new Date()
            var day = (currDate.getDate().toString().length > 1) ? currDate.getDate() : "0" + currDate.getDate()
            return day
        }
        /* 格式化小时 */
        Vue.prototype.GetFormatHour = () => {
            var currDate = new Date()
            var hour = (currDate.getHours().toString().length > 1) ? currDate.getHours() : "0" + currDate.getHours()
            return hour
        }
        /* 格式化分钟 */
        Vue.prototype.GetFormatMinute = () => {
            var currDate = new Date()
            var minute = (currDate.getMinutes().toString().length > 1) ? currDate.getMinutes() : "0" + currDate.getMinutes()
            return minute
        }
        /* 获取秒钟 */
        Vue.prototype.GetSecond = () => {
            var currDate = new Date()
            var second = currDate.getSeconds()
            return second
        }
    }
}