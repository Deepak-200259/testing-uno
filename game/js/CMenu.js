function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    // var _oButFullscreen;
    
    var _pStartPosAudio;
    // var _pStartPosFullscreen;
    
    // var _fRequestFullScreen = null;
    // var _fCancelFullScreen = null;    
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        _oBg.scaleX = _oBg.image.width < CANVAS_WIDTH ? 1.2 : 1;
        _oBg.scaleY = _oBg.image.height < CANVAS_HEIGHT ? 1.2 : 1;
        _oBg.x = _oBg.image.width < CANVAS_WIDTH ? UI_SIZES_AND_POSITIONS[currentUI].menu_oBg(_oBg).x - 100 : UI_SIZES_AND_POSITIONS[currentUI].menu_oBg(_oBg).x;
        _oBg.y = _oBg.image.height < CANVAS_HEIGHT ? UI_SIZES_AND_POSITIONS[currentUI].menu_oBg(_oBg).y - 100 : UI_SIZES_AND_POSITIONS[currentUI].menu_oBg(_oBg).y;
        s_oStage.addChild(_oBg);
        if(currentUI=="MOBILE_DEVICE"){
            // var _oBgMask = createBitmap(s_oSpriteLibrary.getSprite('bg_mask'));
            // _oBgMask.scaleX = _oBgMask.image.width < CANVAS_WIDTH ? 1.2 : 1;
            // _oBgMask.scaleY = _oBgMask.image.height < CANVAS_HEIGHT ? 1.2 : 1;
            // _oBgMask.x = _oBgMask.image.width < CANVAS_WIDTH ? UI_SIZES_AND_POSITIONS[currentUI].menu_oBgMask(_oBgMask).x - 100 : UI_SIZES_AND_POSITIONS[currentUI].menu_oBgMask(_oBgMask).x;
            // _oBgMask.y = _oBgMask.image.height < CANVAS_HEIGHT ? UI_SIZES_AND_POSITIONS[currentUI].menu_oBgMask(_oBgMask).y - 100 : UI_SIZES_AND_POSITIONS[currentUI].menu_oBgMask(_oBgMask).y;
            // s_oStage.addChild(_oBgMask); 
        }
        if(currentUI=="MOBILE_DEVICE" || currentUI=="IPAD_DEVICE_3X4" || currentUI=="IPAD_DEVICE"){
            _oBgLogo = createBitmap(s_oSpriteLibrary.getSprite('start_bg_logo')); 
            _oBgLogo.x = UI_SIZES_AND_POSITIONS[currentUI].menu_oBgLogo(_oBgLogo).x;
            _oBgLogo.y = UI_SIZES_AND_POSITIONS[currentUI].menu_oBgLogo(_oBgLogo).y;
            _oBgLogo.scaleX = UI_SIZES_AND_POSITIONS[currentUI].menu_oBgLogo(_oBgLogo).scale
            _oBgLogo.scaleY = UI_SIZES_AND_POSITIONS[currentUI].menu_oBgLogo(_oBgLogo).scale;
            s_oStage.addChild(_oBgLogo);
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton(UI_SIZES_AND_POSITIONS[currentUI].but_play(oSprite).x,UI_SIZES_AND_POSITIONS[currentUI].but_play(oSprite).y,oSprite,s_oStage, UI_SIZES_AND_POSITIONS[currentUI].but_play(oSprite).scale);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
     
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: UI_SIZES_AND_POSITIONS[currentUI].audio_icon(oSprite).x, y: UI_SIZES_AND_POSITIONS[currentUI].audio_icon(oSprite).y};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage, UI_SIZES_AND_POSITIONS[currentUI].audio_icon(oSprite).scale);
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
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x: oSprite.width/4 +10, y: (oSprite.height/2)+10};   
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        }
        */

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;});  
        
        if(s_oSoundtrack !== null){
            setVolume("soundtrack",1);
        }

        this.refreshButtonPos();
    };
    
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        _oFade.visible = false;
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        /*
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }
        */
        
        s_oStage.removeAllChildren();

        s_oMenu = null;
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
    
    
    this.resetFullscreenBut = function(){
    // if (_fRequestFullScreen && screenfull.isEnabled){
    //     _oButFullscreen.setActive(s_bFullscreen);
    // }
    };
    
    this._onFullscreen = function(){
        // if(s_bFullscreen) { 
        // _fCancelFullScreen.call(window.document);
        // }else{
        // _fRequestFullScreen.call(window.document.documentElement);
        // }
        
        // sizeHandler();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onButPlayRelease = function(){
        this.unload();
        $(s_oMain).trigger("start_session");
        // Removed the select player screen and changed it to defaultly select 4 players. 
        NUM_PLAYERS = 4;
        $(s_oMain).trigger("select_players",4);
        s_oMain.gotoGame();
    };
    
    s_oMenu = this;
    
    this._init();
}

var s_oMenu = null;