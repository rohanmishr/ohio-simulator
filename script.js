alert("script loaded from git");

// 1: finances
var money = 10;
var income = 0;

// 2: nation
var condition;
var population;
var land;
var inventory = []; //owned items

// 3: war
var conquered = 1; //out of 196
var power;
var weaponInventory = []; //owned weapons

//object handlers
function weapon(name, desc, rarity, power){
  this.power = power; //int
  this.name = name; //str
  this.desc = desc; //str
  this.rarity = rarity; //str
  //RARITIES IN ORDER: common, uncommon, rare, epic, legendary
  //SPECIAL RARITIES: relic, artifact, superstitious
}
function item(name, desc, rarity, inc, pow, cond){
  this.name = name; //str
  this.desc = desc; //str
  this.rarity = rarity; //str
  this.inc = inc; //int, determines income boost.
  this.pow = pow; //int, determines power boost.
  this.cond = cond; //int, determines condition boost.
}
//main
var tab = "dash";
var navState = false;

function toggleNav(){
  if(navState === false){
    $("#nav").css("display", "block");
    navState = true;
  }else if(navState === true){
    $("#nav").css("display", "none");
    navState = false;
  }
}

function navDashboard(){
  tab="dash";
  $("#sh").css("background-color","white");
  $("#dash").css("background-color","orange");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","white");
}
function navInventory(){
  tab="inv";
  $("#sh").css("background-color","white");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","orange");
  $("#asc").css("background-color","white");
}
function navShop(){
  tab="sh";
  $("#sh").css("background-color","orange");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","white");
}
function navAscend(){
  tab="asc";
  $("#sh").css("background-color","white");
  $("#dash").css("background-color","white");
  $("#inv").css("background-color","white");
  $("#asc").css("background-color","orange");
}


//ITEMS & WEAPONS
var exWeapon = new weapon("Example Weapon", "An example weapon description.", "common", 5);
var exItem = new item("Example Item", "An example item description.", "uncommon", 1.1, 1.1, 1.1);

//INVENTORY HANDLER
inventory.push(exItem);
inventory.push(exWeapon);

function inventoryTick(){
  $("#inventory").empty();
  for (var i = 0; i<inventory.length; i++){
    $("#inventory").append("<button class='inventory_icon'>"+inventory[i].name+"</button>");
  }
}




//GAME TICK
setInterval(function(){
  money += income;
  $("#display_money").text("Money: $" + money.toString());
  $("#display_income").text("Income: $" + income.toString())
  $("#display_territories").text("Territories conquered: " + conquered.toString() + "/196");
},500);

//GAME LOOP
setInterval(function(){
  inventoryTick();
  if(tab=="dash"){
    $("#dashboard").css("display", "block");
  }else{
    $("#dashboard").css("display", "none");
  }

  if(tab=="sh"){
    $("#shop").css("display", "block");
  }else{
    $("#shop").css("display", "none");
  }

  if(tab=="inv"){
    $("#inventory").css("display", "block");
  }else{
    $("#inventory").css("display", "none");
  }

  if(tab=="asc"){
    $("#ascend").css("display", "block");
  }else{
    $("#ascend").css("display", "none");
  }
},1)
