function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(genderFilter => genderFilter.gender === gender).map(ageUsers => ageUsers.age).reduce((acc, item, index, arr) => {
        acc+=item;
        if(index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);

}