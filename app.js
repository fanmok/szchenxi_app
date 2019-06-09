App({
    options: {
        debug: false
    },
    /**
     * 当wap2app初始化完成时，会触发 onLaunch
     */
    onLaunch: function() {
        console.log('launch');
		var ua = navigator.userAgent;
        if(ua.indexOf('Html5Plus') > -1 && ua.indexOf('StreamApp') == -1) {  
            var server = "https://tg.szchenxi.cf/update.php"; //检查更新地址  
            var req = { //升级检测数据  
                "appid": plus.runtime.appid,  
                "version": plus.runtime.version,  
                "imei": plus.device.imei,  
                "plus":plus.os.name  
            };  
            //注释部分是wap2app封装的post请求。示例使用get请求  
            wap2app.ajax.get(server, req, function(rsp) {  
                if(rsp && rsp.status) {  
                    //需要更新，提示用户  
                    plus.nativeUI.confirm(rsp.note, function(event) {  
                        if(0 == event.index) { //用户点击了“立即更新”按钮  
                            plus.runtime.openURL(rsp.url);  
                        }  
                    }, rsp.title, ["立即更新", "取消"]);  
                }  
            });  
        }  
    },
    /**
     * 当wap2app启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function() {
        console.log('show');
    },
    /**
     * 当wap2app从前台进入后台，会触发 onHide
     */
    onHide: function() {
        console.log('hide');
    }
});
Page('__W2A__www.szchenxi.cf', { //首页扩展配置
    onShow: function() {

    },
    onClose: function() {

    }
});