define(["knockout"], function (ko) {
    return function () {
        var view = {};
        view.isEditing = ko.observable(false);
        view.types = { Adding: 0, Editing: 1, Viewing: 2, UnEditable: 3 }

        view.initialise = function (id, isEditable) {
            view.type = ko.computed(function () {
                if (isEditable == false)
                    return view.types.UnEditable;

                if (!id)
                    return view.types.Adding;

                if (view.isEditing())
                    return view.types.Editing;

                return view.types.Viewing;
            });

            view.readOnly = ko.computed(function () {
                return view.type() === view.types.Viewing || view.type() === view.types.UnEditable;
            });

            view.isAdding = ko.computed(function () {
                return view.type() === view.types.Adding;
            });

            view.serverMethod = ko.computed(function () {
                return view.type() === view.types.Editing ? "putData" : "postData";
            });
        }

        return view;
    }
});