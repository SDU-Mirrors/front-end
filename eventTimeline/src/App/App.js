class App extends React.Component{
    render() {
        return (
          <div className="main">
              <Wrapper/>
          </div>
        );
      }
}


ReactDOM.render(
    <App />,
    document.getElementById('eventTimeline')
);
