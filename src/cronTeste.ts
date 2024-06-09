import { APIGatewayProxyHandler } from "aws-lambda";
import {prismaClientDatabase} from "./database";

exports.handler = async (event: APIGatewayProxyHandler ) => {

    const result = await prismaClientDatabase.user.findMany()
    console.log(result);

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify('Function executed successfully!'),
    // };
};