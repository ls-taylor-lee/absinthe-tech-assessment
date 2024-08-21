import { gql } from "@apollo/client";

export const GET_ACTIVITIES_QUERY = gql`
  query GetActivities {
    logs(order_by: { block_timestamp: desc }, limit: 6) {
      address
      block_number
      block_timestamp
      decoded
      from
      to
      transaction_hash
    }
  }
`;
