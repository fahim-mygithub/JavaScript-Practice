var budgetController = (function(){

    
})();

var UIController = (function(){

    var DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function(){
            return{
             type: document.querySelector(DomStrings.inputType).value, // inc pr exp
             descritption: document.querySelector(DomStrings.inputDescription).value,
             value: document.querySelector(DomStrings.inputValue).value
            };        
        },

        getDomStrings: function(){
            return DomStrings;
        }
    };
})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var Dom = UICtrl.getDomStrings();

    var ctrlAddItem = function() {
        
        //1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        //2. Add item to budget controller

        //3. Add the item to ui

        //4. Calulate the budget

        //5. Display the budget on the UI
       
    }

    document.querySelector(Dom.inputBtn).addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    
})(budgetController, UIController);