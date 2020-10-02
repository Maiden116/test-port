// Add your javascript here
var buttons = $(":button")

buttons.on("click", function(e){    
    actionHandler(e.target.value, $("#inputElem").val())
    
  });

function actionHandler(action, value) {
    var stackBoardItem = $(".stack-item");
    var stackBoard = $(".stack-board");
   
     var maxIndex = 0 
     stackBoardItem.each(function(index,element){
        maxIndex = Math.max(maxIndex,element.id)
     })
    switch (action) {
        case "Push" : {
            if(value == undefined || value == null || value == ""){
                return alert("Please input a value")
            }
            if(stackBoard.children.length == 6 ){
                alert("Stack was already full!")
            } else {
                stackBoard.append('<div class="stack-item" id="'+(maxIndex+1)+'">'+value+'</div>');
            }
            
            break;
        }
        case "Pop":{
            stackBoard.children("#"+maxIndex).remove();
            break;
        }
        case "Empty": {
            if(isEmpty()) {
                alert("Yes, Stack is empty")
            }
            
            alert("No, Stack is not empty")
            
            break;
        }
        case "Swap": {
            if(isEmpty()){
                alert("Operation not allowed!")
                break;
            }
             last = $(".stack-board div:nth-child(1)" ).text()
             beforelast = $( ".stack-board div:nth-child(2)" ).text()
             $( ".stack-board div:nth-child(1)").text(beforelast);
             $( ".stack-board div:nth-child(2)").text(last);
             break;
        }
        case "Peek": {
            if(isEmpty()) {
                alert("Operation not allowed!")
                break;
            } 
            alert("Top Value is: "+ $(".stack-board div:nth-child(1)" ).text())
            break;
            
        }
    }
}

function isEmpty(){
    var stackBoard = $(".stack-board");
    return stackBoard.children().length == 0
}

