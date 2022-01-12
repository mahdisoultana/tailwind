import Hello from "./component/Hello";

import MessageCard1 from "./component/MessageCard1";
import MessageFriend from "./component/MessageFriend";

function App() {
  return (
    <div className="bg-gray-600 w-[100vw] min-h-screen flex items-center justify-center">
      <MessageFriend />
    </div>
  );
}

export default App;
