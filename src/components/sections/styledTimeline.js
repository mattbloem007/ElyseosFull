import React from 'react';
import styled from "styled-components"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { withStyles } from "@material-ui/core/styles";

import { Section, Container } from "../global"

export default withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none"
    }
  }
})(TimelineItem);
