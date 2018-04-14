define([
        "config/kovalidationconfig",
        "config/toastrconfig",
        "config/envconfig",
        'durandal/system',
        "plugins/router",
        "scripts/pace",
        "helpers/string"],
    function (koValidationConfig, toastrConfig, envconfig, system, router, pace, moment)
    {
        var configs = {};
        
        system.debug(envconfig.durandalDebugging);

        //moment.formatToUKDate = function (date) {
        //    return moment(date).format('DD MMMM YYYY');
        //};

        configs.configure = function () {
            toastrConfig.configure();
            koValidationConfig.configure();

            pace.start({
                ajax: {
                    trackMethods: ['GET', 'POST', 'PUT', 'DELETE', 'REMOVE']
                }
            });

            //Chart.defaults.global.responsive = true;
            //Chart.defaults.global.maintainAspectRatio = false;

            //$.fn.datepicker.defaults.autoclose = true;
            //$.fn.datepicker.defaults.todayHighlight = true;
            //$.fn.datepicker.defaults.format = "dd MM yyyy";
        }

        router.refresh = function (ignoreCache) {
            window.location.reload(ignoreCache);
        }

        return {
            //formatToUKDate: moment.formatToUKDate,
            configure: configs.configure
        }
    });