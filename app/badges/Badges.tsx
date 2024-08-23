"use client";

import Carousel from "App/components/carousel";
import { SectionTitle } from "App/components/typography";
import { achieveBadges } from "App/constants/badges";
import { IBadge } from "App/types/global";
import BadgeActions from "./BadgeActions";
import CommunityBadges from "./CommunityBadges";
import { SingleBadge } from "./SingleBadge";

export default function Badges() {
  const badgeRenderer = (item: IBadge, active) => {
    return <SingleBadge badge={item} showDetail markComplete isActive={active} />;
  };

  const detailRenderer = (item: IBadge) => {
    return <BadgeActions badge={item} />;
  };

  return (
    <div className="w-full my-4">
      <SectionTitle>Badges</SectionTitle>
      <Carousel items={achieveBadges} itemRenderer={badgeRenderer} showDetail detailRenderer={detailRenderer} />
      <CommunityBadges />
    </div>
  );
}
