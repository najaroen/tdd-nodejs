exports.list = [1,3,4,56];

exports.isSum = ({a=0, b=0}) => {
    return a+b;
}

exports.isCallBack = (cb) => {
    cb('callback')
}

exports.isCallBackPromise = () => {
    return new  Promise(((resolve, reject) => {
        // resolve('promise')
        reject('error')
    }))
}