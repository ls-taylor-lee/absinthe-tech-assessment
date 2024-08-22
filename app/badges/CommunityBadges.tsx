"use client";

import classNames from "classnames";
import { achieveBadges, communityBadges } from "../constants/badges";
import { SingleBadge } from "./SingleBadge";
import { IBadge } from "../types/global";

export default function CommunityBadges() {
  return (
    <div className="w-full my-4">
      <div className={classNames("bg-el-2 dark:bg-el-2-dark text-xs", "p-2 rounded-se-xl rounded-ss-xl")}>
        Community Badges
      </div>
      <div
        className={classNames(
          "flex overflow-x-scroll custom-scrollbar dark:custom-scrollbar-dark whitespace-nowrap space-x-2 pb-6 pt-4"
        )}
      >
        {communityBadges.map((badge: IBadge) => {
          return <SingleBadge badge={badge} key={badge.title} markComplete isActive />;
        })}
      </div>
    </div>
  );
}
