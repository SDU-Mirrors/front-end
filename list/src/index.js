import React from 'react';
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
// import DownloadFormCard from './Components/Content/downloadFormCard'
import APP from './Components/App'
import {HashRouter} from "react-router-dom";
import { Button, Form, Modal, Row, Col, Cascader } from "antd";
ReactDOM.render(
    <HashRouter>
        <APP />
    </HashRouter>,
    document.getElementById("root")
);