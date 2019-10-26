const isObjectEqual = (obj1, obj2) => {
    try {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
        let isEqual = true;

        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }

        for (let key of obj1Keys) {
            if (typeof obj1[key] === 'object') {
                isEqual = isEqual && isObjectEqual(obj1[key], obj2[key]);
            }
            else if (obj1[key] !== obj2[key]) {
                isEqual = false;
            }
        }

        return isEqual;
    }
    catch (err) {
        return false
    }

}

module.exports = isObjectEqual;