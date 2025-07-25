import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput
          id="task"
          type="text"
          placeholder="Digite algo"
          labelText="tarefa"
        />
      </div>

      <div className="formRow">
        <p>Alguma coisa aqui.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="purple" />
      </div>
    </form>
  );
}
