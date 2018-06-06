cc.Class({
    extends: cc.Component,

    properties: {
        e: {
            default: null,
            type: cc.Node
        },
        jstUp: {
            default: null,
            type: cc.Node
        },
        jstDown: {
            default: null,
            type: cc.Node
        },
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // 得分音效资源
        scoreAudio: {
            default: null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function () {
        this.platfondY = this.jstUp.y;
        this.groundY = this.jstDown.y;
        this.eR = this.e.height/2
        this.limitU = this.platfondY - this.eR;
        this.limitD = this.groundY + this.eR;
        console.log("天花板和地面的高度为：", this.platfondY, this.groundY)
        console.log("e的半径为： ", this.eR)
        console.log("限制的y方向： ", this.limitD, this.limitU)
    },

    update: function(){
        if(this.e.y < this.limitD || this.e.y > this.limitU){
            console.log("game over 了")
            this.e.y = 0
        }
    }

});