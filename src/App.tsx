import { MainRouter } from "./routers/MainRouter";
import { MessagesContainer } from "./components/MessagesContainer";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <MainRouter />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  );
}
