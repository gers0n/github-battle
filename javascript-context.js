
// ====== js ===========
// Implicit Binding
// Explicit Binding
// new Binding
// window Binding

//implicit binding
// left of the Dot at call time
// var name = {
// 	name: 'Tyler',
// 	age: 25,
// 	sayName: function(){
// 		console.log(this.name);
// 	}
// }
// me.sayName()

sayNameMixin = function(obj){
	obj.sayName = function(){
		console.log(this.name);
	};
};

var me = {
	name: 'Tyler',
	age: 25
};
sayNameMixin(me)

var me = {
	name: 'You',
	age: 25
};
sayNameMixin(you)

// Explicit Binding
var me = {
	name: 'You',
	age: 25
};

var sayName = function(){
	console.log('My name is '+ this.name);
};

sayName.call(me);

var sayNameAndLanguages = function(languages){
	console.log('My name is '+ this.name);
	console.log('I know: ');
	languages.map(function(language){
		console.log(language);
	});
};
var languages = ['Javascript', 'Python', 'Rubi'];
sayNameAndLanguages.call(me, languages);
//this return as a function
var newFn = sayNameAndLanguages.bind(me, languages);
console.log('HERE');
newFn();

// New Binding 
var Animal = function(color, name, type){
	// this = {}
	this.color = color;
	this.name = name;
	this.type = type;
};

var zebra = new Animal("black and white", "Zarro", "zebra")

// window Binding
var saySomething = function(){
	// this = windows; //by default
	//"use strict";
	console.log(this.something);
}