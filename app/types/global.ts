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
  type: "success" | "secondary";
  pointer?: boolean;
};
