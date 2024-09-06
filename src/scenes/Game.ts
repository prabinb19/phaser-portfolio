import { Scene } from 'phaser';
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    private background!: Phaser.GameObjects.TileSprite;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('game');
    }

    create ()
    {
        const width = this.scale.width;
        const height = this.scale.height;

        this.background = this.add.tileSprite(0, 0, width, height, TextureKeys.Background).setOrigin(0, 0).setScrollFactor(0,0);

        const mouse = this.physics.add.sprite(width * 0.5, height -30, TextureKeys.RocketMouse, 'rocketmouse_fly01.png').setOrigin(0.5,1).play(AnimationKeys.RocketMouseRun);
        const body = mouse.body as Phaser.Physics.Arcade.Body;
        body.setCollideWorldBounds(true);
        
        //velocity of infinite runner
        body.setVelocityX(200);
        
        //setting the physics world bounds
        this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height - 30);
        
        this.cameras.main.startFollow(mouse);
        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height);
    }
    update(t: number, dt: number) {
      this.background.setTilePosition(this.cameras.main.scrollX);
    }
}