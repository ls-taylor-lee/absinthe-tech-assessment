import { MiniBadge } from "App/components/mini-badge";
import { ISingleActionProps } from "App/types/global";
import classNames from "classnames";

export function SingleAction({ action }: ISingleActionProps) {
  return (
    <div
      className={classNames(
        "w-full lg:min-w-96 lg:w-96 flex flex-col text-sm font-medium text-secondary dark:text-secondary-dark rounded-xl overflow-hidden"
      )}
    >
      <div className={classNames("flex justify-between items-center px-4 py-2", "bg-el-3 dark:bg-el-3-dark mb-px")}>
        <span>Action</span>
        {action.isCompleted && <MiniBadge type="success">Completed</MiniBadge>}
      </div>
      <div className={classNames("flex px-4 py-2", "bg-el-2 dark:bg-el-2-dark")}>{action.title}</div>
    </div>
  );
}
