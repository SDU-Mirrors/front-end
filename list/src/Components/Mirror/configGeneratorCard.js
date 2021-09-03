import React, {Component} from "react";
import {Button, Form, Modal, Row, Col, Cascader} from "antd";
import Icon from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter"
import {dark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {ReactComponent as ConfigSVG} from "./source/config.svg"
import "./Right.css"

/**
 * 配置生成器组件
 */
export default class ConfigGeneratorCard extends Component {
    state = {
        // 配置生成器可见性
        configGeneratorVisible: false,
        // 选择发行版
        selectDistrib: undefined,
        // 选择的发行版的版本号或版本别名
        selectVersion: undefined,
        // 是否显示软件源配置文本块
        showConfigBlock: false,
        // 软件源配置文本块
        configBlock: undefined
    };
    myStyle = {
        buttonStyle: {
            color: '#9C0C13',
            borderColor: '#9C0C13'
        },
        CascaderStyle: {
            outlineColor: '#9C0C13'
        },
        header: {
            fontWeight: 700,
            color: 'rgba(0,0,0,0.8)'
        },
        text: {
            fontWeight: 400,
            color: 'rgba(0,0,0,0.8)',
        }
    }

    /**
     * 显示配置生成器对话框
     */
    showDownloadForm = () => {
        this.setState({configGeneratorVisible: true});
    };

    /**
     * 退出配置生成器对话框
     */
    handleConfigGeneratorCancel = () => {
        this.setState({configGeneratorVisible: false});
    };

    /**
     * 确认选择发行版和版本
     *
     * @param selectedOptions 级联选择器各级的值。
     *        其中[0]为发行版名称，[1]为版本别名
     */
    onConfigChange = selectedOptions => {
        this.setState({
            selectDistrib: selectedOptions[0],
            selectVersion: selectedOptions[1]
        });
    };

    /**
     * 生成配置
     */
    handleGenerateConfig = () => {
        let configBlock;
        switch (this.state.selectDistrib) {
            case "ubuntu":
                configBlock = buildUbuntuBlock(this.state.selectVersion);
                this.setState({showConfigBlock: true, configBlock: configBlock});
                break;
            case "debian":
                configBlock = buildDebianBlock(this.state.selectVersion);
                this.setState({showConfigBlock: true, configBlock: configBlock});
                break;
            case "archlinux":
                configBlock = buildArchBlock();
                this.setState({showConfigBlock: true, configBlock: configBlock});
                break;
            case "rocky":
                configBlock = buildRockyBlock();
                this.setState({showConfigBlock: true, configBlock: configBlock});
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div>
                <h2 style={this.myStyle.header}><Icon component={ConfigSVG}/> 配置生成</h2>
                <p>生成发行版的配置文件</p>
                <Button
                    type="default"
                    // icon={<Icon component={ConfigSVG}/>}
                    onClick={this.showDownloadForm}
                    style={this.myStyle.buttonStyle}
                >
                    配置生成器
                </Button>
                <Modal
                    visible={this.state.configGeneratorVisible}
                    title={"配置生成器"}
                    onCancel={this.handleConfigGeneratorCancel}
                    footer={null}
                    width={800}
                >
                    <Form layout="vertical">
                        <Form.Item>
                            <Row gutter={8}>
                                <Col span={20}>
                                    <Cascader
                                        expandTrigger="hover"
                                        placeholder="请选择发行版"
                                        options={this.props.config}
                                        onChange={this.onConfigChange}
                                        autoFocus={<style></style>}
                                    />
                                </Col>
                                <Col span={4}>
                                    <Button type="default"
                                            onClick={this.handleGenerateConfig}
                                            icon={<Icon component={ConfigSVG}/>}
                                            style={this.myStyle.buttonStyle}>
                                        生成
                                    </Button>

                                </Col>
                            </Row>
                            <Row>
                                <ConfigBlock
                                    showConfigBlock={this.state.showConfigBlock}
                                    configBlock={this.state.configBlock}
                                />
                            </Row>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

/**
 * 配置生成器的软件源文本块组件
 */
class ConfigBlock extends Component {
    render() {
        let block = null;
        if (this.props.showConfigBlock) {
            // console.log(typeof this.props.configBlock);
            // block = this.props.configBlock.split("\n").map(function(item, id) {
            //   return (
            //     <span key={id}>
            //       {item}
            //       <br />
            //     </span>
            //   );
            // });
            block = this.props.configBlock;
            block = block.substring(0, block.length - 1);
        }
        if (block != null) {
            return (
                <Col className="config-block" span={24}>
                    <SyntaxHighlighter language="plaintext" style={dark}>
                        {block}
                    </SyntaxHighlighter>
                </Col>
            );
        } else {
            return (
                null
            );
        }
    }
}

/**
 * 构建Ubuntu软件源配置的一行
 *
 * @param val 软件包格式
 * @param version 版本别名
 * @returns {string} 返回Ubuntu配置的一行
 */
function buildUbuntuLine(val, version) {
    return (
        val +
        " https://mirrors.sdu.edu.cn/ubuntu/ " +
        version +
        " main restricted universe multiverse\n"
    );
}

/**
 * 构建Ubuntu软件源配置的文本块
 *
 * @param version 版本别名
 * @returns {string} 返回Ubuntu软件源配置的文本块
 */
function buildUbuntuBlock(version) {
    return (
        // "# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\n" +
        buildUbuntuLine("deb", version) +
        buildUbuntuLine("deb", version + "-security") +
        buildUbuntuLine("deb", version + "-updates")
    );
}

/**
 * 构建Debian软件源配置的一行
 *
 * @param val 软件包格式
 * @param version 版本别名
 * @returns {string} 返回Debian配置的一行
 */
function buildDebianLine(val, version) {
    return (
        val +
        " https://mirrors.sdu.edu.cn/debian" +
        version +
        " main contrib non-free\n"

    );
}

/**
 * 构建Debian软件源配置的文本块
 *
 * @param version 版本别名
 * @returns {string} 返回Debian软件源配置的文本块
 */
function buildDebianBlock(version) {
    return (
        // "目前还未提供debian-security，请注意添加\n" +
        buildDebianLine("deb", "") +
        buildDebianLine("deb", "" + "-security buster/updates") +
        buildDebianLine("deb", " " + "buster-updates")
    );
}

/**
 * 构建ArchLinux软件源配置的文本块
 *
 * @returns {string} 返回ArchLinux软件源配置的文本块
 */
function buildArchBlock() {
    return "Server = https://mirrors.sdu.edu.cn/archlinux/$repo/os/$arch ";
}

/**
 * 构建RockyLinux软件源配置的文本块
 *
 * @returns {string} 返回RockyLinux配置命令
 */
function buildRockyBlock() {
    return "# 1. 将所有的官方主镜像地址替换为山东大学镜像站地址。\n" +
        "sed -e 's|^mirrorlist=|#mirrorlist=|g' \\\n" +
        "    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.sdu.edu.cn/rocky|g' \\\n" +
        "    -i.bak \\\n" +
        "    /etc/yum.repos.d/Rocky-*.repo\n" +
        "# 2. 更新缓存。\n" +
        "     dnf makecache"
}