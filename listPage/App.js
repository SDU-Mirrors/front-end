class App extends React.Component{
    render() {
        return (
          <div>
              <Header/>
          </div>
        );
      }
}

ReactDOM.render(
    <App />,
    document.getElementById('listPage')
);
