const isObjectEqual = require('./index');
const fs = require('fs');

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

    test('Compare two object keys and value(s) on mutiple level', () => {
        const obj1 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObject: {
                food: 'some food'
            }
        }

        const obj2 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObject: {
                food: 'some food'
            }
        }

        const obj3 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObject: {
                food: 'japan food'
            }
        }

        const obj4 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObject: {
                interest: 'football'
            }
        }

        const obj5 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObjectLevel1: {
                keyObjectLevel2: {
                    food: 'some food'
                }
            }
        }

        const obj6 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObjectLevel1: {
                keyObjectLevel2: {
                    food: 'some food'
                }
            }
        }

        const obj7 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObjectLevel1: {
                keyObjectLevel2: {
                    food: 'not the same food'
                }
            }
        }

        const obj8 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObjectLevel1: {
                keyObjectLevel2: {
                    food: 'same food'
                }
            },
            keyObject2Level1: {
                keyObjectLevel2: {
                    food: 'same food'
                }
            }
        }

        const obj9 = {
            keyString: 'some string',
            keyNumber: 10,
            keyObjectLevel1: {
                keyObjectLevel2: {
                    food: 'same food'
                }
            },
            keyObject2Level1: {
                keyObjectLevel2: {
                    food: 'not the same food'
                }
            }
        }

        const firstComparisionResult = isObjectEqual(obj1, obj2);
        expect(firstComparisionResult).toBeTruthy();

        const secondComparisionResult = isObjectEqual(obj1, obj3);
        expect(secondComparisionResult).toBeFalsy();

        const thirdComparisionResult = isObjectEqual(obj1, obj4);
        expect(thirdComparisionResult).toBeFalsy();

        const notWithSameStructure = isObjectEqual(obj5, obj4);
        expect(notWithSameStructure).toBeFalsy();

        const withSameStructure = isObjectEqual(obj5, obj6);
        expect(withSameStructure).toBeTruthy();

        const withSameStructureButDiffValue = isObjectEqual(obj5, obj7);
        expect(withSameStructureButDiffValue).toBeFalsy();

        const withSameButMoreStructure = isObjectEqual(obj8, obj9);
        expect(withSameButMoreStructure).toBeFalsy();

    });

    test('Compare using package-lock.,json', () => {
        const packageLock1 = JSON.parse(fs.readFileSync('package-lock.json'));
        const notTheSamepackageLock = JSON.parse(fs.readFileSync('not-the-same-package-lock.json'));

        const comparePackageLock = isObjectEqual(packageLock1, packageLock1);
        expect(comparePackageLock).toBeTruthy();

        const compareDiffPackageLock = isObjectEqual(packageLock1, notTheSamepackageLock);
        expect(compareDiffPackageLock).toBeFalsy();
    })

})