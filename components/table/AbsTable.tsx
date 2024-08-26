import { IAbsTableProps } from "App/types/global";
import classNames from "classnames";

export default function AbsTable({ children, optionalClass }: IAbsTableProps) {
  const tableClass = classNames("min-w-full w-full border-collapse", optionalClass);

  return <table className={tableClass}>{children}</table>;
}

export function AbsTableHeader({ children, optionalClass }: IAbsTableProps) {
  return <thead className={classNames("", optionalClass)}>{children}</thead>;
}

export function AbsTableHeaderRow({ children, optionalClass }: IAbsTableProps) {
  return (
    <tr
      className={classNames(
        "bg-el-3 dark:bg-el-3-dark",
        "border border-el dark:border-el-dark",
        "text-secondary dark:text-secondary-dark",
        "text-medium text-xs",
        optionalClass
      )}
    >
      {children}
    </tr>
  );
}

export function AbsTableHeaderCell({ children, optionalClass }: IAbsTableProps) {
  return <td className={classNames("px-4 py-2", optionalClass)}>{children}</td>;
}

export function AbsTableBody({ children, optionalClass }: IAbsTableProps) {
  return <tbody className={classNames("", optionalClass)}>{children}</tbody>;
}

export function AbsTableBodyRow({ children, optionalClass, style }: IAbsTableProps) {
  return (
    <tr
      className={classNames("odd:bg-el-1 odd:dark:bg-el-1-dark", "even:bg-el-2 even:dark:bg-el-2-dark", optionalClass)}
      style={style}
    >
      {children}
    </tr>
  );
}

export function AbsTableBodyCell({ children, optionalClass }: IAbsTableProps) {
  return <td className={classNames("px-4 py-6", optionalClass)}>{children}</td>;
}
