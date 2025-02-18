function CPanelTutorial (){
    
    var _oContainer;
    var _oPanel;
    var _oButNext;
    var _oButBack;
    var _oButSkip;
    var _iCurrentPage;
    var _oContainerPage;
    
    this.init = function () {
        _oContainerPage = new createjs.Container();
        _iCurrentPage = 0;
        
        _oContainer = new createjs.Container();
        _oContainer.x = CANVAS_WIDTH/2;
        _oContainer.y = CANVAS_HEIGHT/2;
        _oPanel = new createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        _oPanel.regX = 796/2;
        _oPanel.regY = 517/2;

        _oPanel.scaleX = UI_SIZES_AND_POSITIONS[currentUI].msg_box(_oPanel).scaleX;
        _oPanel.scaleY = UI_SIZES_AND_POSITIONS[currentUI].msg_box(_oPanel).scaleY;
        _oPanel.alpha = UI_SIZES_AND_POSITIONS[currentUI].msg_box(_oPanel).alpha;
        _oContainer.addChild(_oPanel);
        s_oStage.addChild(_oContainer);
        
        _oButNext = new CGfxButton(UI_SIZES_AND_POSITIONS[currentUI].panel_left_arrow(_oContainer).x,UI_SIZES_AND_POSITIONS[currentUI].panel_left_arrow(_oContainer).y,s_oSpriteLibrary.getSprite("but_arrow"),_oContainer, UI_SIZES_AND_POSITIONS[currentUI].panel_left_arrow(_oContainer).scale);
        _oButNext.addEventListener(ON_MOUSE_DOWN,this.onButNext,this);
        
        var oSprite = s_oSpriteLibrary.getSprite("but_arrow");
        _oButBack = new CGfxButton(UI_SIZES_AND_POSITIONS[currentUI].panel_right_arrow(_oContainer).x,UI_SIZES_AND_POSITIONS[currentUI].panel_right_arrow(_oContainer).y,oSprite,_oContainer, UI_SIZES_AND_POSITIONS[currentUI].panel_right_arrow(_oContainer).scale);
        _oButBack.addEventListener(ON_MOUSE_DOWN,this.onButBack,this);
        _oButBack.getButtonImage().rotation = 180;
        
        _oButSkip = new CGfxButton(UI_SIZES_AND_POSITIONS[currentUI].panel_but_skip(_oContainer).x,UI_SIZES_AND_POSITIONS[currentUI].panel_but_skip(_oContainer).y,s_oSpriteLibrary.getSprite("but_skip"),_oContainer, UI_SIZES_AND_POSITIONS[currentUI].panel_but_skip(_oContainer).scale);
        _oButSkip.addEventListener(ON_MOUSE_DOWN,this.onButSkip,this);
        this.loadPage(_iCurrentPage);
        
    };
    
    this.loadPage = function (iPage){
        var oText;
        var oExampleCard;
        oText = new CTLText(_oContainerPage, 
            -300, UI_SIZES_AND_POSITIONS[currentUI].panel_heading().y, 600, 50, 
            UI_SIZES_AND_POSITIONS[currentUI].panel_heading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
            0, 0,
            TEXT_WELCOME,
            true, true, true,
            false );
        switch (iPage){
            case 0: 
                _oButBack.setVisible(false);
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL1,GAME_SCORE_WIN),
                    true, true, true,
                    false );

                
                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,"card_1_7",0,0);
                oExampleCard.setAnimTutorial("tutorial");
                _oContainer.addChild(_oContainerPage);
                break;
                
                
            case 1:
                _oButBack.setVisible(true);
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL2, CARD_SCORE[12]),
                    true, true, true,
                    false );

                        

                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,"card_0_12",0,0);
                oExampleCard.setAnimTutorial("draw2tutorial");
                break;
                
                
            case 2:
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL3, CARD_SCORE[10]),
                    true, true, true,
                    false );
                    
                
                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,"card_1_7",0,0);
                oExampleCard.setAnimTutorial("stopTurnTutorial");
                break;
                
                
            case 3:
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL4, CARD_SCORE[11]),
                    true, true, true,
                    false );
                    
         
                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,"card_1_7",0,0);
                oExampleCard.setAnimTutorial("changeClockWiseTutorial");
                break;
            
            
            case 4:
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL5, CARD_SCORE[13]),
                    true, true, true,
                    false );
                    
                
                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,FOTOGRAM_COLOR,0,0);
                oExampleCard.instantShow();
                break;
                
                
            case 5:
                _oButNext.setVisible(true);
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL6, CARD_SCORE[14]),
                    true, true, true,
                    false );
                    
                
                oExampleCard =  new CCard(UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().x,
                UI_SIZES_AND_POSITIONS[currentUI].panel_card_pos().y,
                _oContainerPage,FOTOGRAM_DRAW_FOUR,0,0);
                oExampleCard.instantShow();
                break;
                
                
            case 6:
                _oButNext.setVisible(false);
                oText = new CTLText(_oContainerPage, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().left,  
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().top, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().right,
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().bottom, 
                    UI_SIZES_AND_POSITIONS[currentUI].panel_subHeading().font_size, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL7, NUM_PENALTY_CARDS),
                    true, true, true,
                    false );
                    
                
                
                oExampleCard = new createBitmap(s_oSpriteLibrary.getSprite("but_uno"));
                oExampleCard.regX = 100/2;
                oExampleCard.regY = 101/2;
                oExampleCard.x = UI_SIZES_AND_POSITIONS[currentUI].panel_but_uno().x;
                oExampleCard.y = UI_SIZES_AND_POSITIONS[currentUI].panel_but_uno().y;
                oExampleCard.scaleX = UI_SIZES_AND_POSITIONS[currentUI].panel_but_uno().scale;
                oExampleCard.scaleY = UI_SIZES_AND_POSITIONS[currentUI].panel_but_uno().scale;
                _oContainerPage.addChild(oExampleCard);
                break;
        }
    };
    
    this.onButNext = function(){
        _iCurrentPage++;
        _oContainerPage.removeAllChildren();
        this.loadPage(_iCurrentPage);
    };
    
    this.onButBack = function(){
       _iCurrentPage--;
       _oContainerPage.removeAllChildren();
       this.loadPage(_iCurrentPage);
    };
    
    this.onButSkip = function(){
       s_oStage.removeChild(_oContainer);
       s_oGame._startGame();
    };
    
    this.init();
}