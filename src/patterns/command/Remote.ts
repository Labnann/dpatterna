import * as console from "console";

interface CommandInterface{
    execute() : void;
    unExecute() : void;
}

export class Light {
    get light(): any {
        return this._light;
    }


   private readonly _light : any ;

    constructor(light : any) {
        this._light = light;
        // this.light.bind(light);
    }


    turnOn(){
        this._light.src = `./images/light-receiver/on.png`;
    }

    turnOff(){

        this._light.src = `./images/light-receiver/off.png`;
    }
}


class LightCommand implements CommandInterface{
    execute(): void {
    }

    unExecute(): void {
    }

}





export class Remote {

     _commands = {
        on: "on",
        off: "off",
        red0: "red/0",
        red1: "red/1",
        red2: "red/2",
        red3: "red/3"
    };



}