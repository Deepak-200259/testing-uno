function CGfxButton(iXPos,iYPos,oSprite, oParentContainer, scaling){
    
    var _bDisabled;
    var _iScaleFactor;
    var _iScaleDownFactor;
    var _iScaleUpFactor;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListenerDown;
    var _oListenerUp;
    
    var _oButton;
    var _oTween;
    var _oParent;
    
    this._init =function(iXPos,iYPos,oSprite, oParentContainer, scaling){
        _bDisabled = false;
        
        _iScaleFactor = 1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = createBitmap( oSprite);
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        if(currentUI === "MOBILE_DEVICE"){
            _oButton.scaleX =   _oButton.scaleY = scaling ? scaling : _iScaleFactor * 0.75;
            _iScaleDownFactor = _iScaleFactor * 0.675;
            _iScaleUpFactor = _iScaleFactor * 0.75;
        } else if (currentUI === "IPAD_DEVICE" || currentUI === "IPAD_DEVICE_3X4") {
            _oButton.scaleX =   _oButton.scaleY = scaling ? scaling : _iScaleFactor * 0.75;
            _iScaleDownFactor = _iScaleFactor * 0.675;
            _iScaleUpFactor = _iScaleFactor * 0.75;
        }else{
            _oButton.scaleX = _iScaleFactor;  
            _iScaleDownFactor = 0.9;                       
            _iScaleUpFactor = _iScaleFactor;
        }
        _oButton.regX = oSprite.width/2;
        _oButton.regY = oSprite.height/2;
        _oButton.cursor = "pointer";
        oParentContainer.addChild(_oButton);        
        
        this._initListener();
    };
    
    this.unload = function(){
        _oButton.off("mousedown", _oListenerDown);
        _oButton.off("pressup" , _oListenerUp); 

        
       oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this.setClickable = function(bVal){
        _bDisabled = !bVal;
    };
    
    this._initListener = function(){
        _oListenerDown = _oButton.on("mousedown", this.buttonDown);
        _oListenerUp = _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.isVisible = function(){
        return _oButton.visible;
    };
    
    this.buttonRelease = function(){
        if(_bDisabled){
            return;
        }
        _oButton.scaleX = _iScaleUpFactor;
        _oButton.scaleY = _iScaleUpFactor;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP]);
        }
    };
    
    this.buttonDown = function(){
        if(_bDisabled){
            return;
        }
        _oButton.scaleX = _iScaleDownFactor;
        _oButton.scaleY = _iScaleDownFactor;
        
        playSound("click",1,false);

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN]);
       }
    };

    
    this.pulseAnimation = function () {
        _oTween = createjs.Tween.get(_oButton, 
            {loop:true}).to({
                scaleX: _iScaleDownFactor, 
                scaleY: _iScaleDownFactor
            }, 850, createjs.Ease.quadOut
        )
        .to({
            scaleX: _iScaleUpFactor, 
            scaleY: _iScaleUpFactor
        }, 650, createjs.Ease.quadIn)
    };

    this.trembleAnimation = function () {
        _oTween = createjs.Tween.get(_oButton, {loop:true}).to({rotation: 10}, 75, createjs.Ease.quadOut)
                .to({rotation: -10}, 140, createjs.Ease.quadIn)
                .to({rotation: 0}, 75, createjs.Ease.quadIn)
    };
    
    this.removeAnimation = function(){
        _oButton.scale = _iScaleUpFactor;
        _oButton.rotation = 0;
        createjs.Tween.removeTweens(_oButton);
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.setImage = function(oSprite){
        _oButton.image = oSprite;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    this.blinkAnimation = function () {
        _oTween = createjs.Tween.get(_oButton, { loop: true })
            .to({ alpha: 0.2 }, 500, createjs.Ease.quadOut)
            .to({ alpha: 1 }, 500, createjs.Ease.quadIn);
    };

    this.removeBlinkAnimation = function(){
        _oButton.scale = _iScaleUpFactor;
        _oButton.alpha = 1;
        createjs.Tween.removeTweens(_oButton);
    };

    _oParent = this;
    this._init(iXPos,iYPos,oSprite, oParentContainer, scaling ? scaling : null);
    
    return this;
}