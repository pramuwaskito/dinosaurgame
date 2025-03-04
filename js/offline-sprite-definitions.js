const GAME_TYPE=["type_5"];
let ObstacleType;Runner.spriteDefinitionByType={original:{
	LDPI:{
		BACKGROUND_EL:{x:86,y:2},
		CACTUS_LARGE:{x:332,y:2},
		CACTUS_SMALL:{x:228,y:2},
		OBSTACLE_2:{x:332,y:2},
		OBSTACLE:{x:228,y:2},
		CLOUD:{x:86,y:2},
		HORIZON:{x:2,y:54},
		MOON:{x:484,y:2},
		PTERODACTYL:{x:134,y:2},
		RESTART:{x:2,y:68},
		TEXT_SPRITE:{x:655,y:2},
		TREX:{x:848,y:2},
		STAR:{x:645,y:2},
		COLLECTABLE:{x:2,y:2},
		ALT_GAME_END:{x:121,y:2}},
	HDPI:{
		BACKGROUND_EL:{x:166,y:2},
		CACTUS_LARGE:{x:652,y:2},
		CACTUS_SMALL:{x:446,y:2},
		OBSTACLE_2:{x:652,y:2},
		OBSTACLE:{x:446,y:2},
		CLOUD:{x:166,y:2},
		HORIZON:{x:2,y:104},
		MOON:{x:954,y:2},
		PTERODACTYL:{x:260,y:2},
		RESTART:{x:2,y:130},
		TEXT_SPRITE:{x:1294,y:2},
		TREX:{x:1678,y:2},
		STAR:{x:1276,y:2},
		COLLECTABLE:{x:4,y:4},
		ALT_GAME_END:{x:242,y:4}},
	MAX_GAP_COEFFICIENT:1.5,
	MAX_OBSTACLE_LENGTH:3,
	HAS_CLOUDS:1,
	BOTTOM_PAD:10,
	TREX:{
		WAITING_1:{x:44,w:44,h:47,xOffset:0},
		WAITING_2:{x:0,w:44,h:47,xOffset:0},
		RUNNING_1:{x:88,w:44,h:47,xOffset:0},
		RUNNING_2:{x:132,w:44,h:47,xOffset:0},
		JUMPING:{x:0,w:44,h:47,xOffset:0},
		CRASHED:{x:220,w:44,h:47,xOffset:0},
		COLLISION_BOXES:[new CollisionBox(22,0,17,16),new CollisionBox(1,18,30,9),new CollisionBox(10,35,14,8),new CollisionBox(1,24,29,5),new CollisionBox(5,30,21,4),new CollisionBox(9,34,15,4)]},
		OBSTACLES:[
		{type:"CACTUS_SMALL",width:17,height:35,yPos:105,multipleSpeed:4,minGap:120,minSpeed:0,collisionBoxes:[new CollisionBox(0,7,5,27),new CollisionBox(4,0,6,34),new CollisionBox(10,4,7,14)]},
		{type:"CACTUS_LARGE",width:25,height:50,yPos:90,multipleSpeed:7,minGap:120,minSpeed:0,collisionBoxes:[new CollisionBox(0,12,7,38),new CollisionBox(8,0,7,49),new CollisionBox(13,10,10,38)]},
		{type:"PTERODACTYL",width:46,height:40,yPos:[100,75,50],yPosMobile:[100,50],multipleSpeed:999,minSpeed:8.5,minGap:150,collisionBoxes:[new CollisionBox(15,15,16,5),new CollisionBox(18,21,24,6),new CollisionBox(2,14,4,3),new CollisionBox(6,10,4,7),new CollisionBox(10,8,6,9)],numFrames:2,frameRate:1e3/6,speedOffset:.8},
		{type:"COLLECTABLE",width:12,height:38,yPos:90,multipleSpeed:999,minGap:999,minSpeed:0,collisionBoxes:[new CollisionBox(0,0,12,38)]}],
		BACKGROUND_EL:{CLOUD:{HEIGHT:14,MAX_CLOUD_GAP:400,MAX_SKY_LEVEL:30,MIN_CLOUD_GAP:100,MIN_SKY_LEVEL:71,OFFSET:4,WIDTH:46,X_POS:1,Y_POS:120}},
		BACKGROUND_EL_CONFIG:{MAX_BG_ELS:1,MAX_GAP:400,MIN_GAP:100,POS:0,SPEED:.5,Y_POS:125},
		LINES:[{SOURCE_X:2,SOURCE_Y:52,WIDTH:600,HEIGHT:12,YPOS:127}],
		ALT_GAME_END_CONFIG:{WIDTH:15,HEIGHT:17,X_OFFSET:0,Y_OFFSET:0},
		ALT_GAME_OVER_TEXT_CONFIG:{TEXT_X:14,TEXT_Y:2,TEXT_WIDTH:108,TEXT_HEIGHT:15,FLASH_DURATION:1500}},
type_5:{
	LDPI:{
		OBSTACLE_1:{x:458,y:2},
		OBSTACLE_2:{x:458,y:2},
		BACKGROUND_EL:{x:0,y:0},
		CLOUD:{x:482,y:2},
		WALL:{x:2,y:54},
		HORIZON:{x:2,y:77},
		TREX:{x:252,y:2}},
	HDPI:{
		OBSTACLE_1:{x:916,y:2},
		OBSTACLE_2:{x:916,y:2},
		BACKGROUND_EL:{x:0,y:0},
		CLOUD:{x:963,y:3},
		WALL:{x:2,y:108},
		HORIZON:{x:4,y:154},
		TREX:{x:504,y:2}},
		ALT_GAME_END_CONFIG:{WIDTH:15,HEIGHT:17,X_OFFSET:24,Y_OFFSET:23},
		MAX_GAP_COEFFICIENT:2.5,
		MAX_OBSTACLE_LENGTH:1,
		BOTTOM_PAD:12,
		HAS_CLOUDS:1,
		TREX:{
			MAX_JUMP_HEIGHT:30,
			MIN_JUMP_HEIGHT:30,
			INITIAL_JUMP_VELOCITY:-10,
			RUNNING_1:{x:0,w:51,h:67,xOffset:0},
			RUNNING_2:{x:50,w:51,h:67,xOffset:0},
			CRASHED:{x:156,w:51,h:67,xOffset:0},
			JUMPING:{x:103,w:54,h:67,xOffset:0},
			COLLISION_BOXES:[new CollisionBox(35,30,13,9),new CollisionBox(19,51,22,9),new CollisionBox(9,51,9,13),new CollisionBox(4,27,31,28)]},
			OBSTACLES:[
			{type:"OBSTACLE_1",width:21,height:57,yPos:93,multipleSpeed:999,minGap:40,minSpeed:0,collisionBoxes:[new CollisionBox(0,0,3,41),new CollisionBox(3,5,14,39),new CollisionBox(16,7,4,43)]}],
			BACKGROUND_EL_CONFIG:{MAX_BG_ELS:4,MAX_GAP:420,MIN_GAP:320,POS:0,SPEED:.3,Y_POS:125},
			BACKGROUND_EL:{BACKGROUND_0:{HEIGHT:40,WIDTH:170,Y_POS:100,X_POS:0,OFFSET:10}},
			LINES:[{SOURCE_X:2,SOURCE_Y:71,WIDTH:600,HEIGHT:12,YPOS:123}]}};