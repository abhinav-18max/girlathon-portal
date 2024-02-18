import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="Timeline">
      <h1>Timeline</h1>
      <VerticalTimeline lineColor="rgb(101, 8, 135)">
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="11th February 2024"
        >
          <h3 className="timeline-heading">
            Registration and Idea Submission Starts
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="29th  February 2024"
        >
          <h3 className="timeline-heading">Registration closes</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{
            background: "rgb(101, 8, 135)",
          }}
          date="7th March 2024"
        >
          <h3 className="timeline-heading">
            Announcement of Shortlisted participants
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="14th March 2024"
        >
          <h3 className="timeline-heading">Allocation of mentors</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="16th March 2024"
        >
          <h3 className="timeline-heading">Online Development Phase Begins</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="4th April 2024"
        >
          <h3 className="timeline-heading">Second round of shortlisting</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--registration"
          contentStyle={{
            background: "#f2f2f200",
            border: "2px solid white",
            borderRadius: "20px",
          }}
          contentArrowStyle={{ borderRight: "10px solid white" }}
          iconStyle={{ background: "rgb(101, 8, 135)" }}
          date="6th April 2024"
        >
          <h3 className="timeline-heading">
            Final Event Day with project presentation and talk sessions
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
