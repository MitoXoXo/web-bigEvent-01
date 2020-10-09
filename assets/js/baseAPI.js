$.ajaxPrefilter(function(params) {
    // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    params.url = 'http://ajax.frontend.itheima.net' + params.url
    if (params.url.indexOf('/my/') !== -1) {
        params.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    params.complete = function(res) {

        var obj = res.responseJSON;
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败') {
            localStorage.removeItem('token');
            location.href = '/login.html'
        }
    }
})