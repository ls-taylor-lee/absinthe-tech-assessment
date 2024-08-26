import { ISingleBadgeProps } from "App/types/global";
import classNames from "classnames";

export function SingleBadge({
  badge,
  optionalClass = "",
  markComplete = false,
  showDetail = false,
  isActive = false,
}: ISingleBadgeProps) {
  if (isActive)
    return (
      <div className={classNames("min-w-44 w-44 flex flex-col text-xs text-base", optionalClass)}>
        <div
          className={classNames("flex flex-col rounded-xl overflow-hidden text-center", {
            "border border-success dark:border-success-dark": markComplete && badge.isCompleted,
          })}
        >
          <div className={classNames("bg-el-2 dark:bg-el-2-dark", "p-2", "flex justify-between")}>
            <span className="truncate">{badge.title}</span>
            {badge.actions.length > 0 && (
              <span className="text-secondary dark:text-secondary-dark truncate">{badge.actions.length} Actions</span>
            )}
          </div>
          <div className={classNames("bg-el-3 dark:bg-el-3-dark", "px-14 py-6")}>
            <img
              src={badge.icon}
              alt="bi"
              className={classNames("w-16 h-16 rounded-full", {
                "border-4 border-success dark:border-success-dark": markComplete && badge.isCompleted,
              })}
            />
          </div>
          <div
            className={classNames(
              "bg-success/10 dark:bg-success-dark/10",
              "p-2",
              "text-success dark:text-success-dark"
            )}
          >
            <span>{typeof badge.reward === "string" ? badge.reward : `${badge.reward} Points`}</span>
          </div>
        </div>
        <div
          className={classNames(
            "flex flex-col rounded-xl overflow-hidden text-center",
            "p-2 mt-2",
            "bg-el-2 dark:bg-el-2-dark",
            { hidden: !showDetail }
          )}
        >
          <span>Reward Details</span>
          <span className={classNames("text-secondary dark:text-secondary-dark")}>{badge.rewardDetails}</span>
        </div>
      </div>
    );

  return (
    <div className={classNames("w-44 flex flex-col text-xs text-base", optionalClass)}>
      <div className={classNames("w-44 h-44 rounded-xl flex justify-center items-center", "bg-el-2 dark:bg-el-2-dark")}>
        <img
          src={badge.icon}
          alt="bi"
          className={classNames("w-16 h-16 rounded-full", {
            "border-4 border-success dark:border-success-dark": markComplete && badge.isCompleted,
          })}
        />
      </div>
      <div
        className={classNames("w-44 p-2 mt-2 rounded-xl flex justify-center items-center", "bg-el-2 dark:bg-el-2-dark")}
      >
        <div className={classNames("grid grid-cols-3 w-full")}>
          <div className="p-1 rounded-xl m-1 bg-disabled/60 dark:bg-disabled-dark/60" />
          <div className="p-1 rounded-xl m-1 bg-disabled/60 dark:bg-disabled-dark/60" />
          <div className="p-1 rounded-xl m-1 bg-disabled/60 dark:bg-disabled-dark/60" />
          <div className="p-1 rounded-xl m-1 bg-disabled/60 dark:bg-disabled-dark/60 col-span-3" />
        </div>
      </div>
    </div>
  );
}
