***************************
QuantumultX:

[rewrite_local]
^https?://133-slm-sdk-online.tytuyoo.com/open/v6/user/LoginBySnsIdNoVerify url script-response-body https://github.com/Doreou/csg/blob/main/csg.js

[mitm]
hostname = 133-slm-sdk-online.tytuyoo.com

***************************
var obj = JSON.parse($response.body || '{}');
console.log($response.body);
console.log("status: " + obj.result["360.vip"]);
if (obj.result["360.vip"] == 0) {
	obj.result["360.vip"] = 1;
}

$done({body});