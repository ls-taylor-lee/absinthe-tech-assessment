"use client";

import Carousel from "../components/carousel";
import { SectionTitle } from "../components/typography";
import { dummyBadges } from "../constants/badges";
import { IBadge } from "../types/global";
import { SingleBadge } from "./SingleBadge";

export default function Badges() {
  const badgeRenderer = (item: IBadge) => {
    return <SingleBadge badge={item} />;
  };

  return (
    <div className="w-full my-4">
      <SectionTitle>Badges</SectionTitle>
      <Carousel items={dummyBadges} itemRenderer={badgeRenderer} />
    </div>
  );
}
