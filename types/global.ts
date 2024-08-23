export type IActivity = {
  address: string;
  block_number: number;
  block_timestamp: string;
  decoded: {
    to: string;
    sender: string;
    amount0In: string;
    amount1In: string;
    amount0Out: string;
    amount1Out: string;
  };
  from: string;
  to: string;
  transaction_hash: string;
};

export type IAbsTableProps = { children?: any; optionalClass?: string; style?: any };

export type IMiniBadge = {
  children?: any;
  type: "success" | "secondary" | "disabled";
  pointer?: boolean;
};

export type ISectionTitle = {
  children?: any;
};

export type IAbsButton = {
  handler?: (e) => void;
  optionalClass?: string;
  children?: any;
  radius?: "rounded-full" | "rounded-none" | string;
};

export type ICarousel = {
  items: any[];
  itemRenderer: (item: any, active?: boolean) => JSX.Element | null;
  showDetail?: boolean;
  detailRenderer?: (item: any) => JSX.Element | null;
};

export type IBadgeAction = {
  title: string;
  isCompleted: boolean;
};

export type IBadge = {
  title: string;
  actions: IBadgeAction[];
  isCompleted: boolean;
  reward: string | number;
  rewardDetails: string;
  icon: string;
};

export type IBadgeActionsProps = {
  badge: IBadge;
};

export type ISingleBadgeProps = {
  badge: IBadge;
  showDetail?: boolean;
  markComplete?: boolean;
  optionalClass?: string;
  isActive?: boolean;
};

export type ISingleActionProps = {
  action: IBadgeAction;
};
