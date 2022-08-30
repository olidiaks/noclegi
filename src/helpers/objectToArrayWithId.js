export function objectToArrayWithId(object) {
    const array = [];
    for (const objectKey in object) {
        array.push({...object[objectKey], id: objectKey});
    }
    return array;
}