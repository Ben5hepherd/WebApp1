define(["kovalidation"],
    function (kovalidation)
    {
        function configure()
        {
            kovalidation.init({
                registerExtenders: true,
                messagesOnModified: true,
                insertMessages: true,
                parseInputAttributes: true,
                messageTemplate: null
            });

            kovalidation.makeBindingHandlerValidatable('selectedOptions');

        };

        return {
            configure: configure
        };
    });