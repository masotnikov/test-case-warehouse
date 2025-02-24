import { FC } from "react";
import cls from "./Header.module.scss";

export const Header: FC = () => {

  return (
    <header className={cls.Header}>
      <h1 className={cls.title}>User To-Do Table</h1>
      <p className={cls.subtitle}>User task table for effective planning.</p>
    </header>
  );
};

