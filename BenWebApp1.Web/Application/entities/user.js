define(
    ["knockout", "komapping"],
    function (ko, mapping) {
        return function user(data) {
            var self = this;
            mapping.fromJS(data, {}, self);
            return self;
        }
    });