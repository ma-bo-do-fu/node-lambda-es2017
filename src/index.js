import cube from './lib/cube';
import asyncFunc from './lib/asyncfunc';

exports.handler = async (event, context, callback) => {
  const result = await asyncFunc();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success',
      input: event,
      loadModule: `${cube(2)}`,
      asyncResult: result,
    }),
  };
  callback(null, response);
};
