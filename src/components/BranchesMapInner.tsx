"use client";

import { HAS_GOOGLE_MAPS } from "@/lib/map";
import { BranchesMapGoogle } from "./BranchesMapGoogle";
import { BranchesMapLeaflet } from "./BranchesMapLeaflet";

type BranchesMapInnerProps = {
  interactive: boolean;
};

export function BranchesMapInner({ interactive }: BranchesMapInnerProps) {
  if (HAS_GOOGLE_MAPS) {
    return <BranchesMapGoogle interactive={interactive} />;
  }

  return <BranchesMapLeaflet interactive={interactive} />;
}
