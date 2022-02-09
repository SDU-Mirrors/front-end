import React, {Component} from "react";
import {Button, Form, Modal, Row, Col, Cascader} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as DownloadedSVG} from "./source/download.svg"
import "./Right.css"
import Title from "./Title";


/**
 * 下载链接组件
 */
export default class DownloadFormCard extends Component {
    state = {
        // 下载链接对话框可见性
        downloadFormVisible: false,
        // 选择的发行版的下载链接地址
        selectDistrib: undefined
    };
    myStyle = {
        buttonStyle: {
            color: '#9C0C13',
            borderColor: '#9C0C13'
        },
        CascaderStyle: {

        },
        header:{
            fontWeight: 700,
            color: 'rgba(0,0,0,0.8)',
        },
        text:{
            fontWeight: 400,
            color: 'rgba(0,0,0,0.8)',
        }
    }

    /**
     * 显示下载链接对话框
     */
    showDownloadForm = () => {
        this.setState({downloadFormVisible: true});
    };

    /**
     * 退出下载链接对话框
     */
    handleDownloadFormCancel = () => {
        this.setState({downloadFormVisible: false});
        this.forceUpdate()
        console.log("in handleCancel")
    };

    /**
     * 确认选择发行版和版本
     *
     * @param selectedOptions 级联选择器各级的值。
     *        其中[0]为发行版名称，[1]为下载链接地址
     */
    onDownloadLinkChange = selectedOptions => {
        console.log(selectedOptions);
        this.setState({selectDistrib: selectedOptions[1]});
    };

    render() {
        // console.log(this.state.downloadFormVisible)
        return (
            <div>
                <h2 style={this.myStyle.header}><Icon component={DownloadedSVG}/> 下载链接</h2>
                {/*<Title style={this.myStyle.header}><Icon component={DownloadedSVG}/> 下载链接</Title>*/}
                <p style={this.myStyle.text}>常用 Linux 发行版 ISO 文件下载</p>
                <Button
                    type="default"
                    // icon={<Icon component={DownloadedSVG}/>}
                    onClick={this.showDownloadForm}
                    style={this.myStyle.buttonStyle}
                >
                    获取下载链接
                </Button>
                <Modal
                    visible={this.state.downloadFormVisible}
                    title={"下载链接"}
                    onCancel={this.handleDownloadFormCancel}
                    footer={null}
                >
                    <Form layout="vertical">
                        <Form.Item>
                            <Row gutter={8}>
                                <Col span={18}>
                                    <Cascader
                                        expandTrigger="hover"
                                        placeholder="请选择发行版"
                                        options={this.props.isoLinks}
                                        onChange={this.onDownloadLinkChange}
                                        style={this.myStyle.CascaderStyle}
                                    />
                                </Col>
                                <Col span={6}>
                                    <Button
                                        type="default"
                                        icon={<Icon component={DownloadedSVG}/>}
                                        href={this.state.selectDistrib}
                                        style={this.myStyle.buttonStyle}
                                    >
                                        下载
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                    <p>ISO 数据通过 <a href="https://github.com/tuna/mirror-web" rel="external nofollow">tuna/mirror-web</a> 中的 geninfo 程序生成。</p>
                </Modal>
            </div>
        );
    }
}
