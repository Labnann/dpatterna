import {SvelteComponent} from "svelte";


interface ICommand{
    execute() : void;
    unExecute() : void;
}

export class Light {
    get light(): SvelteComponent {
        return this._light;
    }


   private readonly _light : SvelteComponent ;

    private _red_status = 0;
    private _is_on = true;
    private  _is_red = false;

    constructor(light : SvelteComponent) {
        this._light = light;

        // this.light.bind(light);
    }


    turnOn(){
        this._light.src = `./images/light-receiver/on.png`;
        this._is_on = true;
        this._is_red = false;
    }

    turnOff(){
        this._is_on = false;
        this._light.src = `./images/light-receiver/off.png`;
    }

    makeRed(){
        if(!this._is_on) return;
        this._is_red = true;
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

    private _updateRed(){
        if(this._is_on &&this._is_red)
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


    constructor(lightImg: SvelteComponent) {
        const light = new Light(lightImg);
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
         RED_INTENSITY_UP = 2

}