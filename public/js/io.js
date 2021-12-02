window.socketIO = (function () {

    var api = "http://localhost:3000/";
    var socket = io(api);

    [{
        event: "connect",
        func: function (api) {

            console.log('Connected to ' + api);
        }
    }, {

        event: "message-from-server",
        func: function (msg) {

            app.showMessage(msg);
        }
    }, {

        event: "joined-dept",
        func: function (response) {

            app.prependToJobsInbox(response);
        }
    }, {

        event: "api-posted",
        func: function (response) {

            app.prependToJobsInbox(response);
        }
    }, {

        event: "job-processed",
        func: function (response) {

            var id = response._id;
            var department = $("#department").val();

            if (response.department === department) {

                return app.prependToJobsInbox(response);
            }

            app.removeFromJobsInbox(id);
        }
    }, {
        event: "error",
        func: function (msg) {

            alert(msg);
            console.log(msg);
        }
    }]
    .forEach(function (item) {

        socket.on(item.event, item.func);
    });

    return {

        send: function (event, data) {

            socket.emit(event, data);
        }
    };

})();