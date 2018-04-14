define(["scripts/toastr"], function (toastr) {
    var errorMessage = "Something went wrong on the server!";

    function getData(apiUrl, data) {
        return $.getJSON(rootPath + apiUrl, data).fail(function (e) {
            toastr.error(errorMessage);
        });
    };

    function downloadFile(apiUrl) {
        return window.open(rootPath + apiUrl);
    };

    function postData(apiUrl, dataToPost) {
        sanitiseData(dataToPost);

        return $.post(rootPath + apiUrl, dataToPost).fail(function () {
            toastr.error(errorMessage);
        });
    };

    function command(apiUrl, httpVerb) {
        return $.ajax({
            url: rootPath + apiUrl,
            type: httpVerb
        }).done(function (data) {
            if (data)
                throw "Commands should not return data";
        }).fail(function (e) {
            toastr.error(errorMessage);
        });
    };

    function putData(apiUrl, dataToPost) {
        sanitiseData(dataToPost);

        return $.ajax({
            url: rootPath + apiUrl,
            type: 'PUT',
            data: dataToPost
        }).fail(function () {
            toastr.error(errorMessage);
        });
    };

    function deleteData(apiUrl, id) {
        return $.ajax({
            url: rootPath + apiUrl + '/' + id,
            type: 'DELETE'
        }).fail(function () {
            toastr.error(errorMessage);
        });
    };

    function sanitiseData(dataToSend) {
        delete dataToSend.__moduleId__;
        delete dataToSend.__ko_mapping__;
    }

    return {
        getData: getData,
        postData: postData,
        putData: putData,
        deleteData: deleteData,
        command: command,
        downloadFile: downloadFile
    };
});