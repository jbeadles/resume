(function(app) {
    "use strict";

    var bookService =  function($q, $http) {

        var baseUrl = "https://www.googleapis.com/books/v1/volumes/",
            apiKey = "AIzaSyCnySJgIKqjzj8o_W5X35y8KJkX4G7B6AI",
            bookFactory = {};

        bookFactory.getGoogleBookInfo = function(bookId) {
            var googleDfd = $q.defer();

            $http({
                method: "GET",
                url: baseUrl + bookId + "?key=" + apiKey
            }).success(function(data) {
                googleDfd.resolve(data);
            }).catch(function(data) {
                googleDfd.reject(data.error);
            });

            return googleDfd.promise;
        };

        bookFactory.getBooksByShelf = function(shelf) {
            var dfd = $q.defer();

            $http({
                method: "GET",
                url: "./app/data/books.json"
            }).success(function(data) {
                dfd.resolve(data[shelf]);
            });

            return dfd.promise;
        };

        bookFactory.getToReadList = function() {
            return bookFactory.getBooksByShelf("toRead");
        };

        bookFactory.getReadingNowList = function() {
            return bookFactory.getBooksByShelf("readingNow");
        };

        bookFactory.getHaveReadList = function() {
            return bookFactory.getBooksByShelf("haveRead");
        };

        bookFactory.recommendBook = function(book) {
            var recommendation = null,
                data = {
                    book: {
                        title: book.title,
                        author: book.author
                    }
            };

            $http({
                method: "POST",
                url: "./app/Interests/recommendation.php",
                data: data
            }).success(function(data) {
                recommendation = data;
            });

            return recommendation;
        };

        return bookFactory;

    };


    app.factory("bookService", ["$q", "$http", bookService]);

})(angular.module("resumeApp"));