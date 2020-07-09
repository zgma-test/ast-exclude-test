const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const util = require('./util');

exports.handler = async (event) => {

    try {
        let data = await ddb.scan({
            TableName: "MFTGMessageTestData"
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};