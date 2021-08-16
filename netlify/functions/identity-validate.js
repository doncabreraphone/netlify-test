exports.handler = async function (event, context, callback) {
    const data = JSON.parse(event.body);
    const { identity, user } = data;

    const responseBody = {"app_metadata": {"roles": ["member"]}};
    callback(null, {
        statusCode: 200,
        body: console.log(JSON.stringify(responseBody)),
    });
}; 


