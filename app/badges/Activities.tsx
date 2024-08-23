"use client";

import { useEffect, useState } from "react";

import { useQuery, useSubscription } from "@apollo/client";
import { BiArrowSVG, ExternalLinkSVG } from "App/components/icons";
import { MiniBadge } from "App/components/mini-badge";
import {
  AbsTable,
  AbsTableBody,
  AbsTableBodyCell,
  AbsTableBodyRow,
  AbsTableHeader,
  AbsTableHeaderCell,
  AbsTableHeaderRow,
} from "App/components/table";
import { SectionTitle } from "App/components/typography";
import { GET_ACTIVITIES_QUERY } from "App/graphql/queries";
import { ACTIVITIES_SUBSCRIPTION } from "App/graphql/subscriptions";
import { IActivity } from "App/types/global";
import { truncateHash } from "App/utils/hash";
import classNames from "classnames";
import moment from "moment";

function TableSkeletonLoader() {
  return [1, 2, 3, 4, 5, 6].map((v) => {
    return (
      <AbsTableBodyRow key={v} optionalClass="animate-pulse">
        <AbsTableBodyCell optionalClass="text-primary dark:text-primary-dark">
          <div className="flex items-center justify-start blur-sm shadow">
            {BiArrowSVG}
            <span>Transaction</span>
          </div>
        </AbsTableBodyCell>
        <AbsTableBodyCell>
          <div className="blur-sm shadow">
            <MiniBadge type="success">000000000</MiniBadge>
          </div>
        </AbsTableBodyCell>
        <AbsTableBodyCell optionalClass="text-secondary dark:text-secondary-dark">
          <div className="flex items-center justify-between w-36 blur-sm shadow">
            <span>00.00.0000</span>
            <MiniBadge type="secondary">00:00:00</MiniBadge>
          </div>
        </AbsTableBodyCell>
        <AbsTableBodyCell optionalClass="text-secondary dark:text-secondary-dark">
          <div className="flex items-center justify-between w-36 blur-sm shadow">
            <span>{truncateHash("0x000000000000")}</span>
            <MiniBadge type="secondary" pointer>
              Copy
            </MiniBadge>
          </div>
        </AbsTableBodyCell>
        <AbsTableBodyCell optionalClass="w-14"></AbsTableBodyCell>
      </AbsTableBodyRow>
    );
  });
}

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [updatedActivityHashes, setUpdatedActivityHashes] = useState([]);

  useQuery(GET_ACTIVITIES_QUERY, {
    onCompleted: (data) => {
      setActivities(data.logs);
    },
  });

  const { data: subscriptionData, loading, error } = useSubscription(ACTIVITIES_SUBSCRIPTION);

  useEffect(() => {
    if (subscriptionData) {
      const newActivities = subscriptionData.logs;

      // Get IDs of the previous activities
      const prevActivityIds = activities.map((activity: IActivity) => activity.transaction_hash);

      // Filter out new activities that are not in the previous activities
      const newAddedActivities = newActivities.filter(
        (activity: IActivity) => !prevActivityIds.includes(activity.transaction_hash)
      );

      // Highlight the new activities
      const newAddedIds = newAddedActivities.map((activity: IActivity) => activity.transaction_hash);
      setUpdatedActivityHashes(newAddedIds);

      // Update the activities state with the new data
      setActivities(newActivities);

      // Optionally remove the highlight after a delay
      setTimeout(() => {
        setUpdatedActivityHashes([]);
      }, 3000); // Adjust the delay as needed
    }
  }, [subscriptionData]);

  const List = () => {
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div className={classNames("overflow-x-auto rounded-xl")}>
        <AbsTable>
          <AbsTableHeader>
            <AbsTableHeaderRow>
              <AbsTableHeaderCell>Activities</AbsTableHeaderCell>
              <AbsTableHeaderCell>Points</AbsTableHeaderCell>
              <AbsTableHeaderCell>Date</AbsTableHeaderCell>
              <AbsTableHeaderCell>TXID</AbsTableHeaderCell>
              <AbsTableHeaderCell />
            </AbsTableHeaderRow>
          </AbsTableHeader>
          <AbsTableBody>
            {loading ? (
              <TableSkeletonLoader />
            ) : (
              activities.map((activity: IActivity) => (
                <AbsTableBodyRow
                  key={activity.transaction_hash}
                  optionalClass={classNames({
                    "animate-highlight": updatedActivityHashes.includes(activity.transaction_hash),
                  })}
                >
                  <AbsTableBodyCell optionalClass="text-primary dark:text-primary-dark">
                    <div className="flex items-center justify-start">
                      {BiArrowSVG}
                      <span>Transaction</span>
                    </div>
                  </AbsTableBodyCell>
                  <AbsTableBodyCell>
                    <MiniBadge type="success">{activity.decoded.amount0Out}</MiniBadge>
                  </AbsTableBodyCell>
                  <AbsTableBodyCell optionalClass="text-secondary dark:text-secondary-dark">
                    <div className="flex items-center justify-between w-36">
                      <span>{moment(activity.block_timestamp).format("DD.MM.YYYY")}</span>
                      <MiniBadge type="secondary">{moment(activity.block_timestamp).format("hh:mm:ss")}</MiniBadge>
                    </div>
                  </AbsTableBodyCell>
                  <AbsTableBodyCell optionalClass="text-secondary dark:text-secondary-dark">
                    <div className="flex items-center justify-between w-36">
                      <span>{truncateHash(activity.transaction_hash)}</span>
                      <MiniBadge type="secondary" pointer>
                        Copy
                      </MiniBadge>
                    </div>
                  </AbsTableBodyCell>
                  <AbsTableBodyCell optionalClass="w-14">{ExternalLinkSVG}</AbsTableBodyCell>
                </AbsTableBodyRow>
              ))
            )}
          </AbsTableBody>
        </AbsTable>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle>Last Activities</SectionTitle>
      <List />
    </div>
  );
}
