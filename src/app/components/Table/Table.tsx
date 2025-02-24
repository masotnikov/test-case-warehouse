import { FC } from "react";
import cls from "./Table.module.scss";
import { TableBody } from "@/app/components/TableBody/TableBody";

export const Table: FC = () => {

  return (
    <main>
      <div className={cls.tableWrapper}>
        <table className={cls.Table}>
          <thead>
            <tr>
              <th>#</th>
              <th>USERNAME</th>
              <th>To-Do Count</th>
            </tr>
          </thead>
          <TableBody/>
        </table>
      </div>
    </main>
  );
};
