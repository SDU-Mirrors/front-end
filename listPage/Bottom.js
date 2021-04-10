class Bottom extends React.Component{
    render(){
        return(
            <footer>
                <div className="footerContainer">
                    <div className="leftCol">
                        <img className="bottomLogo"></img>
                        <div className="socialMedia">

                        </div>
                        <p className="rightsText">本站由山东大学信息化技术中心支持创办，由山东大学OOPS社团运行维护</p>
                    </div>
                    <div className="rightCol">
                        <h1>山东大学镜像站</h1>
                        <div className="border">
                        
                        </div>
                        <p>可以通过输入相关信息向我们反馈</p>
                        <form className="newsLetterForm">
                            <input type="text" className="txtB"></input>
                            <input type="submit" className="btn" value="submit"></input>
                        </form>
                    </div>
                </div>
            </footer>
        );
    }
}