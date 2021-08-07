import {HtmlTag} from "svelte/internal";
import {SvelteComponent} from "svelte";


interface ICommand{
    execute() : void;
    unExecute() : void;
}

export class Light {
    get light(): SvelteComponent {
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


   private readonly _light : SvelteComponent ;

    private _red_status = 0;
    private _is_red = false;

    constructor(light : SvelteComponent) {
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


class LightCommand implements ICommand{

    private _light : Light;
    constructor(light : Light) {
        this._light = light;
    }



    execute(): void {
        this._light.turnOn();

    }

    unExecute(): void {
        this._light.turnOff();
    }

}


class RedCommand implements ICommand{

    private _light : Light;
    constructor(light : Light) {
        this._light = light;
    }


    execute(): void {

        this._light.makeRed();
    }

    unExecute(): void {
    }

}

class RedIntensifierCommand implements ICommand{

    private _light : Light;
    constructor(light : Light) {
        this._light = light;
    }


    execute(): void {
        this._light.increaseRed();

    }

    unExecute(): void {

        this._light.decreaseRed();
    }

}





export class Remote {
    commands: ICommand[] = [];


    constructor(light: Light) {
        this.commands.push(new LightCommand(light));
        this.commands.push(new RedCommand(light));
        this.commands.push(new RedIntensifierCommand(light));
    }


    executeCommand(command: ELightCommand){
        this.commands[command].execute();
    }

    unExecuteCommand(command: ELightCommand){
        this.commands[command].unExecute();
    }

}

export enum ELightCommand{

         POWER = 0,
         RED = 1,
         RED_INTENSITY = 2

}