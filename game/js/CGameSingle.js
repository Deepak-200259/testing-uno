function CGameSingle(oData){

    CGameBase.call(this, oData);
    
    if (s_bFirstGame===true){
        new CPanelTutorial();
    }else{
        this._startGame();
    }
    
};

CGameSingle.prototype = Object.create(CGameBase.prototype);

CGameSingle.prototype._startGame = function(){
    s_bFirstGame = false;
    
    this._oUnoController.setVisible(true);
    this._oInterface._oSwapColorButton.setVisible(true);
    
    this._oUnoController.addEventListener(ON_APPLY_EFFECT, this.applyEffectOnCard, this);
    this._oUnoController.addEventListener(ON_APPLY_PENALITY, this.applyPenality, this);
    this._oUnoController.addEventListener(ON_UNO_CLICK, this._onUnoClick, this);
    
    this._oSummaryPanel.addEventListener(ON_NEXT, this._onConfirmNextMatch, this);
    this._oSummaryPanel.addEventListener(ON_HOME, this.onExit, this);
    this._oInterface._oSwapColorButton.addEventListener(ON_MOUSE_UP, this._onSwapColorClick, this);
    
    this._oMsgBox.addEventListener(ON_HOME, this.onExit, this);
    this.isSwappingColor = false;
    this._setPieces();
};

CGameSingle.prototype._setPieces = function(){
    this._oDeck.initializeDeck();
    this._oDeck.shuffle();
    
    this.getFirstHand();   
};

CGameSingle.prototype.setNewGame = function(){
    for(var i=0; i<this._aPlayersHand.length; i++){
        // this._aPlayersHand[i].setScore(0);
    }
    
    this._oTurnManager.resetFirstPlayer();
};

CGameSingle.prototype.restart = function(){
    this.reset();
    
    this._setPieces();
};

CGameSingle.prototype._checkFirstCardEffect = function(iEffect){
    switch(iEffect){
        case EFFECT_SELECT_COLOR:{
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                this._applySelectColor();
                
                this._oTurnManager.prevTurn();
                
                break;
        }
        case EFFECT_DRAW_FOUR:{
                ///CONSIDER TO SHUFFLE
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();

                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._iCurPlayer;
                this._applyDrawFourEffect();

                
                this._oTurnManager.prevTurn();

                break;
        }
        case EFFECT_STOP:{
                this._applyStopTurn();
                
                
                break;
        }
        case EFFECT_INVERT_TURN:{
                if(NUM_PLAYERS !== 2){
                    this._oTurnManager.nextTurn();
                }    
               
                this._applyInvertTurn();
               
                break;
        }
        case EFFECT_DRAW_TWO_COLORED:{      
                this._applyDrawTwoColored();

                break;
        }
        default:{
                //EFFECT_NORMAL_CARD
                this._oTurnManager.nextTurn();
                this._iCurPlayer = this._oTurnManager.getTurn();
                this._iNextPlayer = this._oTurnManager.getNextPlayer();
                
                if(this._iCurPlayer === 0){
                    this.onInputPlayer(this._iCurPlayer);
                    this._oDeck.enableInputDraw();
                }else {
                    this._oAIManager.selectACard(this._iCurPlayer);
                }
                
                this._aPlayersHand[this._iCurPlayer].setOnTurn();

                break;
        }
    }
};

CGameSingle.prototype.onNextTurn = function(){
    this._bUNO = false;
    
    var iWinner = this.checkWinner();
    if (iWinner!==null){
        this.gameOver(iWinner, iWinner === 0 ? "WIN" : "LOSE");
        
        if(iWinner === 0){
            $(s_oMain).trigger("save_score", this._calculateMatchScore());
        }
        
    }else{
        /////OTHER HANDS
        this.setOffTurn();
        this._oDeck.enableInputDraw();
        
        this._oTurnManager.nextTurn();
        var iThisTurn = this._oTurnManager.getTurn();

        this._iCurPlayer = iThisTurn;
        this._iNextPlayer = this._oTurnManager.getNextPlayer();

        this._aPlayersHand[iThisTurn].setOnTurn();

        //console.log("iThisTurn:" + iThisTurn + " nextTurn:" + this._iNextPlayer);

        if (iThisTurn===0){
            this.onInputPlayer(iThisTurn);
            this._oInterface._oSwapColorButton.setClickable(true);
            if(this._oInterface._noOfTimesSwapped<3) {
                this._oInterface._oSwapColorButton.blinkAnimation();
            }
            if (!this.playerCanPlay(iThisTurn)){
                this._oDeck.setHelp();
            }
        } else {
            this._oAIManager.selectACard(iThisTurn);
            this._oInterface._oSwapColorButton.setClickable(false);
            this._oInterface._oSwapColorButton.removeBlinkAnimation();
            this._oDeck.hideHelp();
        }
        this._oInterface.checkSwap();
    }
};

CGameSingle.prototype.playCard = function(oCard,Event){
    if(this.isSwappingColor === false){
    var iThisTurn = this._oTurnManager.getTurn();
    var bCanPlay = false;
    var iPlayerID = 0;
    if (iThisTurn===iPlayerID){
        bCanPlay = this.cardCanBePlayed(oCard, iThisTurn);
    }
    
    if(bCanPlay){
        this._oCardsContainer.addChildAt(this._oHandsContainer,this._oCardsContainer.numChildren);
        this._aPlayersHand[iThisTurn].setOnTop();
        this._oDeck.disableInputDraw();
        this._oInterface._oSwapColorButton.setClickable(false);
        this.offInputPlayer(iPlayerID);

        
        var oHandGlobalPos =this._aPlayersHand[iThisTurn].getContainerPos();
        var oUsedCardsGlobalPos = this._oUsedCards.getGlobalPosition();

        playSound("card",1,false);

        oCard.moveCard((oUsedCardsGlobalPos.x-oHandGlobalPos.x),oUsedCardsGlobalPos.y-oHandGlobalPos.y,0,300);
        oCard.showCard();

        this._oUsedCards.setChildDepth(4);
    }    }
};

CGameSingle.prototype.playedCard = function(oCard){
    var iThisTurn = this._oTurnManager.getTurn();
    var iParent = this._aPlayersHand[iThisTurn].searchIndexCard(oCard);
    this._oUsedCards.pushCard(new CCard(0,0,this._oUsedCards.getContainer(),oCard.getFotogram(),oCard.getRank(),oCard.getSuit(),oCard.getUniqueID(),0));
    this._oUsedCards.disableInputUsedCards();
    this._oUsedCards.getLastCard().instantShow();
    this._aPlayersHand[iThisTurn].removeCardByIndex(iParent);
    oCard.unload();

    if(this._oUsedCards.getLastCard().getSuit()!==4){
        this._iCurrentColor = this._oUsedCards.getLastCard().getSuit();
        this._oInterface.refreshColor(this._iCurrentColor);
    }
    this._aPlayersHand[iThisTurn].organizeHand(iParent);
    
    //CARD ARRIVED, CONTROL HERE UNO
    this.checkUno(oCard.getEffect());
    
    if(iThisTurn !== 0){
        //CPU WILL ALWAYS CLICK ON UNO
        this._onUnoClick();
    }
};

CGameSingle.prototype._onUnoClick = function(){
    if (this._bUNO === true){
        this._bUNO = false;
        this._aPlayersHand[this._iCurPlayer].checkUno();
    }
};

CGameSingle.prototype._checkIfCardStillNotAvailable = function (){
        var iThisTurn = this._oTurnManager.getTurn();
        if (iThisTurn===0){
            if(this._oInterface._noOfTimesSwapped<3) {
                    this._oInterface._oSwapColorButton.blinkAnimation();
            }
            if (!this.playerCanPlay(iThisTurn)){
                this._oDeck.setHelp();
            }
        }
}

CGameSingle.prototype._onSwapColorClick = function(){
    if(this._oInterface._oSwapColorButton.isVisible() && this._oInterface._noOfTimesSwapped<3){
        if(this._iCurPlayer === 0){
            globalThis.gameManager.showRewardedAd("FOUR_COLORS_SWAP");
        }
    }
};

//////////////////////APPLY EFFECTS ////////////////////////
CGameSingle.prototype.applyEffectOnCard = function(iEffect){
    this._checkEffect(iEffect);
};

CGameSingle.prototype._applySelectColor = function(){
    if(this._iCurPlayer === 0){
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_SELECT_COLOR);
        oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            var oData = {colorindex:iColor};
            this._onActionSelectColor(oData);
        }, this);
    }else{
        var iColor = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        var oData = {colorindex:iColor};
        this._onActionSelectColor(oData);
    } 
    
    
};

CGameSingle.prototype._applyDrawFourEffect = function(){
    if(this._iCurPlayer === 0){
        var oSelectColorPanel = new CSelectColorPanel(EFFECT_DRAW_FOUR);
        oSelectColorPanel.addEventListener(ON_COLOR_SELECTED, function(iColor){
            var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
            this._onActionDrawFour(oData);
            
        }, this);
    }else {
        var iColor = this._oAIManager.onSelectColorCpu(this._iCurPlayer);
        var oData = {playerindex: this._iNextPlayer, colorindex:iColor};
        this._onActionDrawFour(oData);
    }
    
    
};

CGameSingle.prototype._applyStopTurn = function(){
    this._oAnimation.stopTurn().then(()=> {
        this._oTurnManager.nextTurn();
        this._notifyChangeTurn();
    });
};

CGameSingle.prototype._applyInvertTurn = function(){
    this._oTurnManager.changeClockWise();
    if(NUM_PLAYERS === 2){
        ///IN 2 PLAYERS THE CARD BEHAVIOUR IS DIFFERENT
        this._oTurnManager.nextTurn();
    }

    this._oAnimation.changeClockWise(s_oGame._oTurnManager.getClockWise()).then(()=> {
        this._notifyChangeTurn();
    });
};

CGameSingle.prototype._applyDrawTwoColored = function(){
    var iDrawType = DRAW_TYPE_DRAW2_COLORED;
    var iNumberOfCards = 2;
    var iDelay = 0;
    var iIndexPlayer = this._iNextPlayer;

    this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
};

CGameSingle.prototype._applyNormalCardEffect = function(){
    this._notifyChangeTurn();
};
/////////////////////////////////////////////////////

CGameSingle.prototype.drawCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){   
    var bPenality = iDrawType === DRAW_TYPE_PENALITY ? true : false; 
    this._checkUnoNotify(bPenality, 0, iIndexPlayer);
    
    this._checkNumberCardsToDraw(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
}; 

CGameSingle.prototype._notifyChangeTurn = function(){
    s_oGame.onNextTurn();
};

CGameSingle.prototype.shuffleCards = function (iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    //console.log("SHUFFLECARDS--> iIndexPlayer:"+iIndexPlayer + " s_oNetworkManager.getPlayerOrderID():"+s_oNetworkManager.getPlayerOrderID())

    var aCardsObj = this._oUsedCards.removeAllCardUnderTheDeck();
    var aCardsFotogram = new Array();
    for(var i=0; i<aCardsObj.length; i++){
        aCardsFotogram.push(aCardsObj[i].getFotogram());
    }
    console.log(aCardsFotogram)
    this._oAnimation.shuffleAnimation().then(()=>{
        shuffle(aCardsFotogram);

        this._oDeck.clearCards();
        this._oDeck.initializeFromData(aCardsFotogram);

        this.checkForMoreDraws(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    });
}; 

CGameSingle.prototype._onAllCardsDrawCompleted = function(iIndexPlayer,iDrawType){
    this._checkEffectAfterDrawCompleted(iIndexPlayer,iDrawType);
};

CGameSingle.prototype._checkIfCanStillPlayTheTurn = function(iIndexPlayer){
    if (this.playerCanPlay(iIndexPlayer)){
        //console.log("CANPLAYACARD");
        this.onInputPlayer(iIndexPlayer);


        if(this._iCurPlayer !== 0){
            this._oAIManager.selectACard(this._iCurPlayer);
        }

    }else{
        //console.log("NOFIT");
        this._aPlayersHand[iIndexPlayer].centerContainer();

        this._notifyChangeTurn();
    }
};

///////////ACTIONS
CGameSingle.prototype._onActionDrawFour = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        var iDrawType = DRAW_TYPE_DRAW4;
        var iNumberOfCards = NUM_WILD_CARDS;
        var iDelay = 0;
        var iIndexPlayer = oData.playerindex;

        this.drawCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    });
};

CGameSingle.prototype._onVideoCompletedWatched = function(oData){
    this._iCurrentColor = oData.colorindex;
    this.isSwappingColor = true;
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);
        this._changeCenterCardColor(this._iCurrentColor);
        this._oDeck.hideHelp();
        this._oInterface._oSwapColorButton.removeBlinkAnimation();
        this._checkIfCardStillNotAvailable();
        this.isSwappingColor = false;
    });
}; 

CGameSingle.prototype._changeCenterCardColor = function(color){
    if(this._oUsedCards.getLastCard().getRank() <= 12){
        this._oInterface._noOfTimesSwapped +=1;
        let changedCard = new CCard(0,0,this._oUsedCards.getContainer(),this._oUsedCards.getLastCard().getRank() + 13 * color,this._oUsedCards.getLastCard().getRank(),color,this._oUsedCards.iUniqueID++,0)
        changedCard.showCard(0);
        this._oUsedCards.addNewCardUnderTheDeck([changedCard]);
        this._oInterface.checkSwap();
    }
}


CGameSingle.prototype._onActionSelectColor = function(oData){
    this._iCurrentColor = oData.colorindex;
    
    this._oAnimation.changeColor(this._iCurrentColor).then(()=> {
        this._oInterface.refreshColor(this._iCurrentColor);

        this._notifyChangeTurn();
    });
};
/////////////////


////////NEXT MATCH
CGameSingle.prototype._onConfirmNextMatch = function(){
    $(s_oMain).trigger("show_interlevel_ad");
    
    if(this._bEndGame){
        this._bEndGame = false;
        this.setNewGame();
    };
    
    this.restart();
};

CGameSingle.prototype.onExit = function(){
    
    s_oGame.unload();
    s_oMain.gotoMenu();

    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("show_interlevel_ad");
};






