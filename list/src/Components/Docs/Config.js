global.config = {
    "host": "http://1.117.55.149:4000"
};

global.getArticle = (time, title) => {
    return global.config.host + "/article/" + time + "/" + title;
}

global.getArticleByLogicalPath = (path) => {
    return global.getArticle(path.substring(0, 8), path.substring(8));
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

global.logicalPathToSubURL = (path) => {
    return path.substring(0, 8) + "/" + path.substring(8);
}