import { useState } from "react";
import TextInput from "./TextInput.js";
export default function BillSpliter({
  onChangeSelectedFriend,
  onChangeFriend,
  selectedFriend,
}) {
  function determineBalanceChange(billValue, yourExpense, meOrYou) {
    if (yourExpense > billValue) {
      return "error";
    }
    if (meOrYou === "you") {
      return yourExpense;
    } else {
      return yourExpense - billValue;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (billValue !== 0) {
      const balanceChange = determineBalanceChange(
        billValue,
        yourExpense,
        meOrYou
      );
      if (balanceChange !== "error") {
        const newBalance = selectedFriend.balance + balanceChange;
        console.log(newBalance);
        onChangeFriend({ ...selectedFriend, balance: newBalance });
        onChangeSelectedFriend({ ...selectedFriend, balance: newBalance });
        setBillValue(0);
        setYourExpense(0);
      } else {
        alert("Your expense can't be higher than the bill value");
      }
    }
  }
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [meOrYou, setMeOrYou] = useState("me");
  if (selectedFriend) {
    return (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>
        <TextInput
          value={billValue}
          onChangeInput={(e) => setBillValue(Number(e.target.value))}
        >
          💰 Bill value
        </TextInput>
        <TextInput
          value={yourExpense}
          onChangeInput={(e) => setYourExpense(Number(e.target.value))}
        >
          🙋‍♂️ Your expense
        </TextInput>
        <label>👥 {selectedFriend.name}'s expense:</label>
        <input disabled={true} value={billValue - yourExpense} />
        <label>🤑 Who is paying the bill?</label>
        <select onChange={(e) => setMeOrYou(e.target.value)} value={meOrYou}>
          <option value="me">You</option>
          <option value="you">{selectedFriend.name}</option>
        </select>
        <button className="button" type="Submit">
          Split Bill
        </button>
      </form>
    );
  } else {
    return "";
  }
}
