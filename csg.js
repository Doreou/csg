***************************
QuantumultX:

[rewrite_local]
^https?://133-slm-sdk-online.tytuyoo.com/open/v6/user/LoginBySnsIdNoVerify url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js

[mitm]
hostname = 133-slm-sdk-online.tytuyoo.com

***************************
var obj = JSON.parse($response.body || '{}');
if (obj.result["360.vip"] == 0) {
	obj.result["360.vip"] = 1;
}