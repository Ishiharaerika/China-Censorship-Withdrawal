let url = 'https://app-api.pixiv.net'
//DO NOT ABUSE

let headers = $request.headers
$httpClient.get(url, (error, response, data) => {
    if (error) {
        $done({})
    }
    else {
        headers['Authorization'] = `Bearer ${data}`
        $done({headers})
    }
})