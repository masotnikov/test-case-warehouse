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
              <th className={cls.firstColumn}>#</th>
              <th className={cls.secondColumn}>USERNAME</th>
              <th className={cls.thirdColumn}>TO-DO COUNT</th>
            </tr>
          </thead>
          <TableBody/>
        </table>
      </div>
    </main>
  );
};
