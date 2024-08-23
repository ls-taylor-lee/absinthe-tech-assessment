"use client";

import { MiniBadge } from "App/components/mini-badge";
import { IBadgeAction, IBadgeActionsProps } from "App/types/global";
import classNames from "classnames";
import { useMemo } from "react";
import { SingleAction } from "./SingleAction";

export default function BadgeActions({ badge }: IBadgeActionsProps) {
  const completed = useMemo(() => {
    return badge.actions.filter((v) => v.isCompleted).length;
  }, [badge]);

  return (
    <div className="mb-8">
      <div className={classNames("flex space-y-2 lg:space-y-0 lg:flex-row flex-col justify-between items-center")}>
        <span>
          <span
            className={classNames(
              "font-semibold text-sm",
              "lg:text-primary lg:dark:text-primary-dark",
              "text-secondary dark:text-secondary-dark"
            )}
          >
            How to Earn:
          </span>
          <span className={classNames("lg:font-normal font-semibold text-sm text-secondary dark:text-secondary-dark")}>
            Complete the actions for the badge, no specific order needed.
          </span>
        </span>
        <div className="flex space-x-2 ">
          <MiniBadge type="secondary">
            {completed}/{badge.actions.length} Completed
          </MiniBadge>
          <MiniBadge type="disabled">Total Earnings: {badge.reward}</MiniBadge>
        </div>
      </div>
      <div
        className={classNames(
          "flex lg:flex-row flex-col overflow-x-auto custom-scrollbar dark:custom-scrollbar-dark whitespace-nowrap lg:space-x-2 lg:space-y-0 space-y-2 pb-6 pt-4"
        )}
      >
        {badge.actions.map((action: IBadgeAction) => {
          return <SingleAction action={action} key={action.title} />;
        })}
      </div>
      <div className="flex space-x-1 h-1">
        {badge.actions.map((action, idx) => {
          return (
            <div
              key={`progress-bar-${action.title}`}
              className={classNames(
                "w-full h-1 rounded-full",
                { "bg-el-3 dark:bg-el-3-dark": idx >= completed },
                { "bg-main dark:bg-main-dark": idx < completed }
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
