define(
    ["entities/user"],
    function (user) {
        function create(data) {
            return new user(data);
        }

        return { create: create }
    });