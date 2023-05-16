/***************************
QuantumultX:

[rewrite_local]
^https?://133-slm-sdk-online.tytuyoo.com/open/v6/user/LoginBySnsIdNoVerify url script-response-body https://raw.githubusercontent.com/Doreou/csg/main/csg.js

[mitm]
hostname = 133-slm-sdk-online.tytuyoo.com

***************************/
var body = $response.body;
var obj = JSON.parse(body);
if (obj.result["360.vip"] == 0) {
	obj.result["360.vip"] = 1;
}

$done({ body: JSON.stringify(obj) });