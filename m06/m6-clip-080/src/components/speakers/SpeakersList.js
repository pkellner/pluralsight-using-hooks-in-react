import React, { useContext, Activity } from "react";
import SpeakerDetail from "./SpeakerDetail";
import { SpeakersDataContext } from "../contexts/SpeakersDataContext";
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakerListFiltered = useSpeakerSortAndFilter(speakerList);
  if (loadingStatus === "loading") {
    return <div className="card">Loading...</div>;
  }
  const visibleIds = new Set(speakerListFiltered.map((rec) => rec.id));
  return (
    <>
      {speakerListFiltered.map(function (speakerRec) {
        return (
          <Activity key={speakerRec.id}
            mode={visibleIds.has(speakerRec.id) ? "visible" : "hidden"}>
            <SpeakerDetail
              key={speakerRec.id}
              speakerRec={speakerRec}
              showDetails={false}
              />
          </Activity>
        );
      })}
    </>
  );
}
