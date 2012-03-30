/**
 * Created by JetBrains WebStorm.
 * User: tjk
 * Date: 12-3-28
 * Time: 下午11:35
 * To change this template use File | Settings | File Templates.
 */

(function(document,window){

    var iDO = iDO || {};

    //设备坐标
    iDO.gamma = 0;
    iDO.beta = 0
    iDO.alpha = 0;
    //debug开关
    iDO.debug = true;

    //设备方向
    iDO.direction = ["left","right","up","down"];
    iDO.currentDirection = "left";

    //设备
    iDO._tempGamma = [];



    iDO.status = function(){
        $("#status .gamma em").html(iDO.gamma);
        $("#status .beta em").html(iDO.beta);
        $("#status .alpha em").html(iDO.alpha);
    };
    iDO.directionStatus = function(){
        $("#direction em").html(this.currentDirection);
    }

    iDO.toLeft = function(){
        this.currentDirection = this.direction[0];
    };
    iDO.toRIght = function(){
        this.currentDirection = this.direction[1];
    };
    iDO.toUp = function(){
        this.currentDirection = this.direction[2];
    };
    iDO.toDown = function(){
        this.currentDirection = this.direction[3];
    };

    iDO.showDirection = function(){
        if(this.gamma < 0){
                this.toLeft();
        }else{
                this.toRIght();
        }/*
        if(this.beta < 0){
                this.toUp();
        }else{
                this.toDown();
        }*/
        this.directionStatus();
    };

    //方向感应器
    $(window).bind("deviceorientation",function(){
        //console.log(event);
        iDO.gamma = event.gamma;
        iDO.beta = event.beta;
        iDO.alpha = event.alpha;

        if(iDO.debug) {
            iDO.status();
        }
        iDO.showDirection();
        //console.log(event);
    });

    //方向感应器 for firefox
    $(window).bind("MozOrientation",function(){});




    window.iDO = iDO;

})(document,window);