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
          type="number"
          placeholder="Digite algo"
          labelText="tarefa"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
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
