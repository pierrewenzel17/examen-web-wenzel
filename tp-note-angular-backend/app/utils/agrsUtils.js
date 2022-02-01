import minimist from "minimist"
const args = minimist(process.argv.slice(2));

function getArgument(argumentToFind) {
    return  args[argumentToFind];
}

function checkIfArgumentExist(argumentToFind) {
    let argument = getArgument(argumentToFind);
    return (argument != null);
}

export {checkIfArgumentExist, getArgument};


