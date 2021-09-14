import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import Logo from "../source/logo.png"

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


const featuredPosts = [
    {
        title: '镜像站后端配置记录',
        date: '2021-05-12',
        description:
            '为什么选择 LXC？\n' +
            '无论是搭建镜像站，还是其他服务，首要的任务是实现功能，其次是保证稳定，有余力则追求美观。\n' +
            '\n' +
            '因此，在单一 Linux 发行版上部署所有服务是十分不明智的做法。例如，激进的发行版提供更多、更新的软件包，而保守的发行版则具有更好的稳定性...',
        image: Logo,
        imageText: 'Image Text',
        link: '/docs/blog/BackendConfigJournal/'
    },
    {
        title: '一个镜像站的诞生',
        date: '2021-05-12',
        description:
            '正逢学校虚拟化平台建设时机，山东大学（青岛） Oops 计算机社团和山东大学' +
            '（青岛）网管会向山东大学（青岛）信息化办公室办提出建设山东大学镜像站的申请。' +
            '感谢信息办郭晓东老师、孙凤超老师和一线工程师的支持和帮助，自此镜像站正式起步。',
        image: Logo,
        imageText: 'Image Text',
        link: '/docs/blog/BirthOfYetAnotherMirrorSite/'
    },
];


export default function Blog() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <main>
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post}/>
                    ))}
                </Grid>
            </main>
        </Container>
    );
}