==UserScript==
@name					WechatAdblock
@description			Disable part of Wechat ads.
@version				1.0
@downloadURL			https://raw.githubusercontent.com/Ishiharaerika/China-Censorship-Withdrawal/main/Adguard/Wechat.js
@updateURL				https://raw.githubusercontent.com/Ishiharaerika/China-Censorship-Withdrawal/main/Adguard/Wechat.js
@include				^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad

==/UserScript==
var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 