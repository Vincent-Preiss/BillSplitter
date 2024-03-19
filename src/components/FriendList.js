import Friend from "./Friend.js";
export default function FriendList({
  friends,
  selectedFriend,
  onChangeFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onChangeFriend={onChangeFriend}
        />
      ))}
    </ul>
  );
}
