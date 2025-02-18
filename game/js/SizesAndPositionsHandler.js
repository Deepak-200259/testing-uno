const UI_SIZES_AND_POSITIONS = {
    MOBILE_DEVICE : {
        menu_oBg: (sprite) => ({
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2
        }),
        menu_oBgMask: (sprite) => ({
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2,
        }),
        menu_oBgLogo : (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 + 90,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2,
        }),
        but_play : (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 + 300
        }),
        audio_icon: (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH - sprite.height / 2,
            y: sprite.height / 2
        }),
        game_audio_icon: () =>({
            scale: 0.75,
            x: CANVAS_WIDTH - 35,
            y: 35,
        }),
        game_oBg: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2
        }), 
        game_oBgMask: (sprite) => ({
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2
        }),
        game_oBgLogo: (sprite) => ({
           scale : 1.2,
           x: CANVAS_WIDTH / 2 - sprite.image.width / 2-20,
           y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2-16.5
        }),
        game_bg_center_box: (sprite) => ({
            scale : 1.2,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2-20,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2-16.5
        }),
        handPositions: ()=>({
            pos : [{x:(CANVAS_WIDTH/2), y: CANVAS_HEIGHT-(CARD_HEIGHT / 4) - 120, side: BOTTOM},{x:CARD_WIDTH / 1.25, y: (CANVAS_HEIGHT/2), side: LEFT},
                {x:(CANVAS_WIDTH/2), y: CARD_HEIGHT / 4 + 120, side: TOP},{x:CANVAS_WIDTH - CARD_WIDTH / 1.25, y: (CANVAS_HEIGHT/2), side: RIGHT}]
        }),
        _oDeck : ()=>({
            x: CANVAS_WIDTH/2,
            y: CANVAS_HEIGHT/2
        }),
        _oUsedCards:()=>({
            x: (CANVAS_WIDTH/2)+CARD_WIDTH / 2,
            y: CANVAS_HEIGHT/2
        }), 
        game_colors:()=>({
            scale: 0.75,
            x: CANVAS_WIDTH/2,
            y: CANVAS_HEIGHT/2 -180
        }),
        game_but_swap_color :()=>({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 + 50,
            y: CANVAS_HEIGHT /2 + 170
        }),
        game_but_uno : ()=>({
            scale: 0.75,
            x: CANVAS_WIDTH/2 - 50,
            y: CANVAS_HEIGHT/2 + 170
        }),
        game_alt_text: ()=>({
            left:CANVAS_WIDTH/2 - 125,
            top:CANVAS_HEIGHT/2 + 200,
            right:250,
            bottom:150,
            font_size:18,
        }),
        card_back : () =>({
            scale: 0.7,
            x: CARD_WIDTH/2,
            y: CARD_HEIGHT/2,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
        }),
        oPlayerLine: (sprite)=>({
            scale: 0.75,
            width: sprite.width/2,
            height: sprite.height,
        }),
        select_color_panel: (sprite) => ({
            scale: 0.75,
            x: sprite.width/2,
            y: sprite.height/2,
        }),
        msg_box: (sprite) => ({
            scaleX : 0.6,
            scaleY : 0.85,
            alpha : 1,
        }),
        panel_but_uno:(sprite) => ({
            x: 0,
            y: -30,
            scale : 1
        }),
        panel_left_arrow : (_oContainer) => ({
            x: _oContainer.getBounds().width/2-40,
            y:  0,
            scale: 0.75
        }),
        panel_right_arrow : (_oContainer) => ({
            x : -(_oContainer.getBounds().width/2-40),
            y: 0,
            scale: 0.75
        }),
        panel_but_skip : (_oContainer) =>({
            x: 0,
            y: _oContainer.getBounds().height/2 + 100, 
            scale: 1
        }),
        summary_msg_box : (oBgInfo) => ({
            regX : oBgInfo.width/2,
            regY : oBgInfo.height/2,
            x : CANVAS_WIDTH/2,
            y : CANVAS_HEIGHT/2, 
            scale : 0.75
        }),
        finger: () =>({
            scale: 0.25,
            x: -50,
            y: -60,
        }),
        panel_card_pos : ()=>({
            x:0,
            y: -40
        }),
        panel_heading : ()=>({
            font_size: 25,
            y: -200
        }),
        panel_subHeading :() =>({
            left : -150,
            top :  60,
            right : 300,
            bottom : 130,
            font_size : 30
        }),
        player_text: (_iWidth, _iOffsetX) =>({
            font_size : 25,
            x: -_iWidth/3 + _iOffsetX,
            n_x: _iWidth/3 - _iOffsetX
        }),
        center_container : (oHandInfo, iOffsetY) =>({
            x: - (oHandInfo.width / 2) + (CARD_WIDTH / 3),
            y: - (oHandInfo.height / 2) + (CARD_WIDTH / 3),
            tweenY :  CANVAS_HEIGHT / 2 + iOffsetY
        }),
        player_info : {
            bottom: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y - 100}),
            top: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y + 100}),
            left: (_oContainer)=>({x: _oContainer.x + 100, y: _oContainer.y}),
            right: (_oContainer)=>({x: _oContainer.x - 100, y: _oContainer.y}),
            globalPos : ()=>({x: CARD_WIDTH / 3, y: CARD_HEIGHT / 3}),
            offset: () =>({x: CARD_WIDTH / 3, y: CARD_HEIGHT / 6})
        },
        summary_but_home: ()=>({
            x: CANVAS_WIDTH/2 - 140,
            y: 120
        }),
        summary_but_show: ()=>({
            x: CANVAS_WIDTH/2,
            y: 120
        }),
        summary_but_restart: ()=>({
            x: CANVAS_WIDTH/2 + 140,
            y: 120
        }),
        summary_win_lose_text: (iTextY,iHeight)=>({
            top: iTextY - 120 -iHeight/2, 
            font_size: 40,
        }),
        game_over_text:()=>({
            font_size:30
        }),
        select_color_text : (oSprite)=>({
            left: -300,
            top: -oSprite.height/2 + 10,
            right: 600,
            bottom: 150,
            font_size: 25,
        }),
        select_color_red: () =>({
            x: -150, 
            scale: 0.75
        }),
        select_color_blue: () =>({
            x: 50, 
            scale: 0.75
        }),
        select_color_green: () =>({
            x: -50, 
            scale: 0.75
        }),
        select_color_yellow: () =>({
            x: 150, 
            scale: 0.75
        }),
        bottom_cloud:()=>({
            scale: 0.5,
            x : (CANVAS_WIDTH/2)+75,
            y :  CANVAS_HEIGHT - CARD_HEIGHT - 95
        }),
        left_cloud: ()=>({
            scale: 0.5,
            x : CARD_WIDTH * 1.5 + 45,
            y : (CANVAS_HEIGHT/2) + 120
        }),
        top_cloud:()=>({
            scale: 0.5,
            x: (CANVAS_WIDTH/2) - 100 ,
            y: CARD_HEIGHT / 2 + 125
        }),
        right_cloud:()=>({
            scale: 0.5,
            x: CANVAS_WIDTH - CARD_WIDTH * 1.5 - 45,
            y: (CANVAS_HEIGHT/2) - 140
        })
    },
    DESKTOP_DEVICE: {
        menu_oBg: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2
        }),
        but_play : (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT - 200
        }),
        audio_icon: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH - sprite.height / 2 - 15,
            y: sprite.height/2 + 15
        }),
        game_audio_icon: () =>({
            scale: 1,
            x: CANVAS_WIDTH - 50,
            y: 50
        }),
        game_oBg: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2
        }),
        handPositions: ()=>({
            pos : [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2)-650, y: (CANVAS_HEIGHT/2)-40, side: LEFT},
                {x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)-350, side: TOP},{x:(CANVAS_WIDTH/2)+650, y: (CANVAS_HEIGHT/2)-40, side: RIGHT}]
        }),
        _oDeck : ()=>({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2
        }),
        _oUsedCards:()=>({
            x:(CANVAS_WIDTH / 2) + CARD_WIDTH,
            y: CANVAS_HEIGHT / 2
        }),
        game_colors:()=>({
            scale: 1,
            x:(CANVAS_WIDTH/2)+220,
            y:(CANVAS_HEIGHT/2)-60
        }),
        game_but_swap_color :()=>({
            scale: 1,
            x: CANVAS_WIDTH / 2 - 250,
            y: CANVAS_HEIGHT /2 + 50
        }),
        game_but_uno : ()=>({
            scale: 1,
            x:(CANVAS_WIDTH/2)+220,
            y:(CANVAS_HEIGHT/2)+60
        }),
        game_alt_text: ()=>({
            left: CANVAS_WIDTH/2+280,
            top: CANVAS_HEIGHT/2,
            right: 200,
            bottom: 150,
            font_size: 50,
        }),
        card_back : () =>({
            scale: 1,
            x: CARD_WIDTH/2,
            y: CARD_HEIGHT/2,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
        }),
        oPlayerLine: (sprite)=>({
            scale: 1,
            width: sprite.width/2,
            height: sprite.height,
        }),
        select_color_panel: (sprite) => ({
            scale: 1,
            x: sprite.width/2,
            y: sprite.height/2,
        }),
        msg_box: (sprite) => ({
            scaleX : 1,
            scaleY : 1,
            alpha : 0.8,
        }),
        panel_but_uno:(sprite) => ({
            x: -215,
            y: 0,
            scale : 1.5
        }),
        panel_left_arrow : (_oContainer) => ({
            x: _oContainer.getBounds().width/2-50,
            y:  0,
            scale: 1
        }),
        panel_right_arrow : (_oContainer) => ({
            x : -(_oContainer.getBounds().width/2-50),
            y: 0,
            scale: 1
        }),
        panel_but_skip : (_oContainer) =>({
            x: _oContainer.getBounds().width/2-53,
            y: _oContainer.getBounds().height/2-53,
            scale : 1,
        }),
        summary_msg_box : (oBgInfo) => ({
            regX : oBgInfo.width/2,
            regY : oBgInfo.height/2,
            x : CANVAS_WIDTH/2,
            y : CANVAS_HEIGHT/2, 
            scale : 1
        }),
        finger: () =>({
            scale:0.5,
            x:-100,
            y:-100,
        }),
        panel_card_pos : ()=>({
            x: -215,
            y: 0
        }),
        panel_heading : ()=>({
            font_size: 50,
            y: -200
        }),
        panel_subHeading :() =>({
            left : -80,
            top :  -120,
            right : 300,
            bottom : 240,
            font_size : 50
        }),
        player_text: (_iWidth, _iOffsetX) =>({
            font_size : 30,
            x : -_iWidth/2 + _iOffsetX,
            n_x : _iWidth/2 - _iOffsetX
        }),
        center_container : (oHandInfo, iOffsetY) =>({
            x: - (oHandInfo.width / 2) + (CARD_WIDTH / 2),
            y: - (oHandInfo.height / 2) + (CARD_WIDTH / 2),
            tweenY :  CANVAS_HEIGHT / 2 + iOffsetY - 40
        }),
        player_info : {
            bottom: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y - 140}),
            top: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y + 140}),
            left: (_oContainer)=>({x: _oContainer.x + 140, y: _oContainer.y}),
            right: (_oContainer)=>({x: _oContainer.x - 140, y: _oContainer.y}),
            globalPos : ()=>({x: CARD_WIDTH / 2, y: CARD_HEIGHT / 2}),
            offset: () =>({x: CARD_WIDTH / 2, y: CARD_HEIGHT / 4})
        },
        summary_but_home: ()=>({
            x: CANVAS_WIDTH/2 - 180,
            y: 170
        }),
        summary_but_show: ()=>({
            x: CANVAS_WIDTH/2,
            y: 170
        }),
        summary_but_restart: ()=>({
            x: CANVAS_WIDTH/2 + 180,
            y: 170
        }),
        summary_win_lose_text: (iTextY,iHeight)=>({
            top: iTextY - 185 -iHeight/2, 
            font_size: 50,
        }),
        game_over_text:()=>({
            font_size: 45
        }),
        select_color_text : (oSprite)=>({
            left: -250,
            top: -oSprite.height/2 + 10,
            right: 500,
            bottom: 110,
            font_size: 50,
        }),
        select_color_red: () =>({
            x: -190, 
            scale: 1
        }),
        select_color_blue: () =>({
            x: 65, 
            scale: 1
        }),
        select_color_green: () =>({
            x: -65, 
            scale: 1
        }),
        select_color_yellow: () =>({
            x: 190, 
            scale: 1
        }),
        bottom_cloud:()=>({
            scale: 1,
            x : (CANVAS_WIDTH/2)+300,
            y : (CANVAS_HEIGHT/2)+100
        }),
        left_cloud: ()=>({
            scale: 1,
            x : (CANVAS_WIDTH/2)-350,
            y : (CANVAS_HEIGHT/2)-30
        }),
        top_cloud:()=>({
            scale: 1,
            x: (CANVAS_WIDTH/2)-270,
            y: (CANVAS_HEIGHT/2)-300
        }),
        right_cloud:()=>({
            scale: 1,
            x: (CANVAS_WIDTH/2)+350,
            y: (CANVAS_HEIGHT/2)-200
        })
    },
    IPAD_DEVICE: {
        menu_oBg: (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2
        }),
        menu_oBgLogo : (sprite) => ({
            scale: 0.8,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 + 80,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2 - 20,
        }),
        but_play : (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT - 200
        }),
        audio_icon: (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH - sprite.height / 2 - 10,
            y: sprite.height/2 + 10
        }),
        game_audio_icon: () =>({
            scale: 0.75,
            x: CANVAS_WIDTH - 45,
            y: 45
        }),
        game_oBg: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2
        }),
        game_oBgLogo: (sprite) => ({
            scale: 1.4,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 - 46,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2 - 40
        }),
        game_bg_center_box: (sprite) => ({
            scale : 1.25,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 - 24.5,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2 - 20
        }),
        handPositions: ()=>({
            pos : [{x:(CANVAS_WIDTH/2), y: CANVAS_HEIGHT-CARD_HEIGHT + 100, side: BOTTOM},{x:CARD_WIDTH, y: (CANVAS_HEIGHT/2)-20, side: LEFT},
                {x:(CANVAS_WIDTH/2), y: CARD_HEIGHT - 100, side: TOP},{x:CANVAS_WIDTH - CARD_WIDTH, y: (CANVAS_HEIGHT/2)-20, side: RIGHT}]
        }),
        _oDeck : ()=>({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2
        }),
        _oUsedCards:()=>({
            x:(CANVAS_WIDTH / 2) + CARD_WIDTH * 2/5,
            y: CANVAS_HEIGHT / 2
        }),
        game_colors:()=>({
            scale: 0.75,
            x:(CANVAS_WIDTH/2),
            y:(CANVAS_HEIGHT/2) - 160
        }),
        game_but_swap_color :()=>({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 + 60,
            y: CANVAS_HEIGHT /2 + 160
        }),
        game_but_uno : ()=>({
            scale: 0.75,
            x:(CANVAS_WIDTH/2) - 60,
            y:(CANVAS_HEIGHT/2) + 160
        }),
        game_alt_text: ()=>({
            left: CANVAS_WIDTH/2 - 340,
            top: CANVAS_HEIGHT/2 + 40,
            right: 200,
            bottom: 150,
            font_size: 30,
        }),
        card_back : () =>({
            scale: 0.75,
            x: CARD_WIDTH / 2,
            y: CARD_HEIGHT / 2,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
        }),
        oPlayerLine: (sprite)=>({
            scale: 0.75,
            width: sprite.width/2,
            height: sprite.height,
        }),
        select_color_panel: (sprite) => ({
            scale: 0.875,
            x: sprite.width/2,
            y: sprite.height/2,
        }),
        msg_box: (sprite) => ({
            scaleX : 0.8,
            scaleY : 0.8,
            alpha : 0.8,
        }),
        panel_but_uno:(sprite) => ({
            x: -150,
            y: 0,
            scale : 1.25
        }),
        panel_left_arrow : (_oContainer) => ({
            x: _oContainer.getBounds().width/2-40,
            y:  0,
            scale: 0.75
        }),
        panel_right_arrow : (_oContainer) => ({
            x : -(_oContainer.getBounds().width/2-40),
            y: 0,
            scale: 0.75
        }),
        panel_but_skip : (_oContainer) =>({
            x: _oContainer.getBounds().width/2-45,
            y: _oContainer.getBounds().height/2-45,
            scale : 0.75
        }),
        summary_msg_box : (oBgInfo) => ({
            regX : oBgInfo.width/2,
            regY : oBgInfo.height/2,
            x : CANVAS_WIDTH/2,
            y : CANVAS_HEIGHT/2, 
            scale : 0.75
        }),
        finger: () =>({
            scale:0.375,
            x:-75,
            y:-75,
        }),
        panel_card_pos : ()=>({
            x: -150,
            y: 0
        }),
        panel_heading : ()=>({
            font_size: 35,
            y: -180
        }),
        panel_subHeading :() =>({
            left : -75,
            top :  -120,
            right : 300,
            bottom : 240,
            font_size : 25
        }),
        player_text: (_iWidth, _iOffsetX) =>({
            font_size : 25,
            x: -_iWidth * (2/5) + _iOffsetX, 
            n_x: _iWidth * (2/5) - _iOffsetX
        }),
        center_container : (oHandInfo, iOffsetY) =>({
            x: - (oHandInfo.width / 2) + (CARD_WIDTH * 2/5) ,
            y: - (oHandInfo.height / 2) + (CARD_WIDTH * 2/5 ), 
            tweenY :  CANVAS_HEIGHT / 2 + iOffsetY - 20
        }),
        player_info : {
            bottom: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y - 107.5}),
            top: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y + 107.5}),
            left: (_oContainer)=>({x: _oContainer.x + 107.5, y: _oContainer.y}),
            right: (_oContainer)=>({x: _oContainer.x - 107.5, y: _oContainer.y}),
            globalPos : ()=>({x: CARD_WIDTH * 2/5, y: CARD_WIDTH * 2/5}),
            offset: () =>({x: CARD_WIDTH * 2/5, y: CARD_WIDTH * 2/5})
        },
        summary_but_home: ()=>({
            x: CANVAS_WIDTH/2 -140,
            y: 117.5
        }),
        summary_but_show: ()=>({
            x: CANVAS_WIDTH/2,
            y: 117.5
        }),
        summary_but_restart: ()=>({
            x: CANVAS_WIDTH/2 +140,
            y: 117.5
        }),
        summary_win_lose_text: (iTextY,iHeight)=>({
            top: iTextY - 130 -iHeight/2, 
            font_size: 40,
        }),
        game_over_text:()=>({
            font_size: 37.5
        }),
        select_color_text : (oSprite)=>({
            left: -275,
            top: -oSprite.height/2 + 10,
            right: 550,
            bottom: 130,
            font_size: 37.5,
        }),
        select_color_red: () =>({
            x: -155, 
            scale: 0.75
        }),
        select_color_blue: () =>({
            x: 52.5, 
            scale: 0.75
        }),
        select_color_green: () =>({
            x: -52.5, 
            scale: 0.75
        }),
        select_color_yellow: () =>({
            x: 155, 
            scale: 0.75
        }),
        bottom_cloud:()=>({
            scale: 0.75,
            x : (CANVAS_WIDTH/2)+270,
            y : (CANVAS_HEIGHT/2)+120
        }),
        left_cloud: ()=>({
            scale: 0.75,
            x : (CANVAS_WIDTH/2)-285,
            y : (CANVAS_HEIGHT/2)+100
        }),
        top_cloud:()=>({
            scale: 0.75,
            x: (CANVAS_WIDTH/2)-270,
            y: (CANVAS_HEIGHT/2)-250
        }),
        right_cloud:()=>({
            scale: 0.75,
            x: (CANVAS_WIDTH/2)+285,
            y: (CANVAS_HEIGHT/2)-100
        })
    },
    IPAD_DEVICE_3X4: {
        menu_oBg: (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2
        }),
        menu_oBgLogo : (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2  - 100,
        }),
        but_play : (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT - 200
        }),
        audio_icon: (sprite) => ({
            scale: 0.75,
            x: CANVAS_WIDTH - sprite.height / 2 - 10,
            y: sprite.height/2 + 10
        }),
        game_audio_icon: () =>({
            scale: 0.75,
            x: CANVAS_WIDTH - 45,
            y: 45
        }),
        game_oBg: (sprite) => ({
            scale: 1,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2
        }),
        game_oBgLogo: (sprite) => ({
            scale : 0.85,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 + 30,
            y: CANVAS_HEIGHT / 2 -  sprite.image.height / 2 + 22.5
        }),
        game_bg_center_box: (sprite) => ({
            scale : 0.85,
            x: CANVAS_WIDTH / 2 - sprite.image.width / 2 + 30,
            y: CANVAS_HEIGHT / 2 - sprite.image.height / 2 + 22.5
        }),
        handPositions: ()=>({
            pos : [{x:(CANVAS_WIDTH/2), y: CANVAS_HEIGHT-CARD_HEIGHT + 75, side: BOTTOM},{x: CARD_WIDTH, y: (CANVAS_HEIGHT/2) - 20, side: LEFT},
                {x:(CANVAS_WIDTH/2), y: CARD_HEIGHT - 25, side: TOP},{x:CANVAS_WIDTH - CARD_WIDTH, y: (CANVAS_HEIGHT/2) - 20, side: RIGHT}]
        }),
        _oDeck : ()=>({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2
        }),
        _oUsedCards:()=>({
            x:(CANVAS_WIDTH / 2) + CARD_WIDTH * 2/5,
            y: CANVAS_HEIGHT / 2
        }),
        game_colors:()=>({
            scale: 0.75,
            x:(CANVAS_WIDTH/2),
            y:(CANVAS_HEIGHT/2) - 240
        }),
        game_but_swap_color :()=>({
            scale: 0.75,
            x: CANVAS_WIDTH / 2 + 60,
            y: CANVAS_HEIGHT /2 + 220
        }),
        game_but_uno : ()=>({
            scale: 0.75,
            x:(CANVAS_WIDTH/2) - 60,
            y:(CANVAS_HEIGHT/2) + 220
        }),
        game_alt_text: ()=>({
            left: CANVAS_WIDTH/2 - 200,
            top: CANVAS_HEIGHT/2 + 250,
            right: 400,
            bottom: 120,
            font_size: 25,
        }),
        card_back : () =>({
            scale: 1,
            x: CARD_WIDTH / 2,
            y: CARD_HEIGHT / 2,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
        }),
        oPlayerLine: (sprite)=>({
            scale: 1,
            width: sprite.width/2,
            height: sprite.height,
        }),
        select_color_panel: (sprite) => ({
            scale: 0.875,
            x: sprite.width/2,
            y: sprite.height/2,
        }),
        msg_box: (sprite) => ({
            scaleX : 1,
            scaleY : 1,
            alpha : 0.8,
        }),
        panel_but_uno:(sprite) => ({
            x: -180,
            y: 0,
            scale : 1.25
        }),
        panel_left_arrow : (_oContainer) => ({
            x: _oContainer.getBounds().width/2-40,
            y:  0,
            scale: 0.75
        }),
        panel_right_arrow : (_oContainer) => ({
            x : -(_oContainer.getBounds().width/2-40),
            y: 0,
            scale: 0.75
        }),
        panel_but_skip : (_oContainer) =>({
            x: _oContainer.getBounds().width/2-50,
            y: _oContainer.getBounds().height/2-50,
            scale : 0.75
        }),
        summary_msg_box : (oBgInfo) => ({
            regX : oBgInfo.width/2,
            regY : oBgInfo.height/2,
            x : CANVAS_WIDTH/2,
            y : CANVAS_HEIGHT/2, 
            scale : 0.75
        }),
        finger: () =>({
            scale:0.5,
            x:-75,
            y:-100,
        }),
        panel_card_pos : ()=>({
            x: -180,
            y: 0
        }),
        panel_heading : ()=>({
            font_size: 40,
            y: -230
        }),
        panel_subHeading :() =>({
            left : -75,
            top :  -120,
            right : 300,
            bottom : 240,
            font_size : 25
        }),
        player_text: (_iWidth, _iOffsetX) =>({
            font_size : 25,
            x: -_iWidth * (2/5) + _iOffsetX, 
            n_x: _iWidth * (2/5) - _iOffsetX
        }),
        center_container : (oHandInfo, iOffsetY) =>({
            x: - (oHandInfo.width / 2) + (CARD_WIDTH * 2/5) ,
            y: - (oHandInfo.height / 2) + (CARD_WIDTH * 2/5) + 10, 
            tweenY :  CANVAS_HEIGHT / 2 + iOffsetY
        }),
        player_info : {
            bottom: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y - 134}),
            top: (_oContainer)=>({x: _oContainer.x, y: _oContainer.y + 134}),
            left: (_oContainer)=>({x: _oContainer.x + 134, y: _oContainer.y}),
            right: (_oContainer)=>({x: _oContainer.x - 134, y: _oContainer.y}),
            globalPos : ()=>({x: CARD_WIDTH * 2/5, y: CARD_WIDTH * 2/5}),
            offset: () =>({x: CARD_WIDTH * 2/5, y: CARD_WIDTH * 2/5})
        },
        summary_but_home: ()=>({
            x: CANVAS_WIDTH/2 -140,
            y: 117.5
        }),
        summary_but_show: ()=>({
            x: CANVAS_WIDTH/2,
            y: 117.5
        }),
        summary_but_restart: ()=>({
            x: CANVAS_WIDTH/2 +140,
            y: 117.5
        }),
        summary_win_lose_text: (iTextY,iHeight)=>({
            top: iTextY - 130 -iHeight/2, 
            font_size: 40,
        }),
        game_over_text:()=>({
            font_size: 37.5
        }),
        select_color_text : (oSprite)=>({
            left: -275,
            top: -oSprite.height/2 + 10,
            right: 550,
            bottom: 130,
            font_size: 37.5,
        }),
        select_color_red: () =>({
            x: -155, 
            scale: 0.75
        }),
        select_color_blue: () =>({
            x: 52.5, 
            scale: 0.75
        }),
        select_color_green: () =>({
            x: -52.5, 
            scale: 0.75
        }),
        select_color_yellow: () =>({
            x: 155, 
            scale: 0.75
        }),
        bottom_cloud:()=>({
            scale: 0.75,
            x : (CANVAS_WIDTH/2)+230,
            y : (CANVAS_HEIGHT) - CARD_HEIGHT - 120
        }),
        left_cloud: ()=>({
            scale: 0.75,
            x : CARD_HEIGHT +150,
            y : (CANVAS_HEIGHT/2)+170
        }),
        top_cloud:()=>({
            scale: 0.75,
            x: (CANVAS_WIDTH/2)-270,
            y: (CANVAS_HEIGHT/2)-250
        }),
        right_cloud:()=>({
            scale: 0.75,
            x: CANVAS_WIDTH-CARD_HEIGHT-130,
            y: (CANVAS_HEIGHT/2)-170
        })
    },
}