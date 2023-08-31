<?php
// header('Access-Control-Allow-Origin: https://budbo.arcviewcapital.com');

require_once 'vendor/autoload.php';

// $client = new \GuzzleHttp\Client();

// $response = $client->request('POST', 'https://a.klaviyo.com/api/v2/list/UGLD9n/members?api_key=pk_950769f4b6f6d92f4a5f3d3481ceacaf36', [
//     'body' => '{"profiles":[{"email":"' . $_POST['email'] . '","first_name":"' . $_POST['first_name'] . '","last_name":"' . $_POST['last_name'] . '"}]}',
//     'headers' => [
//         'accept' => 'application/json',
//         'content-type' => 'application/json',
//     ],
// ]);

$msg = 'Email: '.$_POST['email'].'<br>'.'Name: '.$_POST['name'].'<br>'.'Phone: '.$_POST['phone'];

mail("investors@budbo.com","New Investor Message",$msg);

echo "Success";
