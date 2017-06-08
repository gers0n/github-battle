class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(friend){
      return friend.friend === true;
    }),
        noFriends = this.props.list.filter(function(friend){
          return friend.friend === false;
        });
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(friend){
            return <li>{friend.name}</li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {noFriends.map(function(friend){
            return <li>{friend.name}</li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);