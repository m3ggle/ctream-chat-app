import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="w-full h-screen bg-gray-900 flex">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
