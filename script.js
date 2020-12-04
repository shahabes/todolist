$(document).ready(function(){

    todo_item = '<div class="card m-4 p-3 text-break mft-todo-item state-todo"><p>test</p><i class="fas fa-clock"></i></div>';


    $("#todo-getter").keypress(function(event) { 
        if (event.keyCode === 13 && $(this).val().length > 0) { 
            $(".todo-parent").find("p.text-muted").hide(0);
            current_todo_item = $(todo_item);
            current_todo = $(".todo-parent").append(current_todo_item);
            current_todo_item.find("p").text($(this).val());
        }
    }); 


    $(document).on("click", ".mft-todo-item",function(){
        current_item = $(this);
        if(current_item.hasClass("state-todo")){
            current_item.addClass("state-done").removeClass("state-todo").find("i").attr("class","fas fa-check");
        }else if(current_item.hasClass("state-done")){
            current_item.addClass("state-todo").removeClass("state-done").find("i").attr("class","fas fa-clock");
        }
    });

    $(document).on("dblclick", ".mft-todo-item",function(){
        current_item = $(this);
        current_item.remove();
        if($(".mft-todo-item").length == 0){
            $(".todo-parent").find("p.text-muted").show(0);
        }
    });
  

});