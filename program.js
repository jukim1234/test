document.writeln('Hello, world! OOP Game <BR>');


let person = new Object();
person.name = "JW";
person.cook = function(menu) {
  this.state = "cooking";
  this.menu = "";
  this.menu = menu;
}

person.printState = function(which) {
  document.writeln('======================');	
  document.writeln('[State]'+ nvl(this.state));
  if("menu" === which) {
	 document.writeln('['+which+']'+this.menu); 
  }
}

function nvl(val) {
  return (val === undefined ? "":val);
}


let dummy = {
    state : "멍하다...created via object literal",
    menu : ["라면", "짜파게티"],
    printState : function(){
		let menus = "";
		for(i in this.menu){ menus += this.menu[i] + ", "; } 
		alert("몰라" + this.state + "--"+ menus); 
	}
};



person.printState();

person.cook("fried rice");
person.printState("menu");

dummy.printState();











