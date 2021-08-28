global.config = {
    "host": "http://localhost:4000"
};

global.getArticle = (time, title) => {
    return global.config.host + "/article/" + time + "/" + title;
}

global.getList = () => {
    return global.config.host + "/list";
}