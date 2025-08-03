$(document).ready(function() {
    $("#addTodo").click(function() {
        const inputTodo = $("#todoInput").val();
        
        // 入力値が空でないことを確認
        if (inputTodo.trim() !== "") {
            $("#todolist").append("<li><input type='checkbox'> " + inputTodo + "</li>");
            $("#todoInput").val(""); // Clear the input field after adding the todo
        }
    });
});