import cube from './lib/cube';

exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'success',
            input: event,
            module: `${cube(2)}`
        }),
    };

    callback(null, response);
};
