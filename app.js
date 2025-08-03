$("#addTodo").click(function() {
    const inputTodo = $("#todoInput").val();
    $("#todolist").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("#todoInput").val(""); // タスク追加後は入力フィールドをクリア
});



// チェックボックスの状態変更を監視
$(document).on('change', 'input[type=checkbox]', function() {
    if ($(this).is(':checked')) {
        $(this).parent().css("text-decoration", "line-through");
    } else {
        $(this).parent().css("text-decoration", "none");
    }
});