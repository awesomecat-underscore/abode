const hostname = location.hostname;


if (hostname == "test.awesomecat.org") {
    document.title = "TEST - awesomecat's abode";
} else if (hostname.includes("localhost") || hostname.includes("127.0.0.1")){
    document.title = "DEV - awesomecat's abode";
}