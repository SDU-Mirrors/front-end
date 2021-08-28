global.config = {
    "host": "http://localhost:4000"
};

global.getArticle = (time, title) => {
    return global.config.host + "/article/" + time + "/" + title;
}

global.getList = () => {
    return global.config.host + "/list";
}

global.parseDate = (date) => {
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6);
}

global.sortByLogicalPath = (arr) => {
    arr.sort((a, b) => {
        return a.logicalPath > b.logicalPath;
    });
}