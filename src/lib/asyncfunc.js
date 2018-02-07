function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 1000);
    });
}

export default async function asyncFunc(params) {
    var result = await resolveAfter2Seconds();
    return result;
}