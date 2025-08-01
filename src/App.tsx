import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <Home />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
