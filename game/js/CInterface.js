function CInterface(){
    var _oAudioToggle;
    // var _oButFullscreen;
    var _pStartPosColor;
    var _oColorSprite;
    
    // var _fRequestFullScreen = null;
    // var _fCancelFullScreen = null;
    
    var _pStartPosAudio;
    // var _pStartPosFullscreen;
    
    
    var _oContainer;
    
    this._noOfTimesSwapped = 0;
    this._oSwapColorButton = null;

    this._init = function(){      
        
        _oContainer = new createjs.Container();
        var oExitX;        
        
        _pStartPosAudio = {x: UI_SIZES_AND_POSITIONS[currentUI].game_audio_icon().x, y: UI_SIZES_AND_POSITIONS[currentUI].game_audio_icon().y};
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, _oContainer,
                UI_SIZES_AND_POSITIONS[currentUI].game_audio_icon().scale);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
       
        /*
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            var oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x: 50, y: 50};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,_oContainer);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        }
        */

        var oSprite = s_oSpriteLibrary.getSprite('colors');
        var oData = {   
                        images: [oSprite], 
                        frames: {width: 103, height: 102,regX:103/2,regY:102/2}, 
                        animations: {  red: [0],green: [1],blue: [2],yellow: [3]}
                        
        };

        var _oSpriteSheetColors = new createjs.SpriteSheet(oData);
        _pStartPosColor = {x:UI_SIZES_AND_POSITIONS[currentUI].game_colors().x,y:UI_SIZES_AND_POSITIONS[currentUI].game_colors().y};
        _oColorSprite = new createjs.Sprite(_oSpriteSheetColors,0);
        _oColorSprite.stop();
        _oColorSprite.x = _pStartPosColor.x;
        _oColorSprite.y = _pStartPosColor.y;
        _oColorSprite.scaleX = UI_SIZES_AND_POSITIONS[currentUI].game_colors().scale;
        _oColorSprite.scaleY = UI_SIZES_AND_POSITIONS[currentUI].game_colors().scale;
        
        // Add custom button at 25% below the center of the screen
        var swapColor = s_oSpriteLibrary.getSprite('but_swap_color');
        var buttonX = UI_SIZES_AND_POSITIONS[currentUI].game_but_swap_color().x;
        var buttonY = UI_SIZES_AND_POSITIONS[currentUI].game_but_swap_color().y;
        this._oSwapColorButton =  new CGfxButton(buttonX,buttonY,swapColor,_oContainer, 
            UI_SIZES_AND_POSITIONS[currentUI].game_but_swap_color().scale);
        this._oSwapColorButton.setVisible(true)
        this._oSwapColorButton.blinkAnimation()  
        s_oStage.addChild(_oContainer);
        this.refreshButtonPos();
    };
    
    this.refreshColor = function(n){
        _oColorSprite.gotoAndStop(n);
        s_oStage.addChildAt(_oColorSprite, currentUI ==="DESKTOP_DEVICE" ? 1 : 4);
    };
    
    
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        /*
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }        
        */
        if (this._oSwapColorButton) {
            this._oSwapColorButton.unload();
            this._oSwapColorButton = null;
        }

        s_oInterface = null;
    };
    
    this.refreshButtonPos = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX,s_iOffsetY + _pStartPosAudio.y);
        }

        /*
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
        */
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    

    this.resetFullscreenBut = function(){
    // if (_fRequestFullScreen && screenfull.isEnabled){
    //     _oButFullscreen.setActive(s_bFullscreen);
    // }
    };

    this._onFullscreen = function(){
    //     if(s_bFullscreen) { 
    //     _fCancelFullScreen.call(window.document);
    // }else{
    //     _fRequestFullScreen.call(window.document.documentElement);
    // }
    
    // sizeHandler();
    };
    
    s_oInterface = this;
    
    this._init();
    
    return this;
}

var s_oInterface = null;