import {AbstractServerModule} from "./AbstractServerModule.js";
import {ApiRestMusics} from "./apiRestMusics.js";

class RESTModule extends AbstractServerModule{
    constructor(name, app, port) {
        super(name, app, port);
    }

    manageRoutes(){
        //GET
        this.app.get("/musics/",ApiRestMusics.listAll);
        this.app.get("/musics/random",ApiRestMusics.findRandom);
        this.app.get("/musics/title/:title",ApiRestMusics.findByTitle);
        this.app.get("/musics/:id",ApiRestMusics.findByID);

        //POST
        this.app.post("/musics",ApiRestMusics.create);

        //PUT
        this.app.put("/musics/:id",ApiRestMusics.update);

        //DELETE
        this.app.delete("/musics/:id",ApiRestMusics.deleteById);
    }

}

export {RESTModule};
