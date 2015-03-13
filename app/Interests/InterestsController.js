(function(app) {
    "use strict";

    var interestsController = function(bookService) {

        var vm = this;

        vm.haveReadBooks = [];
        vm.readingNowBooks = [];
        vm.toReadBooks = [];

        bookService.getHaveReadList()
            .then(function(haveReadData) {
                for (var i = 0; i < haveReadData.length; i++) {
                    bookService.getGoogleBookInfo(haveReadData[i].googleBookId)
                        .then(function(haveReadGoogleBook) {
                            vm.haveReadBooks.push(haveReadGoogleBook);
                        });
                }
            });

        bookService.getReadingNowList()
            .then(function(readingNowData) {
                readingNowData.forEach(function(readingNowBook) {
                    bookService.getGoogleBookInfo(readingNowBook.googleBookId)
                        .then(function(readingNowGoogleBook) {
                            vm.readingNowBooks.push(readingNowGoogleBook);
                        });
                });
            });

        bookService.getToReadList()
            .then(function(toReadData) {
                toReadData.forEach(function(toReadBook) {
                    bookService.getGoogleBookInfo(toReadBook.googleBookId)
                        .then(function(toReadGoogleBook) {
                            vm.toReadBooks.push(toReadGoogleBook);
                        });
                });
            });

    };

    app.controller("InterestsController", ["bookService", interestsController])

})(angular.module("resumeApp"));