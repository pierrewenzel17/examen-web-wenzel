import { createRequire } from "module";
const require = createRequire(import.meta.url);
const LIST_MUSICS = require("../data/music.json");


// import * as LIST_MUSICS from "../data/music.json";
import {base64_encode} from "./utils/encodingUtils.js";

var MUSICS = [...LIST_MUSICS];
MUSICS.map(music =>{
    music.picture = base64_encode(music.picture);
})


class ApiRestMusics {

    static listAll(req,res) {
        console.log('List all MUSICS');
        if (!MUSICS || MUSICS.length === 0) {
            return res.status(204).json();
        }
        return res.status(200).json(MUSICS);
    }


    static findByID(req,res){
        let idToSearch = ApiRestMusics.getId(req);
        console.log("Find music with ID " + idToSearch);
        let musicFound = MUSICS.find(music => music.id === idToSearch);
        if (!musicFound) {
            return res.status(204).json();
        }
        res.status(200).json(musicFound);
    }

    static findByTitle(req,res) {
        let titleToSearch = ApiRestMusics.getTitle(req);
        console.log("Find music with title " + titleToSearch);
        let musicsFound = MUSICS.filter(music => music.title.toLowerCase().includes(titleToSearch.toLowerCase()));
        if (!musicsFound) {
            return res.status(204).json();
        }
        res.status(200).json(musicsFound);
    }


    static findRandom(req,res) {
        console.log("Find random Music ");
        let musicFound = MUSICS[Math.floor(Math.random()*MUSICS.length)];
        if (!musicFound) {
            return res.status(204).json();
        }
        res.status(200).json(musicFound);
    }

    static create(req,res){
        let musicToADD = req.body;
        console.log('Create music titled ' + musicToADD.title);
        let checkIfExists = MUSICS.find(music => music.title === musicToADD.title);
        if (checkIfExists) {
            return res.status(409).json({ error: 'Music with the title "' + musicToADD.title + '" already exists !' });
        }

        delete musicToADD.id;
        musicToADD.id = ApiRestMusics.createId();

        if(musicToADD.styles === "" || musicToADD.styles === undefined ){
            musicToADD.styles = [];
        }

        MUSICS.push(musicToADD);
        return res.status(200).json(musicToADD);
    }

    static update(req,res) {
        let idForUpdate = ApiRestMusics.getId(req);
        console.log('Update music with id ' + idForUpdate);
        let musicInfoForUpdate = req.body;

        let index = MUSICS.findIndex(music => music.id === idForUpdate);

        if (index === -1) {
            return res.status(404).json({ error: 'The music with id ' + idForUpdate + 'doesn\'t exist !' });
        }

        Object.assign(MUSICS[index], musicInfoForUpdate);

        return res.status(200).json(MUSICS[index]);
    }

    static deleteById(req, res) {
        let idForDelete = ApiRestMusics.getId(req);
        console.log('Delete music with id ' + idForDelete);

        let index = MUSICS.findIndex(music => music.id === idForDelete);

        if (index === -1) {
            return res.status(404).json({ error: 'The music with id ' + idForDelete + 'doesn\'t exist !' });
        }

        MUSICS.splice(index, 1);

        if (!MUSICS || MUSICS.length === 0) {
            return res.status(204).json();
        }

        return res.status(200).json(MUSICS);
    }

    static getParam(req, param) {
        return req.params[param];
    }

    static getId(req) {
        return this.getParam(req, 'id');
    }

    static getTitle(req) {
        return this.getParam(req, 'title');
    }

    static createId() {
        return new Date().getTime() + '';
    }

    static parseDate(stringDate) {
        if(stringDate !== undefined){
            const dates = stringDate.split('/');
            return new Date(dates[2] + '/' + dates[1] + '/' + dates[0]).getTime();
        }else{
            throw new Error("stringDate est indéfini ");
        }
    }


}



export {ApiRestMusics};
