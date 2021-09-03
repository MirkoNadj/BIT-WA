const url = "https://localhost:44352/api/";
export async function getData(action, params) {
    let link = url + action;
    if (params && params.length>0) {
        link +="?"+concatParam(params);
    }

    let result = await fetch(link);
    let jsonResult = await result.json();
    return jsonResult;
}

const concatParam = (params) => {
    let resultArray = [];
    params.forEach(element => {
        resultArray.push(`${element.key}=${element.value}`);
    });

    return resultArray.join('&');
}

const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json'}

export async function saveData(action, method, data) {
    let link = url+action;
    var result = await fetch (link, {
        method: method,
        headers: headers,
        body: JSON.stringify(data)
    })

    let jsonResult = await result.json();
    return jsonResult;
}

export async function deleteData(action, id) {
    let link = url+action+"?Id="+id;
    let result = fetch (link, {method:"DELETE", headers:headers});
    let data = await result.json();
    return data;
}