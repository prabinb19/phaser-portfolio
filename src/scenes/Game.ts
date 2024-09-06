import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('game');
    }
    create ()
    {
        const width = this.scale.width;
        const height = this.scale.height;

        this.add.tileSprite(0, 0,width,height, 'background').setOrigin(0, 0);
        
        this.add.sprite(width*0.5, height*0.5, 'rocket-mouse', 'rocketmouse_fly01.png').play('rocket-mouse-run');
    }

}
