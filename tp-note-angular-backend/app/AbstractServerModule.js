class AbstractServerModule {
    constructor(name,app,port) {
        this._name = name;
        this._app = app;
        this._port = port;
    }
    manageRoutes(){
        //Will be defined in child class
    }

    init(){
        this.manageRoutes();
        this.app.listen(this.port, () => console.log(this.name + ' now browse to localhost:' + this.port));
    }

    get app() {
        return this._app;
    }

    set app(value) {
        this._app = value;
    }

    get port() {
        return this._port;
    }

    set port(value) {
        this._port = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
export {AbstractServerModule};
