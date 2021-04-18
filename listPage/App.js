class App extends React.Component{
    render() {
        return (
          <div>
            <Header/>
            <div className="Main">
                <LeftList/>
                <Right/>
            </div>
            <Bottom/>
          </div>
        );
      }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
