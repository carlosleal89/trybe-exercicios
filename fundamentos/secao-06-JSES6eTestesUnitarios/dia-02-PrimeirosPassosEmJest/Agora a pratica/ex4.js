function techList(array, name) {
    if (!array.length) { 
        return 'Vazio!'
    }
    const arrayTechs = array.sort();
    const userName = name;
    let userObj = [];
    for (let techs of arrayTechs) {
        const obj = {
            tech: techs,
            name: name,
        }
        userObj.push(obj);        
    }
    return userObj;
}

console.log(techList(['py', 'css', 'js', 'php'], 'carlos'));
module.exports = techList;