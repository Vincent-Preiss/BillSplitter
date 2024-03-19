export default function Friend({ friend, selectedFriend, onChangeFriend }) {
  const isSelectedFriend = selectedFriend && selectedFriend.id === friend.id;
  function handleFriendSelect() {
    if (isSelectedFriend) {
      onChangeFriend(null);
    } else onChangeFriend(friend);
  }
  return (
    <li className={isSelectedFriend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance === 0 ? <p>You and {friend.name} are even </p> : ""}
      {friend.balance > 0 ? (
        <p className="red">
          You owe {friend.name} {friend.balance}${" "}
        </p>
      ) : (
        ""
      )}
      {friend.balance < 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}${" "}
        </p>
      ) : (
        ""
      )}

      <button className="button" onClick={handleFriendSelect}>
        {isSelectedFriend ? "Close" : "Select"}
      </button>
    </li>
  );
}
