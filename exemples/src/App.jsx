import Hello from "./component/Hello";

import MessageCard1 from "./component/MessageCard1";
import MessageFriend from "./component/MessageFriend";
import OddEvenFriend from "./component/OddEvenFriend";

function App() {
  return (
    <div className="bg-gray-600 w-[100vw] min-h-screen flex items-center justify-center">
      <OddEvenFriend />
    </div>
  );
}

export default App;
