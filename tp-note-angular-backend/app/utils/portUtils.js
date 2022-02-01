import {getArgument} from "./agrsUtils.js"

export function getPort() {
    let port = getArgument("port");
    if(port == null){
        port = 3000;
    }
    return port;
}
