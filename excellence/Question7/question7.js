function testAjax() {
    return $.ajax({
        url: "www.example.com/api/get/1"
    });
}

var promise = testAjax();

promise.success(function (data) {
alert(data);
});