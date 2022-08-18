import { Game } from "../../Interfaces/Game";

interface GameState {

games:Game[] |null;
singleGame:Game |null;
Loading:boolean;

}

const initialState : GameState ={
    games:[],
    singleGame:null,
    Loading: false;

}