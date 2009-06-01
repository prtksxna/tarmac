document.observe("dom:loaded", function(event){
    tar = new Tarmac;
});

Tarmac = Class.create({
    initialize: function(){
	this.hook();
    },
    hook: function(){
	$("tarmac-add-element").observe("click",function(event){
	    this.addElement();
	}.bind(this));
	$("tarmac-toggle-grid").observe("click",function(event){
	    this.toggleGrid();
	}.bind(this));
    },
    addElement: function(){
	var newelement = new Element('div', {class: 'grid_3'}).update("Hello");
	$$("div#tarmac-workspace div").first().insert({bottom:newelement});
    },
    toggleGrid: function(){
	$$("div#tarmac-workspace div").first().toggleClassName("show_grid");
    }
});