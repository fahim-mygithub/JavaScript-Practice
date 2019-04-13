var budgetController = (function(){

    
})();

var UIController = (function(){

})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {
        console.log('it works');
        //1. Get the field input data

        //2. Add item to budget controller

        //3. Add the item to ui

        //4. Calulate the budget

        //5. Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    
})(budgetController, UIController);