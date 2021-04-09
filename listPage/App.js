class App extends React.Component{
    render() {
        return (
          <div className="Main">
              <Header/>
              <LeftList/>
          </div>
        );
      }
}

ReactDOM.render(
    <App />,
    document.getElementById('listPage')
);
