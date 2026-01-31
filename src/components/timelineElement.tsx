import React from "react";
import { IconType } from "react-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { FaLocationDot } from "react-icons/fa6";
import { useTheme } from "@/context/themeContext";
interface ItemPropType {
  title: string;
  description: string;
  location: string;
  year: string;
}

interface TimelineElementPropType {
  item: ItemPropType;
  Icon: IconType;
}
const TimelineElement = ({ item, Icon }: TimelineElementPropType) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          background: "#0ea5e9",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  #0ea5e9",
        }}
        visible={inView}
        date={item.year}
        dateClassName={theme === "dark" ? "" : "text-black"}
        iconStyle={{ background: "#0ea5e9", color: "#fff" }}
        icon={<Icon />}
      >
        <div className="vertical-timeline-element-title">{item.title}</div>
        <div className="vertical-timeline-element-subtitle flex items-center gap-2 py-2 text-sm">
          <FaLocationDot />
          <span>{item.location}</span>
        </div>
        <div className="text-sm">{item.description}</div>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
