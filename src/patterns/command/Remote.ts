import * as console from "console";

interface CommandInterface{
    execute() : void;
    unExecute() : void;
}

export class Light {
    get light(): any {
        return this._light;
    }

    private  _lightStatus = {
        on: "on",
        off: "off",
        red0: "red/0",
        red1: "red/1",
        red2: "red/2",
        red3: "red/3"
    };


   private readonly _light : any ;

    private _red_status = 0;
    private _is_red = false;

    constructor(light : any) {
        this._light = light;
        // this.light.bind(light);
    }


    turnOn(){
        this._light.src = `./images/light-receiver/on.png`;
        this._is_red = false;
    }

    turnOff(){
        this._is_red = false;
        this._light.src = `./images/light-receiver/off.png`;
        this._red_status = 0;
    }

    makeRed(){
        this._is_red = true;
        this._red_status = 0;
        this._updateRed();

    }

    increaseRed(){
        if(this._red_status<3)
          this._red_status++;
        this._updateRed();
    }

    decreaseRed(){
        if(this._red_status>0)
            this._red_status--;
        this._updateRed();
    }

    _updateRed(){
        if(this._is_red)
        this._light.src = `./images/light-receiver/red/${this._red_status}.png`;
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