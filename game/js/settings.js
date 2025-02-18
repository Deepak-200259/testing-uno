var CANVAS_WIDTH;
var CANVAS_HEIGHT;

var EDGEBOARD_X = 256;
var EDGEBOARD_Y = 84;

var PRIMARY_FONT = "RoundedMplus1c";

var FPS           = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;
var ENABLE_FULLSCREEN = true;

var GAME_PLAYERIO_ID = "four-colors-o2yb5hcxu2o4lkmfuuykw";
var GAME_NAME = "four_colors";
var MULTIPLAYER_TEST_LOCAL = true;
var COMBINED_PLAYERS_MODE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;
var STATE_SELECT_PLAYERS = 4;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;
var ON_CARD_DEALED = 6;
var ON_HOME = 7;
var ON_CHECK = 8;
var ON_NEXT = 9;

var ENABLE_CHECK_ORIENTATION;
var ENABLE_FULLSCREEN;

var AD_SHOW_COUNTER;

var NUM_PLAYERS; 
var STARTING_NUM_CARDS;

var CARD_WIDTH = 156;
var CARD_HEIGHT = 242;
var SOUNDTRACK_VOLUME_IN_GAME = 0.4;

var DEBUG_SHOW_CARDS = false;

var CARD_SCORE = [0,1,2,3,4,5,6,7,8,9,20,20,20,50,50];
var NUM_PENALTY_CARDS = 2;
var NUM_WILD_CARDS = 4;
var GAME_SCORE_WIN = 250;

var BOTTOM = 0;
var TOP = 1;
var LEFT = 2;
var RIGHT = 3;

var HAND_POS = new Array();
HAND_POS["num_player_2"] = [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)-350, side: TOP}];
HAND_POS["num_player_3"] = [{x:(CANVAS_WIDTH/2), y: (CANVAS_HEIGHT/2)+350, side: BOTTOM},{x:(CANVAS_WIDTH/2)-650, y: (CANVAS_HEIGHT/2)-40, side: LEFT},
                            {x:(CANVAS_WIDTH/2)+650, y: (CANVAS_HEIGHT/2), side: RIGHT}];
HAND_POS["num_player_4"] = [{x:(CANVAS_WIDTH/2), y: CANVAS_HEIGHT-(CARD_HEIGHT / 4) - 150, side: BOTTOM},{x:CARD_WIDTH/2-15, y: (CANVAS_HEIGHT/2), side: LEFT},
                            {x:(CANVAS_WIDTH/2), y: CARD_HEIGHT / 4 + 150, side: TOP},{x:CANVAS_WIDTH - CARD_WIDTH/2+15, y: (CANVAS_HEIGHT/2), side: RIGHT}];;

var FOTOGRAM_COLOR = 52;
var FOTOGRAM_DRAW_FOUR = 53;

var ON_COLOR_SELECTED = 0;

var ACTION_NEXT_TURN = 0;
var ACTION_USE_CARD = 1;
var ACTION_ON_SHUFFLECARDS = 2;
var ACTION_ON_DRAWCARDS = 3;
var ACTION_ON_UNO_CLICK = 4;
var ACTION_SELECT_COLOR = 5;
var ACTION_DRAW_FOUR = 6;
var ACTION_BLOCK_TURN = 7;
var ACTION_INVERT_TURN = 8;
var ACTION_DRAW_TWO_COLORED = 9;

var EFFECT_SELECT_COLOR = 0;
var EFFECT_DRAW_FOUR = 1;
var EFFECT_STOP = 2;
var EFFECT_INVERT_TURN = 3;
var EFFECT_DRAW_TWO_COLORED = 4;
var EFFECT_NORMAL_CARD = 5;

var ON_APPLY_EFFECT = 0;
var ON_APPLY_PENALITY = 1;
var ON_UNO_CLICK = 2;

var DRAW_TYPE_NORMAL = 0;
var DRAW_TYPE_PENALITY = 1;
var DRAW_TYPE_DRAW2_COLORED = 2;
var DRAW_TYPE_DRAW4 = 3;

var DESKTOP_DEVICE = 0;
var MOBILE_DEVICE = 1;
var IPAD_DEVICE = 2;

const checkDevice = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const userAgent = navigator.userAgent.toLowerCase();
    const isIpad = /ipad|macintosh/.test(userAgent) && isTouchDevice;
    const isMobile = /mobile/.test(userAgent) && isTouchDevice;
    const isAndroidTablet = /android/.test(userAgent) && !/mobile/.test(userAgent);
    
    if (aspectRatio > 1.3) {  
        // Landscape mode (Desktop or iPad)
        if ((isIpad || isAndroidTablet) && isTouchDevice && aspectRatio < 1.6) {
            return "IPAD_DEVICE"; // iPads typically have an aspect ratio between 1.3 and 1.6
        } else if (isMobile){
            return "MOBILE_DEVICE"; // Most mobile phones in portrait mode
        } else {
            return "DESKTOP_DEVICE";
        }
    } else {
        if((isIpad || isAndroidTablet) && isTouchDevice && aspectRatio >= 0.65 && aspectRatio <= 0.75){
            return "IPAD_DEVICE_3X4";
        }
        else if (isMobile){
            return "MOBILE_DEVICE"; // Most mobile phones in portrait mode
        }
        else return "MOBILE_DEVICE"
    }
};

let currentUI;