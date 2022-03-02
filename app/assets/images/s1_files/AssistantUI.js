// var io = io("ws://localhost:9000");
//var io = io('ws://10.10.83.65:7453', {transports: ['websocket']});
//var io = io('wss://chatclient.99acres.com', {transports: ['polling']});

var io = io();
var loginCookie="";
var socketUserData="";
var cardNo = 1;
var test="";
var platformVal="";
var abCookieVal="";
var userDetails='';
var domainName = "99acres.com";
var totalBotMessage =0;
var botMessageCount = 0;
var humanMessageCount = 0;
var cookieData="";
var signal = 0;
var lastScrollTop = 0;
var saveLast = 0;
var idleTimer = 0;
var module="";
var msgKey = "";
var showLoader = true;
var initMsgText="Hi";


var botui = new BotUI('naukri-chatclient');
io.on('connection', function (socket) {
		console.log('a user connected from client');
		socket.on('disconnect', function () {
				console.log('user disconnected');
				});
		});

function timeStamp(){
	var time = new Date();
	return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

function addMessage(msg){
	signal = 0;
	setUIElementsConditionally(msg);
	botui.message.bot({
type: 'html',
/*Amit changes starts */
content: msg.content+'<span class="chatBot_msg_time">'+timeStamp()+'</span>',
countMsg:msg.countMsg,
/*Amit changes ends */
metadata: cookieData,
isContextSet: true
});
}

function showChatWindow(){
        $(".chatwindow").show();
        $(".loader").hide();
}


function showPreviousMessages(msg){
        var msgArray = msg.content;
        var size = msgArray.length;
        var k;
        console.log(msgArray);
        console.log(size);
        console.log(msgArray[0].actor);
        for(k=0;k<size;k++){
                if(msgArray[k].actor == "bot" && msgArray[k].value) addBotMessage(msgArray[k].value);
                else if(msgArray[k].actor == "human" && msgArray[k].value) addHumanMessage(msgArray[k].value);
        }
        showChatWindow();
}

function addBotMessage(botChat){
        botui.message.bot({
                content: botChat
        });
}

function addHumanMessage(humanChat){
        console.log(humanChat);
        botui.message.human({
                content: humanChat
        });
}



function setUIElementsConditionally(msg){
	if(!msg.noScroll){
		$("html, body").animate({ scrollTop: $('.botui-container').prop("scrollHeight") -100 },1000);
	}
	if(msg.focus){
		$('#chatBox').focus();
		//window.scrollTo(0,document.querySelector(".botui-container").scrollHeight);
		//	$(".botui-container").animate({ scrollTop: $('.botui-container').prop("scrollHeight")}, 1000);
		//	$("html, body").animate({ scrollTop: $('.botui-container').prop("scrollHeight") });
	}
	if(msg.inputMsg){
		$('#chatBox').attr('placeholder',msg.inputMsg);
	}else{
		$('#chatBox').attr('placeholder',"Type a message...");

	}

}
function addQuickReply(msg){
	signal=0;
	setUIElementsConditionally(msg);
	botui.message.bot({
content: msg.content+'<span class="chatBot_msg_time">'+timeStamp()+'</span>',
countMsg:msg.countMsg
}).then(function () {
	return botui.action.button({
action: msg.options
});
	}).then(function (res) {
		manageTimer();
		humanMessageCount++;
		totalBotMessage++;
		setCookie("msgCount",totalBotMessage,"1",domainName);
		var quickResponseChat = {
content: res.text,
value: res.value,
type: "quickreply",
metadata: cookieData,
isContextSet: true,
messageSentCount: humanMessageCount

}
gtag('event', 'click', {
	'event_category' : 'quickreply',
	'event_label' : res.text
	});
$('.bot-message-nav').hide();
sendMessage(quickResponseChat);
});

}

function addButtons(msg)
{
	signal++;
	botui.message.bot({
content: msg.content

}).then(function () {
	var buttonListContent = document.createElement('div');
	buttonListContent.className = 'btn-group';
	for (item in msg.buttons) {
	var button = document.createElement("BUTTON");
	button.textContent = msg.buttons[item].text;
	button.setAttribute("data-payload", item);
	button.onclick = function () {
	var buttonPayload = msg.buttons[this.getAttribute("data-payload")];
	if (buttonPayload.url == undefined) {
	botui.message.human({
delay: 200,
content: buttonPayload.text+'<span class="chatBot_msg_time">'+timeStamp()+'</span>'
});
	var quickResponseChat = {
content: buttonPayload.text,
value: buttonPayload.value,
type: msg.type,
metadata:cookieData,
isContextSet: true

	}
gtag('event', 'click', {
		'event_category' : 'button',
		'event_label' : buttonPayload.text
		});

sendMessage(quickResponseChat);
} else {
	gtag('event', 'click', {
			'event_category' : 'urlButton',
			'event_label' : buttonPayload.url
			});


	window.open(buttonPayload.url, "_blank");
}
};
buttonListContent.appendChild(button);
}
//$(buttonListContent).appendTo(".botui-messages-container").fadeIn(3000);
$('.botui-messages-container').append(buttonListContent);

$(".botui-container").animate({ scrollTop: $('.botui-container').prop("scrollHeight")}, 1000);

});

}

function addCards(msg)
{
	signal ++;
	var botCardContainer = document.createElement('div');
	botCardContainer.className = 'bot-card-container';
	botCardContainer.id = 'bot-card-container_'+cardNo;
	for (cardItem in msg.cards) {
		var jsonCard = msg.cards[cardItem];
		var card = document.createElement('div');
		card.className = "bot-card";

		/*Amit changes starts */
		var imgBlock = document.createElement('a');

		imgBlock.href = jsonCard.imageRedirectUrl; //URL FIX
		imgBlock.target = '_blank';

		imgBlock.className = "imgBlock";
		imgBlock.innerHTML = "";
		if(jsonCard.imageMarkers){
			imgBlock.innerHTML = '<div class="verfiedTag">'
				+'<i class="chatBot_tick_icon"></i>'
				+'Verified'
				+'</div>';

		}
		var priceHeading = "";
		if(jsonCard.imageHead){
			priceHeading = '<div class="priceBox">₹'+jsonCard.imageHead+'</div>';
			imgBlock.innerHTML += priceHeading;
		}
		/*Amit changes ends */

		if (jsonCard.imgURL != undefined && jsonCard.imgURL) {
			var cardImage = document.createElement('img');
			cardImage.src = jsonCard.imgURL;
			imgBlock.appendChild(cardImage);
		}

		/*Amit changes starts */
		card.appendChild(imgBlock);
		/*Amit changes ends */

		var cardContent = document.createElement('div');
		cardContent.className = "bot-card-content";
		if(jsonCard.titleHead && jsonCard.sideTag){
                                cardContent.innerHTML += '<div class="bot-card-content-text projtitle ellipsis" style="display: flex;">'+jsonCard.titleHead+'<span> <img src="access_time_24px.png" >'+jsonCard.sideTag+'</span></div>';
                }else if(jsonCard.sideTag){
                        cardContent.innerHTML += '<div class="bot-card-content-text projtitle ellipsis" style="display: flex;"> <span> <img src="access_time_24px.png" >'+jsonCard.sideTag+'</span></div>';
                }

		cardContent.innerHTML += '<p class="bot-card-content-text title ellipsis">' + jsonCard.title + '</p>';
		cardContent.innerHTML += ' <p class="bot-card-content-text subtitle ellipsis">' + jsonCard.subtitle + '</p>';

		var tagContent = document.createElement('div');
		for(tagItem in jsonCard.tags){
			tagContent.innerHTML += '<div class="bot-card-content-tags"">'+jsonCard.tags[tagItem]+'</div>';
		}
		cardContent.append(tagContent);

		var cardButtons = document.createElement('div');
		cardButtons.className = "bot-card-buttons";
		for (buttonItem in jsonCard.buttons) {
			var jsonButton = jsonCard.buttons[buttonItem];
			var button = document.createElement("BUTTON");
			button.textContent = jsonButton.text;
			button.setAttribute("data-button-payload", buttonItem);
			button.setAttribute("data-card-payload", cardItem);
			button.onclick = function () {
				manageTimer();
				var buttonPayload = msg.cards[this.getAttribute("data-card-payload")]
					.buttons[this.getAttribute("data-button-payload")];
				if (buttonPayload.url == undefined) {
					botui.message.human({
delay: 200,
content: buttonPayload.text+'<span class="chatBot_msg_time">'+timeStamp()+'</span>'
});
var quickResponseChat = {
cardNumber: this.getAttribute("data-card-payload"),
	    content: buttonPayload.text,
	    value: buttonPayload.value,
	    type: msg.type,
	    metadata: cookieData,
	    isContextSet: true

}
gtag('event', 'click', {
		'event_category' : 'button',
		'event_label' : buttonPayload.text
		});
$('.bot-message-nav').hide();
sendMessage(quickResponseChat);
} else {
	gtag('event', 'click', {
			'event_category' : 'urlButton',
			'event_label' : buttonPayload.url
			});
	if(platformVal == "IOS"){
		window.location.href = buttonPayload.url;
	}else{
		window.open(buttonPayload.url, "_blank");
	}

}
};
cardButtons.appendChild(button);
}
//cardContent.appendChild(cardButtons);
card.appendChild(cardContent);
card.appendChild(cardButtons);
if(cardItem==msg.cards.length-1 && msg.cards.length == "11"){
	var card = document.createElement('div');
	card.className = "bot-card";
	prop_url = jsonCard.imageRedirectUrl // URL FIX
		var cardContent = document.createElement('div');
	cardContent.className = "bot-card-content";
	cardContent.innerHTML += '<a href="'+prop_url+'" target="_blank" class="view-all-card">'
		+'<div class="circle">'
		+'<i class="chatBot_view_all_arrow_icon"></i>'
		+'</div>'
		+'<div class="view-all-content">'
		+jsonCard.title
		+'</div>'
		+'</a>'
		card.appendChild(cardContent);
}
botCardContainer.appendChild(card);
}

$('.botui-messages-container').append(botCardContainer);
var cardDivelement = document.createElement('div');
if(platformVal == "Desktop"){
	cardDivelement.className="bot-cardslide-container desktop";
	cardDivelement.id = "cardslide-container_"+cardNo;

	$('.botui-messages-container').append(cardDivelement);
	if(msg.cards.length >1){
		$('#cardslide-container_'+cardNo).prepend($('<div class="card-arrow-right"></div>'));
	}
	$('#cardslide-container_'+cardNo).prepend($('#bot-card-container_'+cardNo));
	if(msg.cards.length >1){
		$('#cardslide-container_'+cardNo).prepend($('<div class="card-arrow-left"></div>'));
	}

}else{
	cardDivelement.className="bot-cardslide-container";
}
if(msg.bottomArrowVal){
	var bottomContent = document.createElement('div');
	bottomContent.innerHTML += '<div class="bot-message-nav"><img src="arrow_down_24px.png"/><span>'+msg.bottomArrowVal+'</span></div>';
	botCardContainer.appendChild(bottomContent);
	handleNavigationArrow();
}


//setTimeout(function(){ $(".botui-container").animate({ scrollTop: $('.botui-container').prop("scrollHeight")}, 2000); }, 6000);
}

function handleNavigationArrow(){
        console.log("tracking height");
        var sh = $('.botui-container').prop("scrollHeight");
        var st=0;
        $(window).on("scroll",function(e){
                 setTimeout(function(){ st = $(window).scrollTop();},2000);
                 if (st>lastScrollTop){
                         $('.bot-message-nav').hide();
                 }else{
                         return false;
                 }
                 lastScrollTop = st <= 0 ? 0 : st;

        });
}

function addContactCards(msg)
{
	signal ++;
	var botCardContainer = document.createElement('div');
	botCardContainer.className = 'bot-card-container';
	botCardContainer.id = 'bot-card-container_'+cardNo;
	for (cardItem in msg.cards) {
		var jsonCard = msg.cards[cardItem];
		var card = document.createElement('div');
		card.className = "bot-card contact";

		if(jsonCard.dataCookie){
			var val = jsonCard.dataCookie.split(":");
			setCookie(val[0],val[1],"1",domainName);
		}		
		var cardContent = document.createElement('div');
		cardContent.className = "bot-card-content";


		cardContent.innerHTML += '<div class="name-block">'
			+'<div class="avatar">'
			+'<span>'+jsonCard.contactInitials+'</span>'
			+'</div>'
			+'<div class="name">'
			+'<div class="name-detail ellipsis">'+jsonCard.contactName+'</div>'
			+'<div class="contact-type">Seller</div>'
			+'</div>'
			+'</div>'
			+'<div class="phone-detail">'
			+'<i class="chatBot_mobile_icon"></i>'
			+'<span>+'+ jsonCard.subtitle + '</span>'
			+'</div>'
			+'<div class="email-detail">'
			+'<i class="chatBot_email_icon"></i>'
			+'<span>'+ jsonCard.title +'</span>'
			+'</div>';

		// In case of single button use class 'single' like this (class="bot-card-buttons single")

		var cardButtons = document.createElement('div');
		cardButtons.className = "bot-card-buttons";
		for (buttonItem in jsonCard.buttons) {
			var jsonButton = jsonCard.buttons[buttonItem];
			var button = document.createElement("BUTTON");
			button.textContent = jsonButton.text;
			button.setAttribute("data-button-payload", buttonItem);
			button.setAttribute("data-card-payload", cardItem);
			button.onclick = function () {
				manageTimer();
				var buttonPayload = msg.cards[this.getAttribute("data-card-payload")]
					.buttons[this.getAttribute("data-button-payload")];
				if (buttonPayload.url == undefined) {
					botui.message.human({
delay: 200,
content: buttonPayload.text+'<span class="chatBot_msg_time">'+timeStamp()+'</span>'
});
var quickResponseChat = {
cardNumber: this.getAttribute("data-card-payload"),
	    content: buttonPayload.text,
	    value: buttonPayload.value,
	    type: msg.type,
	    metadata: cookieData,
	    isContextSet: true

}

sendMessage(quickResponseChat);
} else {
	if(buttonPayload.url.indexOf("tel:") !== -1){
		if(platformVal == "IOS")
			window.location.href = buttonPayload.url;
		else
			document.location.href = buttonPayload.url;
	}else{
		if(platformVal == "IOS"){
			window.location.href = buttonPayload.url;
		}else{
			window.open(buttonPayload.url, "_blank");
		}

	}

}
};
cardButtons.appendChild(button);
}
//cardContent.appendChild(cardButtons);
card.appendChild(cardContent);
card.appendChild(cardButtons);
botCardContainer.appendChild(card);
}
$('.botui-messages-container').append(botCardContainer);

var cardDivelement = document.createElement('div');
if(platformVal == "Desktop"){
	cardDivelement.className="bot-cardslide-container desktop";
	cardDivelement.id = "cardslide-container_"+cardNo;

	$('.botui-messages-container').append(cardDivelement);
	if(msg.cards.length >1){
		$('#cardslide-container_'+cardNo).prepend($('<div class="card-arrow-right"></div>'));
	}
	$('#cardslide-container_'+cardNo).prepend($('#bot-card-container_'+cardNo));
	if(msg.cards.length >1){
		$('#cardslide-container_'+cardNo).prepend($('<div class="card-arrow-left"></div>'));
	}

}else{
	cardDivelement.className="bot-cardslide-container";
}



$(".botui-container").animate({ scrollTop: $('.botui-container').prop("scrollHeight")}, 1000);
}

function runTimer(){
        console.log("runnnnnnnnnnnnn");
        idleTimer = setInterval(sendIdleMsg, 180000);

}
function clearTimer(){
        clearInterval(idleTimer);
        console.log("reset");
        console.log(idleTimer);
}

function manageTimer(){

        if(module == "bos" || module=="stagingbos"){
                clearTimer();
                runTimer();
        }
}
function sendIdleMsg(){
        var userChat = {
                content: "Idle",
                type: "text"
        }
        sendMessage(userChat);
        clearTimer();

        console.log("aaaaa");
}
io.on('assistant chat message', function (msg) {
		var type = msg.type;
		var tempType;
		 showChatWindow();
		var lowerType = type.toLowerCase();
	        if(lowerType!='previousloaded' && lowerType!="hideloader" && lowerType!='showloader' && lowerType!="cleartime" && lowerType!="setcookie")
        	{
                	clearQuickReply();
                	clearLoader();
                	botMessageCount++;
                	msg.countMsg = botMessageCount==1?true:false;
        	}

		//console.log(msg.countMsg);
		switch (type.toLowerCase()) {


		 case "previousloaded":
                        showPreviousMessages(msg);
                        break;
                case "hideloader":
                        showLoader = false;//loading

                        break;
                case "showloader":
                        showLoader = true;
                        break;
                case "cleartimer":      //Server Managed timers
                        clearTimer();
                        break;

                case "setcookie":       //Set Cookie Directly From server 
                        var cookieData = msg.cookieVal;
                        if(cookieData){
                                var val = cookieData.split("|");
                                setCookie(val[0],val[1],"1",domainName);
                        }
                        console.log(cookieData);
                        break;


		case "referral":
		botui.message.bot({
content: msg.content
});
		break;
		case "text":
		addMessage(msg);
		break;
		case "quickreply":
		if(signal == 1){
		setTimeout(function(){ addQuickReply(msg); }, 300);
		$(".bot-qr-container").delay(500).show(0);
		}else{
			addQuickReply(msg);
			$(".bot-qr-container").show();
		}

$(".arrow-left").hide();
$(".arrow-right").hide();

break;
case "buttons":
addButtons(msg);
break;
case "cards":
addCards(msg);

var cardTempNo = cardNo;	
$(document).on('click', "#cardslide-container_"+cardNo+" .card-arrow-right" ,function() {
		var rightPos = $("#bot-card-container_"+cardTempNo).scrollLeft();
		$("#bot-card-container_"+cardTempNo).animate({scrollLeft: rightPos +270}, 500,"linear");
		});

$(document).on('click', "#cardslide-container_"+cardNo+" .card-arrow-left" ,function() {
		var leftPos = $("#bot-card-container_"+cardTempNo).scrollLeft();
		$("#bot-card-container_"+ cardTempNo).animate({scrollLeft: leftPos - 270}, 500,"linear");
		});
new PerfectScrollbar('#bot-card-container_'+cardNo, {
wheelSpeed: 2,
wheelPropagation: true,
minScrollbarLength: 20,
swipeEasing: true,
scrollingThreshold: 0
});
cardNo++;
break;
case "contactcards":
addContactCards(msg);

var cardTempNo = cardNo;
$(document).on('click', "#cardslide-container_"+cardNo+" .card-arrow-right" ,function() {
		var rightPos = $("#bot-card-container_"+cardTempNo).scrollLeft();
		$("#bot-card-container_"+cardTempNo).animate({scrollLeft: rightPos +270}, 500,"linear");
		});

$(document).on('click', "#cardslide-container_"+cardNo+" .card-arrow-left" ,function() {
		var leftPos = $("#bot-card-container_"+cardTempNo).scrollLeft();
		$("#bot-card-container_"+ cardTempNo).animate({scrollLeft: leftPos - 270}, 500,"linear");
		});
new PerfectScrollbar('#bot-card-container_'+cardNo, {
wheelSpeed: 2,
wheelPropagation: true,
minScrollbarLength: 20,
swipeEasing: true,
scrollingThreshold: 0
});
cardNo++;
break;

default:
botui.message.bot({
delay: 500,
content: "Unsupported message received"
});
}
});

function clearQuickReply() {
	$(".bot-qr-container").hide();
	botui.action.hide();
}

function clearLoader(){
	$('.botui-message-content.loading').attr('id','menu');
	$("#menu").parent().remove();
}

function setWorkflowAndMsgKey(){
        var workflow = findGetParameter("workflow");
        if(workflow == "ppf"){
                module = "ppf";
                msgKey = "ppf chat message";
        }else if (workflow == "bos"){
                initMsgText = "Explore Owner Services";
                module = "bos";
                msgKey = "ppf chat message";
        }else if (workflow == "stagingbos"){
                initMsgText = "Explore Owner Services";
                module = "stagingbos"; 
                msgKey = "staging ppf chat message";
        }else{
                module = "helpdesk";
                msgKey = "assistant chat message";
        }
console.log(msgKey);
}


function sendMessage(messagePayload) {
	console.log("tttttttttttttttttttttttttttttttt");
	console.log(test);
	messagePayload.userDetails = userDetails;
	messagePayload.visitorId = userDetails.visitorId;
	messagePayload.abCookie = abCookieVal;
	 messagePayload.module = module;
	console.log("payload");
	console.log(userDetails);
	clearQuickReply();
	var i = botui.message.bot({
loading:true
//delay:1000,
}).then(function (res) {
                if(showLoader==false)
                {
                        console.log("jain");
                        clearLoader();
                }
	//botui.message.remove(res);
	});

io.emit(msgKey, messagePayload);
botMessageCount=0;
}


function sendinitMessage(messagePayload) {
	//messagePayload.userDetails = userDetails;
	var i = botui.message.bot({
loading:true
//delay:1000,
}).then(function (res) {
	//botui.message.remove(res);
	});

io.emit(msgKey, messagePayload);
}

function sendRefMessage(messagePayload) { 

	var i = botui.message.bot({
loading:true
//delay:1500,
}).then(function (res) {
	//botui.message.remove(res);
	});

io.emit(msgKey, messagePayload);
}

function sendMessageWhenUserTypes(){
	manageTimer();
	$('form').submit(function () {
			var enteredChat = $('#chatBox').val();
			if (enteredChat) {
			humanMessageCount++;
			totalBotMessage++;
			setCookie("msgCount",totalBotMessage,"1",domainName);
			botui.message.human({
content: enteredChat+'<span class="chatBot_msg_time">'+timeStamp()+'</span>'
});
			var userChat = {
content: enteredChat,
type: "text",
metadata: cookieData,
isContextSet: true,
messageSentCount: humanMessageCount
}

gtag('event', 'type', {
	'event_category' : 'msgType',
	'event_label' : enteredChat
	});
sendMessage(userChat);
$('.bot-message-nav').hide();
$('#chatBox').val('');
}
return false;
});
}

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

function createJsonParamForUser(paramName){
	var data ={};
	var eoiCookie = getCookie("QryUsrData");
	var vistorCookie = getCookie("GOOGLE_SEARCH_ID");
	if(eoiCookie){
		//eoiCookie = eoiCookie.replaceAll("%7C","|");
		 eoiCookie = decodeURI(eoiCookie);
		eoiCookie = eoiCookie.replace("%40","@");
		console.log(eoiCookie);
		var eoiData = eoiCookie.split("|");
		data['Name'] = eoiData[0];
		data['Email'] = eoiData[1];
		data['phone-number'] = eoiData[2];
		data['identityRatio'] = eoiData[3];
		data['shareWhatsappInfo'] = eoiData[4];
		if(eoiData[5] !=null){
                    data['comBuyType'] = eoiData[5];
                }

	} 

	if(vistorCookie){
		data['visitorId'] = vistorCookie;
	}
	/**testing**/
	if(!vistorCookie){
		data[paramName] = findGetParameter(paramName);
	}
	/**/

	if(platformVal){
		data['platform'] = platformVal;
	}


	return data;
}

function createJsonParam(getParams){
	var len = getParams.length;
	var findParam = "";
	var data = {};
	for(i=0;i<len;i++){
		findParam = findGetParameter(getParams[i]);
		if(findParam){
			findParam = findParam.replace("/"," ");
			findParam = findParam.replace("-"," ");
			data[getParams[i]] = findParam;
		}
	}
	return data;
}

function formatLoggedinData(loginData){
        var finalLoginData={};
        finalLoginData['token'] = loginData['token'];
        finalLoginData['profileId'] = loginData['user']['profileId']
        finalLoginData['Email'] = loginData['user']['email'];
        finalLoginData['Name'] = loginData['user']['name'];
        finalLoginData['phone-number'] = loginData['contact']['mobile1'];
        finalLoginData['isLoggedIn'] = "Y";

        if(loginData['notificationSubscriptionStatus']== true)
               finalLoginData['shareWhatsappInfo'] = "Y";
        else
               finalLoginData['shareWhatsappInfo'] = "N";
        if(loginData['verified']== true)
               finalLoginData['mobileVerified'] = "Y";
        else
               finalLoginData['mobileVerified'] = "N";
        if(loginData['user']['userClass'] == "O")
               finalLoginData['identityRatio'] = "I";
        else
               finalLoginData['identityRatio'] = "D";
        return finalLoginData;
}

io.on('login message', function(loginData){

         var formattedLoginData={};
         console.log(loginData);
        if(loginData.erroMsg){
		console.log("Error in Login");
        }else{
                loginData = $.parseJSON(loginData);
                formattedLoginData = formatLoggedinData(loginData);
        }
        if(socketUserData['visitorId'])
                     formattedLoginData['visitorId'] = socketUserData['visitorId'];
        if(socketUserData['platform'])
                     formattedLoginData['platform'] = socketUserData['platform'];

        userDetails = formattedLoginData;
        var initMessage = getInitMessagePayLoad(cookieData,formattedLoginData);
        sendinitMessage(initMessage);
});


function getLoggedInUserInfo(cookieData, userData){
	var testURL = "https://www.99acres.com/api-aggregator/auth?source=chatbot";

	if(platformVal == "ANDROID" || platformVal == "Android"){
		testURL = "https://www.99acres.com/api-aggregator/auth?source=android_chatbot";
		socketUserData = userData;
                io.emit("login",loginCookie);
                return;
	
	}else if (platformVal == "IOS"){
		 testURL = "https://www.99acres.com/api-aggregator/auth?source=ios_chatbot";
	}
	var jqxhr = $.post( testURL, function() {
			})
	.done(function(loginData) {

			var finalLoginData={};
                        if(loginData){
                                finalLoginData = formatLoggedinData(loginData);
                        }
                        if(userData['visitorId'])
                                finalLoginData['visitorId'] = userData['visitorId'];
                        if(userData['platform'])
                                finalLoginData['platform'] = userData['platform'];
                        userDetails = finalLoginData;
                        var initMessage = getInitMessagePayLoad(cookieData,finalLoginData);
                        sendinitMessage(initMessage);


	})
	.fail(function() {
			var data={};
			if(userData['visitorId'])
			data['visitorId'] = userData['visitorId'];
			if(userData['platform'])
			data['platform'] = userData['platform'];
			data['isLoggedIn'] = "N";
			var eoiCookie = getCookie("QryUsrData");
			if(eoiCookie){
			 eoiCookie = decodeURI(eoiCookie);
//			eoiCookie = eoiCookie.replaceAll("%7C","|");
			eoiCookie = eoiCookie.replace("%40","@");
			var eoiData = eoiCookie.split("|");
			data['Name'] = eoiData[0];
			data['Email'] = eoiData[1];
			data['phone-number'] = eoiData[2];
			data['identityRatio'] = eoiData[3];
			data['shareWhatsappInfo'] = eoiData[4];
			if(eoiData[5] !=null){
                                       data['comBuyType'] = eoiData[5];
                                }

			}

			var initMessage = getInitMessagePayLoad(cookieData,data);
			sendinitMessage(initMessage);

	})
	.always(function() {

			});

}

function getInitMessagePayLoad(cookieData, userData){

	userDataString = JSON.stringify(userData);
	cookieDataString = JSON.stringify(cookieData);
	console.log("Cookie");
	console.log(cookieDataString);
	console.log("User");
	console.log(userDataString);
	var initMessage = {
content: initMsgText,
	 type: "text",
	 requestType: "referal",
	 metadata: cookieDataString,
	 userDetails:userDataString,
	 visitorId:userData.visitorId,
	 platform: platformVal,
	 abCookie: abCookieVal,
	 module:module
	}
	return initMessage;
}

$(document).ready(function() {
setCookie("msgCount",totalBotMessage,"1",domainName);
		$(document).on('click', '.bot-message-nav', function(e){ 
				e.preventDefault();
				$("html, body").animate({ scrollTop: $('.botui-container').prop("scrollHeight")}, 1000);
				$(this).hide();
				});

		$(".bot-qr-container").hide();

		platformVal = findGetParameter("platform");

		$.ajaxSetup({
			xhrFields: {
				withCredentials: true
			}
		});
		abCookieVal= getCookie("99_ab");
		if(!abCookieVal)
		abCookieVal = findGetParameter("abCookie");

		setWorkflowAndMsgKey();
		console.log("abcokie");
		console.log(abCookieVal);
		if(!platformVal) platformVal == "Mobile";

if(platformVal == "Desktop"){
	$('.chatNavbar').addClass('desktop');
	$('#chatbotType').addClass('desktop');
	$( "#chatBox" ).keyup(function(e) {
			$('.chatBot_Button_icon').addClass('active');
			if(e.keyCode == 8){
			var len = $("#chatBox").val().length;
			if(len ==0)  $('.chatBot_Button_icon').removeClass('active');
			}	
			});

}


var getParams = ["source","city","locality","propType","society","resCom","preference","budgetMin","budgetMax","bhk","propertyId","projectId","userClass","resale","constructionStatus","downloadBrochure","contactSellers","count","localityId","workflow"];

cookieData = createJsonParam(getParams);
userDetails = createJsonParamForUser("visitorId");

loginCookie = getCookie("PROPLOGIN");
console.log("login"+loginCookie);
if(loginCookie && loginCookie !="null"){
	getLoggedInUserInfo(cookieData,userDetails);
}else{
	var initMessage = getInitMessagePayLoad(cookieData,userDetails);
	sendinitMessage(initMessage);
}
sendMessageWhenUserTypes();
/*	 $(".chatBot_Close_icon").on("click", function(){
	 history.back();

	 });*/

});

function setCookie(name, value, days, domainName) {
	var expires = "";
	var cookieVal="";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	cookieVal = name + "=" + (value || "") + expires + "; path=/";
	if(domainName){ 
		cookieVal += ";domain="+domainName;
	}
	document.cookie = cookieVal;
}



function getCookie(name) {
     if(platformVal == "ANDROID" || platformVal == "Android"){
	var cookieGetVal=null;
        cookieGetVal = findGetParameter(name);

	if((name == "PROPLOGIN" || name == "GOOGLE_SEARCH_ID") && cookieGetVal){
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
console.log(cookieGetVal);
                   if(cookieGetVal && cookieGetVal !="null")
                         return cookieGetVal;
		   else
			return "";
         }

     }
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return false;
}


function getCookieOld(cname) {
	if(platformVal == "ANDROID" || platformVal=="IOS"){
                if(cname == "QryUsrData" || cname == "GOOGLE_SEARCH_ID"){
                        var cookieGetVal=null;
                        cookieGetVal = findGetParameter(cname);
                        if(cookieGetVal)
                                return cookieGetVal;
                }
        }

	var allcookies = document.cookie;
	var cookiesArr = allcookies.split(";");
	var currentCookie = null, cookieVal=null;
	$.each(cookiesArr ,function(i)
			{
			currentCookie = $.trim(cookiesArr[i]);
			if(currentCookie.startsWith(cname))
			{
			cookieVal = currentCookie;
			var length = cname.length;
			//				console.log(length);
			//				console.log("i am here");
			//				console.log(currentCookie);
			if(currentCookie){
			cookieVal = currentCookie.substr(length+1);
			}
			return false;
			}

			});
	return cookieVal;
}

function findGetParameter(parameterName) {
	var result = null,
	    tmp = [];
	var items = location.search.substr(1).split("&");
	for (var index = 0; index < items.length; index++) {
		tmp = items[index].split("=");
		if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
	}
	return result;
}

/*
   const perfectScroll = new PerfectScrollbar('.botui-actions-container', {
wheelSpeed: 2,
wheelPropagation: true,
minScrollbarLength: 20,
swipeEasing: true,
scrollingThreshold: 0
});
const ps = new PerfectScrollbar('.botui-container', {
wheelSpeed: 2,
wheelPropagation: true,
minScrollbarLength: 20,
swipeEasing: true,
scrollingThreshold: 0
});
*/
