const express = require("express");
const fs = require("fs");
const ModulePath = require("path");
const frontMatter = require('front-matter');
const removeMd = require('remove-markdown');


// 配置文件
const config = {
    'path': './blog' //默认在此路径下按照 /时间/文章名/main.md存放  
};

// 文件列表
// fileName string 文件名
// absolutePath string 绝对路径
// logicalPath string 按照 时间文件名 作为逻辑路径
// date int 时间
// tag string 类别
// excerpt string
var fileList = [];

function getMarkdownHtml(markdown){

}

function getMarkdownTOC(markdown){

}

// 得到tag
function getMarkdownTag(markdown, default_tag = null){
    const parsedMarkdown = frontMatter(markdown);
    if(parsedMarkdown.attributes == null || parsedMarkdown.attributes.tag == null){
        console.log('hit default tag');
        return default_tag;
    }
    return parsedMarkdown.attributes.tag; 
}

// 得到excerpt
function getMarkdownExcerpt(markdown, maxExcerptLength = 120) {
    const parsedMarkdown = frontMatter(markdown);
    let contentText = removeMd(parsedMarkdown.body);
    // Trim and normalize whitespace in content text
    contentText = contentText.trim().replace(/\s+/g, ' ');
    const excerpt = contentText.slice(0, maxExcerptLength);
  
    if (contentText.length > maxExcerptLength) {
      return excerpt + '...';
    }
  
    return excerpt;
}

function updateFile(path, _time, _title){
    const data = fs.readFileSync(ModulePath.join(path, 'main.md'), 'utf8');
    const tmp = {
        'fileName': _title,
        'absolutePath': ModulePath.resolve(path),
        'logicalPath': _time + _title,
        'date': _time,
        'tag': getMarkdownTag(data),
        'excerpt': getMarkdownExcerpt(data)

    };
    fileList.push(tmp);
    console.log('updateFile', tmp);
    return tmp;
}

function parseArticle(path, dirname){
    // let stats = fs.statSync('main.md');
    let arr = fs.readdirSync(path);
    fs.readdir(path, (err, arr)=>{
        if(err)return;
        arr.forEach(function(item){
            console.log('parsing article ', item);
            let itemPath = ModulePath.join(path, item);
            fs.stat(itemPath, (err, stats)=>{
                if(err)return;
                if(stats.isDirectory()){
                    if(fs.existsSync(ModulePath.join(itemPath, 'main.md'))){
                        updateFile(itemPath, dirname, item);
                    }
                }
            });
        });
    });
}
function parseTime(path){
    let arr = fs.readdirSync(path);
    fs.readdir(path, (err, arr) => {
        if(err)return;
        else{
            arr.forEach(function(item){
                let itemPath = ModulePath.join(path, item);
                // let stats = fs.statSync(itemPath);
                fs.stat(itemPath, (err, stats)=>{
                    if(err)return;
                    else{
                        if(stats.isDirectory()){
                            // 解析该目录下所有文件夹
                            console.log('parsing Time', item);
                            parseArticle(itemPath, item);
                        }
                    }
                });
                
            });
        }
    });
    
}
function updateFileJson(){
    // 更新文件信息
    fileList = [];
    parseTime(config.path);
}

const app = express();
app.get('/article/:time/:title' , (req , res)=>{
    let tmpPath = ModulePath.join(config.path);
    let tmpPath = ModulePath.join(tmpPath, config.params.title);
    if(fs.existsSync(tmpPath)){
        const data = fs.readFileSync(tmpPath);
        res.send({
            'body': getMarkdownHtml(data),
            'toc': getMarkdownTOC(data)
        });
    }else{
        res.send('no such article');
    }
})
app.get('/list', (req, res)=>{
    res.send(fileList);
});

app.get('/update/:time/:title', function(req, res){
    let tmp = updateFile(ModulePath.join(config.path + '/' + req.params.time + '/' + req.params.title));
    res.send(tmp);
});

app.get('/update', function(req, res){
    updateFileJson();
    // res.send('update');
    res.send('正在更新');
});

app.get('/', function(req, res){
    res.send('abab');
});

app.listen(3000);