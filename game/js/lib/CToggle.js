function CToggle(iXPos,iYPos,oSprite,bActive, oParentContainer, scale){
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerUp;
    var _iScaleDownFactor;
    var _iScaleUpFactor;
    
    var _oButton;
    
    this._init = function(iXPos,iYPos,oSprite,bActive, oParentContainer, scale){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/2, height: oSprite.height, regX: (oSprite.width/2)/2, regY: oSprite.height/2}, 
                        animations: {state_true:[0],state_false:[1]}
                   };
                   
         var oSpriteSheet = new createjs.SpriteSheet(oData);
         
         _bActive = bActive;
		_oButton = createSprite(oSpriteSheet, "state_"+_bActive,(oSprite.width/2)/2,oSprite.height/2,oSprite.width/2,oSprite.height);
         
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
        _oButton.scaleX = scale;
        _oButton.scaleY = scale;
        _oButton.stop();
        _oButton.cursor = "pointer";
        oParentContainer.addChild(_oButton);
        if(currentUI==="MOBILE_DEVICE"){
            _iScaleDownFactor = 0.675
            _iScaleUpFactor = 0.75
        } else if(currentUI==="IPAD_DEVICE" || currentUI === "IPAD_DEVICE_3X4"){
            _iScaleDownFactor = 0.675
            _iScaleUpFactor = 0.75
        } else {
            _iScaleDownFactor = 0.9
            _iScaleUpFactor = 1
        } 
        this._initListener();
    };
    
    this.unload = function(){
        _oButton.off("mousedown", _oListenerDown);
        _oButton.off("pressup" , _oListenerUp); 
        
        oParentContainer.removeChild(_oButton);
    };
    
    this._initListener = function(){
        _oListenerDown = _oButton.on("mousedown", this.buttonDown);
        _oListenerUp = _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.setActive = function(bActive){
        _bActive = bActive;
        _oButton.gotoAndStop("state_"+_bActive);
    };
    
    this.buttonRelease = function(){
        _oButton.scaleX = _iScaleUpFactor;
        _oButton.scaleY = _iScaleUpFactor;
        console.log(_iScaleUpFactor);
        
        playSound("click",1,false);
        
        _bActive = !_bActive;
        _oButton.gotoAndStop("state_"+_bActive);

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_bActive);
        }
    };
    
    this.buttonDown = function(){
        _oButton.scaleX = _iScaleDownFactor;
        _oButton.scaleY = _iScaleDownFactor;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN]);
       }
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
         
        };
    this._init(iXPos,iYPos,oSprite,bActive, oParentContainer, scale);
}