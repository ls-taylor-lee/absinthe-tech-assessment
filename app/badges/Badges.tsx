"use client";

import Carousel from "../components/carousel";
import { SectionTitle } from "../components/typography";
import { achieveBadges } from "../constants/badges";
import { IBadge } from "../types/global";
import CommunityBadges from "./CommunityBadges";
import { SingleBadge } from "./SingleBadge";

export default function Badges() {
  const badgeRenderer = (item: IBadge, active) => {
    return <SingleBadge badge={item} showDetail isActive={active} />;
  };

  return (
    <div className="w-full my-4">
      <SectionTitle>Badges</SectionTitle>
      <Carousel items={achieveBadges} itemRenderer={badgeRenderer} />
      <CommunityBadges />
    </div>
  );
}
