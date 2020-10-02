// Add your javascript here
var buttons = $(":button")

buttons.on("click", function(e){    
    actionHandler(e.target.value, $("#inputElem").val())
    
  });

function actionHandler(action, value) {
    var stackBoardItem = $(".stack-item");
    var stackBoard = $(".stack-board");
    if(value == undefined || value == null || value == ""){
        return alert("You must type a value on the input")
    }
     var maxIndex = 0 
     stackBoardItem.each(function(index,element){
        maxIndex = Math.max(maxIndex,element.id)
     })
    switch (action) {
        case "Push" : {
            stackBoard.prepend('<div class="stack-item" id="'+(maxIndex+1)+'">'+value+'</div>');
            break;
        }
        case "Pop":{
            stackBoard.children("#"+maxIndex).remove();
            break;
        }
        case "Empty": {
            stackBoard.children(".stack-board").remove();
        }

    }
}

