const isObjectEqual = require('./index');

describe('isObjectEqual', () => {

    test('Compare two objects on first level have same key', () => {
        const obj1 = {
            keyString: 'some string',
            keyNumber: 10
        }

        const obj2 = {
            keyString: 'some string',
            keyNumber: 10
        }

        const obj3 = {
            keyString: 'some string'
        }

        const firstComparisionResult = isObjectEqual(obj1, obj2);
        expect(firstComparisionResult).toBeTruthy();

        const secondComparisionResult = isObjectEqual(obj1, obj3);
        expect(secondComparisionResult).toBeFalsy();
    });

    test('Compare two object keys and value(s) on first level', () => {
        const obj1 = {
            keyString: 'some string',
            keyNumber: 10
        }

        const obj2 = {
            keyString: 'some string',
            keyNumber: 10
        }

        const obj3 = {
            keyString: 'some string',
            keyNumber: 19
        }

        const obj4 = {
            keyString: 'some string',
            keyBoolean: true
        }

        const firstComparisionResult = isObjectEqual(obj1, obj2);
        expect(firstComparisionResult).toBeTruthy();

        const secondComparisionResult = isObjectEqual(obj1, obj3);
        expect(secondComparisionResult).toBeFalsy();

        const thirdComparisionResult = isObjectEqual(obj1, obj4);
        expect(thirdComparisionResult).toBeFalsy();
    });

})