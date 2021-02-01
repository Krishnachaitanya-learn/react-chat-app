import { ChatEngine } from "react-chat-engine";

import "./App.css";
import "../components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="5419d4cc-92d9-4e4c-bb5e-d5a673ff09f5"
      userName="arjun"
      userSecret="arjun"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
