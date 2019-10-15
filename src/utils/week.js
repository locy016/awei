export default {
    install(Vue) {
        Vue.prototype.GetWeek = () => {
            //定义一个中文星期数组
            var arr = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
            var myDate = new Date()
            return arr[myDate.getDay()]
        }
        Vue.prototype.GetWeekEnglish = () => {
            //定义一个英文星期数组
            var arr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
            var myDate = new Date()
            return arr[myDate.getDay()]
        }
        Vue.prototype.GetWeekEnglishSimple = () => {
            //定义一个英文简写星期数组
            var arr = new Array("Sun.", "Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat.")
            var myDate = new Date()
            return arr[myDate.getDay()]
        }
        Vue.prototype.GetWeekNetworkExtend = () => {
            //定义一个网络术语星期数组
            var a = new Array(
                "少走了弯路，也就错过了风景，无论如何，感谢经历。", 
                "不是所有的错过都必须在乎，你要在乎的是下一次别错过。", 
                "青春的逝去并不可怕，可怕的是失去了勇敢地热爱生活的心。",
                "真的，一个人熬过了足够多的苦难，就没那么想和谁在一起了。",
                "机会永远不会消失，只是在你错过的时候，被别人悄悄捡去罢了。",
                "你之所以觉得时间一年比一年过得快，是因为时间对你一年比一年重要。",
                "宁愿保持沉默让人看起来像个傻子，也不要一开口就证明自己确实如此。",
                "路的尽头，仍然有路，只要你愿意走；有时，看似没路，其实是你该拐弯了！",
                "总以为不太了解，就匆匆而过，其实，许多的时候就是因为我们走得匆匆才错过。",
                "曾经在你的世界里，我迷失了自己；现在在没有你的世界里，我找到了更好的自己。",
                "今日的事情，尽心、尽意、尽力去做了，无论成绩如何，都应该高高兴兴地上床恬睡。",
                "愈是运气不好，愈要沉住气默默振作，静静熬过去，切勿扰攘，制造笑柄，留下后患。",
                "当独自面对世间纷扰，当感觉被隔离遗弃，是时候给我们的心灵一碗鸡汤，让它学会坚强。",
                "人一生有走不完的路，喝不完的酒，唱不完的歌。你无法预知未来，但你能洒脱的活在当下。"
                );
            var r = Math.round(Math.random() * (a.length - 1))
            /* var arr = new Array(
                "星期日,是伤感的一天,没错,因为明天要上班.",
                "星期一,忙忙碌碌的一天.",
                "星期二,求死的想法诞生.",
                "星期三,求死还未死真的很不好受.",
                "星期四,受死的感觉突然来临.",
                "星期五,福利即将到来.",
                "星期六,我是今天最靓的仔.")
            var myDate = new Date()
            return arr[myDate.getDay()] */
            return a[r];
        }
        Vue.prototype.GetWeekBabylon = () => {
            //定义一个古巴比伦星期数组
            var arr = new Array("太阳神日.", "月亮神日.", "火星神日.", "水星神日.", "木星神日.", "金星神日.", "土星神日.")
            var myDate = new Date()
            return arr[myDate.getDay()]
        }
    }
}