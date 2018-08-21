var look = function look() {
    $("#look").click(function(){
        console.log("+++++++++");
        $("#look").hide()
        $("#edit").show();
        $("#add").hide();
        $(".delete").hide();
        $("#hideThead").hide();
    });
}
var edit = function edit() {
    $("#edit").click(function () {
        $("#look").show()
        $("#edit").hide();
        $("#add").show();
        $(".delete").show();
        $("#hideThead").show();
    });
}
var deleteE = function deleteE() {
    $(".delete").click(function () {
        $(this).parent("tr").remove();
    })
}
var confirm = function () {
    $("#confirm").click(function () {
        //val typeval = $('input:radio[name="radioSingle1"]:checked');
        var typeval =$('input[name="radioSingle1"]:checked ').val();
        $("#table").append(
            "<tr>"+
            "<td>"+typeval +"</td>"+
            "<td class='delete'>删除</td>"+
            "</tr>"
        )
        deleteE();
        $("#cancel").click();
    })
}

$(document).ready(function () {
    $("#edit").hide();
    look();
    edit();
    deleteE();
    confirm();
})