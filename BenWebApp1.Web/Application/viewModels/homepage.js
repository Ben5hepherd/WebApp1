define(
    ["knockout", "scripts/toastr", "komapping", "factories/userFactory", "server", "plugins/router"],
    function (ko, toastr, mapping, userFactory, server, router) {
        var model = {}
        model.user = {};
        model.user.Name = ko.observable();

        function getUser() {
            return server.getData("api/User").done(function (data) {
                mapping.fromJS(data, {}, model.user);
            });
        }

        model.activate = function () {
            return $.when(getUser());
        }

        return {
            activate: model.activate,
            user: model.user,
            model: ko.observable(model)
        }
    });