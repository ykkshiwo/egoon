cc.Class({
    //-- 继承
    extends: cc.Component,
    //-- 属性
    properties: {
        //-- 
        //-- y轴上的加速度
        accY: -20,
        //-- y轴上的速度
        speedY: 0,
        //-- y轴加速
        isAccY: false,
    },
    //-- 初始化
    onLoad(){
        this.registerInput();
    },

    registerInput () {
        var self = this;
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // set a flag when key pressed
            onKeyPressed: function(keyCode, event) {
                self.accY = 10;
            },
            // unset a flag when key released
            onKeyReleased: function(keyCode, event) {
                self.accY = -20;
            }
        }, self.node);

        // touch input
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                self.accY = 10;
                // don't capture the event
                return true;
            },
            onTouchEnded: function(touch, event) {
                self.accY = -20;
            }
        }, self.node);
    },

    //-- 电场开启
    eleOpen: function(){
        this.accY = 10;
    },

    //-- 更新
    update (dt) {
        this.speedY += this.accY;
        this.node.y += dt * this.speedY;
    },
});
