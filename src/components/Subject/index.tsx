import { useState } from "react";
import cn from "./Subject.module.css";

type Props = {
  isDone: boolean;
};

export default function Subject({ isDone }: Props) {
  const [, set] = useState();

  function handleChoice(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    return;
  }

  return (
    <section className={cn.container}>
      <button
        className={cn.choice}
        onClick={handleChoice}
        disabled
        data-option="left"
      >
        여름
      </button>
      <button
        className={cn.choice}
        onClick={(e) => handleChoice(e)}
        disabled
        data-option="right"
      >
        겨울
      </button>
    </section>
  );
}
