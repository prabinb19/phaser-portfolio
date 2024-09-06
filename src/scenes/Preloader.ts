import Phaser from 'phaser'
import TextureKeys from "../consts/TextureKeys";
import SceneKeys from "../consts/SceneKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super('preloader');
    }

    preload()
    {
        this.load.image(TextureKeys.Background,'house/bg_repeat_340x640.png')

        //loading an atlas
        this.load.atlas(TextureKeys.RocketMouse,'characters/rocket-mouse.png','characters/rocket-mouse.json');
    }

    create()
    {
        this.anims.create({
            key:AnimationKeys.RocketMouseRun,
            frames: this.anims.generateFrameNames('rocket-mouse',{
                start:1,
                end:4,
                prefix:'rocketmouse_run',
                zeroPad:2,
                suffix:'.png'
            }),
            frameRate:10,
            repeat:-1 //this loops forever
        });
        
       this.scene.start(SceneKeys.Game);
    }
}