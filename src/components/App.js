import { useState } from "react";
import BillSpliter from "./BillSpliter.js";
import FriendAdder from "./FriendAdder.js";
import FriendList from "./FriendList.js";
function App() {
  function handleAddFriend(newfriend) {
    setFriends([...friends, newfriend]);
    setFriendAdderOpen(false);
  }

  function handleChangeFriend(changedFriend) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id !== changedFriend.id ? friend : changedFriend
      )
    );
  }
  function handleChangeSelectedFriend(changedFriend) {
    setSelectedFriend(changedFriend);
  }
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendAdderOpen, setFriendAdderOpen] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onChangeFriend={setSelectedFriend}
        />
        {friendAdderOpen && <FriendAdder onAddFriend={handleAddFriend} />}
        <button
          className="button"
          onClick={() => setFriendAdderOpen(!friendAdderOpen)}
        >
          {friendAdderOpen ? "Close" : "Add friend"}
        </button>
      </div>
      {selectedFriend && (
        <BillSpliter
          onChangeFriend={handleChangeFriend}
          onChangeSelectedFriend={handleChangeSelectedFriend}
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
