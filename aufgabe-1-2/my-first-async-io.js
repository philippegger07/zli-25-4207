var fs = fs.readFile()

fs.readFile(process.argv[2], function(err, data) {
    if (!err) {
        var str = data.toString();
        var strArray = str.split('\n');
        console.log(strArray.length - 1);
    };
});le