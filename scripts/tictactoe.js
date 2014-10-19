var TicTacToeView=Backbone.View.extend({
	el:$("#canvas").parent(),
	//turn correspons to the turn of player or computer
	//1 means player and 2 means computer
	render:function(){
		this.turn=1;
		this.player=[];// this array contains the positions that the player has moved
		this.computer=[];// this array contains the positions of the computer
		this.left=[1,2,3,4,5,6,7,8,9];
		this.ticTacToeCanvas=canvas.getContext('2d');
		this.drawLine1(this.ticTacToeCanvas);
        this.drawLine2(this.ticTacToeCanvas);
        this.drawLine3(this.ticTacToeCanvas);
        this.drawLine4(this.ticTacToeCanvas);
	},
	drawLine1:function(canvas){
		canvas.beginPath();
		canvas.moveTo(95,0);
	    canvas.lineTo(95,300);
	    canvas.stroke();
	},
	drawLine2:function(canvas){
		canvas.beginPath();
		canvas.moveTo(200,0);
	    canvas.lineTo(200,300);
	    canvas.stroke();
	},
	drawLine3:function(canvas){
		canvas.beginPath();
		canvas.moveTo(0,100);
	    canvas.lineTo(300,100);
	    canvas.stroke();
	},
	drawLine4:function(canvas){
		canvas.beginPath();
		canvas.moveTo(0,200);
	    canvas.lineTo(300,200);
	    canvas.stroke();
	},
	events:{
		"click #canvas":"markPlayerOrComputer"
	},
	drawCrossIn1:function(context){
		context.beginPath();
		context.moveTo(20,20);
		context.lineTo(60,60);
		context.stroke();
		context.beginPath();
		context.moveTo(80,20);
		context.lineTo(20,60);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn2:function(context){
		context.beginPath();
		context.moveTo(120,20);
		context.lineTo(160,60);
		context.stroke();
		context.beginPath();
		context.moveTo(180,20);
		context.lineTo(120,60);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn3:function(context){
		context.beginPath();
		context.moveTo(220,20);
		context.lineTo(260,60);
		context.stroke();
		context.beginPath();
		context.moveTo(280,20);
		context.lineTo(220,60);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn4:function(context){
		context.beginPath();
		context.moveTo(20,120);
		context.lineTo(60,160);
		context.stroke();
		context.beginPath();
		context.moveTo(80,120);
		context.lineTo(20,160);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn5:function(context){
		context.beginPath();
		context.moveTo(120,120);
		context.lineTo(160,160);
		context.stroke();
		context.beginPath();
		context.moveTo(180,120);
		context.lineTo(120,160);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn6:function(context){
		context.beginPath();
		context.moveTo(220,120);
		context.lineTo(260,160);
		context.stroke();
		context.beginPath();
		context.moveTo(280,120);
		context.lineTo(220,160);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn7:function(context){
		context.beginPath();
		context.moveTo(20,220);
		context.lineTo(60,260);
		context.stroke();
		context.beginPath();
		context.moveTo(80,220);
		context.lineTo(20,260);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn8:function(context){
		context.beginPath();
		context.moveTo(120,220);
		context.lineTo(160,260);
		context.stroke();
		context.beginPath();
		context.moveTo(180,220);
		context.lineTo(120,260);
		context.stroke();
		this.turn=1;
	},
	drawCrossIn9:function(context){
		context.beginPath();
		context.moveTo(220,220);
		context.lineTo(260,260);
		context.stroke();
		context.beginPath();
		context.moveTo(280,220);
		context.lineTo(220,260);
		context.stroke();
		this.turn=1;
	},
	hasWon:function(listPassed){
		if (_.contains(listPassed,1) && _.contains(listPassed,2) && _.contains(listPassed,3)) {
			return true;
		};
		if (_.contains(listPassed,4) && _.contains(listPassed,5) && _.contains(listPassed,6)) {
			return true;
		};
		if (_.contains(listPassed,7) && _.contains(listPassed,8) && _.contains(listPassed,9)) {
			return true;
		};
		if (_.contains(listPassed,1) && _.contains(listPassed,4) && _.contains(listPassed,7)) {
			return true;
		};
		if (_.contains(listPassed,2) && _.contains(listPassed,5) && _.contains(listPassed,8)) {
			return true;
		};
		if (_.contains(listPassed,3) && _.contains(listPassed,6) && _.contains(listPassed,9)) {
			return true;
		};
		if (_.contains(listPassed,1) && _.contains(listPassed,5) && _.contains(listPassed,9)) {
			return true;
		};
		if (_.contains(listPassed,7) && _.contains(listPassed,5) && _.contains(listPassed,3)) {
			return true;
		};
	},
	noPlaceToMove:function(){
		if (this.left.length==0) {
			return true;
		};
		return false;
	},
	drawCircleIn1:function(context){
		context.beginPath();
	    context.arc(50, 50, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn2:function(context){
		context.beginPath();
	    context.arc(150, 50, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn3:function(context){
		context.beginPath();
	    context.arc(250, 50, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn4:function(context){
		context.beginPath();
	    context.arc(50, 150, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn5:function(context){
		context.beginPath();
	    context.arc(150, 150, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn6:function(context){
		context.beginPath();
	    context.arc(250, 150, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn7:function(context){
		context.beginPath();
	    context.arc(50, 250, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn8:function(context){
		context.beginPath();
	    context.arc(150, 250, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
		if (this.hasWon(this.player)) {
			this.showAlertThatPlayerHasWon();
		};
		if(this.noPlaceToMove()){
			this.showAlertThatGameEndsInDraw();
		}
	},
	drawCircleIn9:function(context){
		context.beginPath();
	    context.arc(250, 250, 20, 0, 2 * Math.PI, false);
	    context.fillStyle = 'white';
	    context.fill();
	    context.lineWidth = 5
	    context.stroke();
		this.turn=2;
	
	},
	makeComputerMove:function(position){
		var indexOfElementToBeRemoved=0;
		switch(position){
			case 1:
				 indexOfElementToBeRemoved=this.left.indexOf(1);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn1(this.ticTacToeCanvas);
					this.computer.push(1);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 2:
				 indexOfElementToBeRemoved=this.left.indexOf(2);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn2(this.ticTacToeCanvas);
					this.computer.push(2);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 3: 
				indexOfElementToBeRemoved=this.left.indexOf(3);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn3(this.ticTacToeCanvas);
					this.computer.push(3);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 4: 
				indexOfElementToBeRemoved=this.left.indexOf(4);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn4(this.ticTacToeCanvas);
					this.computer.push(4);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 5: 
				indexOfElementToBeRemoved=this.left.indexOf(5);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn5(this.ticTacToeCanvas);
					this.computer.push(5);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 6: indexOfElementToBeRemoved=this.left.indexOf(6);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn6(this.ticTacToeCanvas);
					this.computer.push(6);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 7: indexOfElementToBeRemoved=this.left.indexOf(7);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn7(this.ticTacToeCanvas);
					this.computer.push(7);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 8: indexOfElementToBeRemoved=this.left.indexOf(8);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn8(this.ticTacToeCanvas);
					this.computer.push(8);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
			case 9: indexOfElementToBeRemoved=this.left.indexOf(9);
				if(indexOfElementToBeRemoved>-1){
					this.drawCrossIn9(this.ticTacToeCanvas);
					this.computer.push(9);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.computer)) {
						this.showAlertThatComputerHasWon();
					};
				}
				break;
		}
	},
	calculateBoxNumberToDraw:function(x,y){
		var indexOfElementToBeRemoved=0;

		//Box 1 is selected
		if (x>=8&&x<104&&y>=8&&y<108) {
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(1);
				if (indexOfElementToBeRemoved>-1){
					this.drawCircleIn1(this.ticTacToeCanvas);
					this.player.push(1);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		}

		//Box 2 is selected
		if (x>=104&&x<208&&y>=8&&y<108){
			if (this.turn==1) {
			indexOfElementToBeRemoved=this.left.indexOf(2);
				if (indexOfElementToBeRemoved>-1){
					this.drawCircleIn2(this.ticTacToeCanvas);
					this.player.push(2);
					this.left.splice(indexOfElementToBeRemoved,1);
					if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		} 

		//Box 3 is selected
		if(x>=208&&x<312&&y>=8&&y<108){
			if (this.turn==1) {
					indexOfElementToBeRemoved=this.left.indexOf(3);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn3(this.ticTacToeCanvas);
						this.player.push(3);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		}

		//Box 4 is selected
		if (x>=8&&x<104&&y>=108&&y<208){
				if (this.turn==1) {
					indexOfElementToBeRemoved=this.left.indexOf(4);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn4(this.ticTacToeCanvas);
						this.player.push(4);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		} 

		//Box 5 is selected
		if (x>=104&&x<208&&y>=108&&y<208){
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(5);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn5(this.ticTacToeCanvas);
						this.player.push(5);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		}

		// Box 6 is selected
		if (x>=208&&x<312&&y>=108&&y<208){
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(6);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn6(this.ticTacToeCanvas);
						this.player.push(6);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		}

		//Box 7 is selected
		if (x>=8&&x<104&&y>=208&&y<310){
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(7);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn7(this.ticTacToeCanvas);
						this.player.push(7);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		} 

		// Box 8 is selected
		if (x>=104&&x<208&&y>=208&&y<310){
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(8);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn8(this.ticTacToeCanvas);
						this.player.push(8);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		} 

		//Box 9 is selected
		if (x>=208&&x<312&&y>=208&&y<310){
			if (this.turn==1) {
				indexOfElementToBeRemoved=this.left.indexOf(9);
					if (indexOfElementToBeRemoved>-1){
						this.drawCircleIn9(this.ticTacToeCanvas);
						this.player.push(9);
						this.left.splice(indexOfElementToBeRemoved,1);
						if (this.hasWon(this.player)) {
						this.showAlertThatPlayerHasWon();
					}
					else if(this.noPlaceToMove()){
						this.showAlertThatGameEndsInDraw();
					}
					else {
						this.PlayComputer();
					}
				}
				else{
					this.showAlertForAlreadyPlayedThere();
				}
			}
			else{
				this.showAlertToWaitForComputer();
			}
		} 
	},
	markPlayerOrComputer:function(evt){
		var rect = canvas.getBoundingClientRect();
		var x=evt.clientX-rect.left;
		var y=evt.clientY-rect.top;
		this.calculateBoxNumberToDraw(x,y);
	},
	showAlertToWaitForComputer:function(){
		alert("Please wait as it is not your turn!!!");
	},
	showAlertForAlreadyPlayedThere:function(){
		alert("Haha!! You can't trick me!!! Or are you blind!!!");
	},
	showAlertThatGameEndsInDraw:function(){
		alert("Well played Sir.. But you still couldn't beat me!!!!");
		location.reload(true);
	},
	showAlertThatComputerHasWon:function(){
		alert("I told ya I would whup your ass!!!");
		location.reload(true);
	},
	showAlertThatPlayerHasWon:function(){
		alert("My system has been corrupted.. I can't loose to someone like you!!!");
		location.reload(true);
	},
	PlayComputer:function(){
		var positionToPlay=this.bestPositionToPlay();
		this.makeComputerMove(positionToPlay);
	},
	bestPossibleMove:function(){
		var bestPossible = [1,3,5,7,9];
		var bestPossibleNow =_.intersection(bestPossible,this.left);
		if (_.contains(bestPossibleNow,5))
			return 5;

		else{
			var playAtanyRandomPosition=_.sample(bestPossibleNow);
			return playAtanyRandomPosition;			
		}
	},
	playToWin:function(){
		var bestForComputer=this.bestLeftForComputer(this.computer);
		if(bestForComputer==0 && this.left.length>2)
			return this.bestPossibleMove();
		else if(this.left.length<=2)
			return _.sample(this.left);
		return bestForComputer;
	},
	computerIsWinning:function(){
		if (_.contains(this.computer,1) && _.contains(this.computer,2) && _.contains(this.left,3)) {
			return 3;
		};
		if (_.contains(this.computer,1) && _.contains(this.computer,3) && _.contains(this.left,2)) {
			return 2;
		};
		if (_.contains(this.computer,2) && _.contains(this.computer,3) && _.contains(this.left,1)) {
			return 1;
		};
		if (_.contains(this.computer,4) && _.contains(this.computer,5) && _.contains(this.left,6)) {
			return 6;
		};
		if (_.contains(this.computer,4) && _.contains(this.computer,6) && _.contains(this.left,5)) {
			return 5;
		};
		if (_.contains(this.computer,5) && _.contains(this.computer,6) && _.contains(this.left,4)) {
			return 4;
		};
		if (_.contains(this.computer,7) && _.contains(this.computer,8) && _.contains(this.left,9)) {
			return 9;
		};
		if (_.contains(this.computer,7) && _.contains(this.computer,9) && _.contains(this.left,8)) {
			return 8;
		};
		if (_.contains(this.computer,1) && _.contains(this.computer,4) && _.contains(this.left,7)) {
			return 7;
		};
		if (_.contains(this.computer,1) && _.contains(this.computer,7) && _.contains(this.left,4)) {
			return 4;
		};
		if (_.contains(this.computer,7) && _.contains(this.computer,4) && _.contains(this.left,1)) {
			return 1;
		};
		if (_.contains(this.computer,2) && _.contains(this.computer,5) && _.contains(this.left,8)) {
			return 8;
		};
		if (_.contains(this.computer,5) && _.contains(this.computer,8) && _.contains(this.left,2)) {
			return 2;
		};
		if (_.contains(this.computer,2) && _.contains(this.computer,8) && _.contains(this.left,5)) {
			return 5;
		};
		if (_.contains(this.computer,3) && _.contains(this.computer,6) && _.contains(this.left,9)) {
			return 9;
		};
		if (_.contains(this.computer,3) && _.contains(this.computer,9) && _.contains(this.left,6)) {
			return 6;
		};
		if (_.contains(this.computer,9) && _.contains(this.computer,6) && _.contains(this.left,3)) {
			return 3;
		};
		if (_.contains(this.computer,1) && _.contains(this.computer,5) && _.contains(this.left,9)) {
			return 9;
		};
		if (_.contains(this.computer,1) && _.contains(this.computer,9) && _.contains(this.left,5)) {
			return 5;
		};
		if (_.contains(this.computer,5) && _.contains(this.computer,9) && _.contains(this.left,1)) {
			return 1;
		};
		if (_.contains(this.computer,3) && _.contains(this.computer,5) && _.contains(this.left,7)) {
			return 7;
		};
		if (_.contains(this.computer,3) && _.contains(this.computer,7) && _.contains(this.left,5)) {
			return 3;
		};
		if (_.contains(this.computer,7) && _.contains(this.computer,5) && _.contains(this.left,3)) {
			return 3;
		};
		return 0;
	},
	bestLeftForComputer:function(listPassed){
			var positionToPlayTowin=this.computerIsWinning();
			if(positionToPlayTowin!=0)
				return positionToPlayTowin;
			if (_.contains(listPassed,1) && _.contains(listPassed,5) && _.contains(this.left,9)) {
				return 9;
			};
			if (_.contains(listPassed,9) && _.contains(listPassed,5) && _.contains(this.left,1)) {
				return 1;
			};
			if (_.contains(listPassed,1) && _.contains(listPassed,2) && _.contains(this.left,3)) {
				return 3;
			};
			if (_.contains(listPassed,1) && _.contains(listPassed,3) && _.contains(this.left,2)) {
				return 2;
			};
			if (_.contains(listPassed,2) && _.contains(listPassed,3) && _.contains(this.left,1)) {
				return 1;
			};
			if (_.contains(listPassed,2) && _.contains(listPassed,8) && _.contains(this.left,5)) {
				return 5;
			};
			if (_.contains(listPassed,3) && _.contains(listPassed,9) && _.contains(this.left,6)) {
				return 6;
			};
			if (_.contains(listPassed,4) && _.contains(listPassed,6) && _.contains(this.left,5)) {
				return 5;
			};
			if (_.contains(listPassed,7) && _.contains(listPassed,9) && _.contains(this.left,8)) {
				return 8;
			};
			if (_.contains(listPassed,4) && _.contains(listPassed,5) && _.contains(this.left,6)) {
				return 6;
			};
			if (_.contains(listPassed,6) && _.contains(listPassed,5) && _.contains(this.left,4)) {
				return 4;
			};
			if (_.contains(listPassed,7) && _.contains(listPassed,8) && _.contains(this.left,9)) {
				return 9;
			};
			if (_.contains(listPassed,8) && _.contains(listPassed,9) && _.contains(this.left,7)) {
				return 7;
			};
			if (_.contains(listPassed,1) && _.contains(listPassed,4) && _.contains(this.left,7)) {
				return 7;
			};
			if (_.contains(listPassed,1) && _.contains(listPassed,7) && _.contains(this.left,4)) {
				return 4;
			};
			if (_.contains(listPassed,4) && _.contains(listPassed,7) && _.contains(this.left,1)) {
				return 1;
			};
			if (_.contains(listPassed,2) && _.contains(listPassed,5) && _.contains(this.left,8)) {
				return 8;
			};
			if (_.contains(listPassed,8) && _.contains(listPassed,5) && _.contains(this.left,2)) {
				return 2;
			};
			if (_.contains(listPassed,3) && _.contains(listPassed,6) && _.contains(this.left,9)) {
				return 9;
			};
			if (_.contains(listPassed,6) && _.contains(listPassed,9) && _.contains(this.left,3)) {
				return 3;
			};
			if (_.contains(listPassed,3) && _.contains(listPassed,5) && _.contains(this.left,7)) {
				return 7;
			};
			if (_.contains(listPassed,7) && _.contains(listPassed,5) && _.contains(this.left,3)) {
				return 3;
			};
			if ((_.contains(listPassed,3) && _.contains(listPassed,7)) || (_.contains(listPassed,1) && _.contains(listPassed,9))) {
				return _.sample([2,4,6,8]);
			};
			return 0;
	},
	bestPositionToPlay:function(){
		if (this.player.length<2) {
			return this.playToWin();
		}
		else{
			var bestForComputer=this.bestLeftForComputer(this.player);
			if(bestForComputer==0){
				return this.playToWin();
			}
			return bestForComputer;
		}
	}
});

var ticTacToeView=new TicTacToeView();
ticTacToeView.render();
