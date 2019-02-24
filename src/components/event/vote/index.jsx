import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import Register from "./participants/register";
import UnRegister from "./participants/unregister";
import VoteTable from "./table";
import {
  Nav,
  NavItem,
  TabButton,
  TabIcon
} from "../../../styles/common.styles";

class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUser: "",
      activeSection: "register"
    };
  }

  render() {
    const { event } = this.props;
    const { activeSection } = this.state;

    return (
      <div>
        <Nav>
          <NavItem>
            <TabButton
              active={activeSection === "register" ? 1 : 0}
              onClick={() => this.setState({ activeSection: "register" })}
            >
              <TabIcon className="fas fa-user-plus" />
              Registration
            </TabButton>
          </NavItem>
          <NavItem>
            <TabButton
              active={activeSection === "dates" ? 1 : 0}
              onClick={() => this.setState({ activeSection: "dates" })}
            >
              <TabIcon className="fas fa-calendar-alt" />
              Dates &amp; time
            </TabButton>
          </NavItem>
          <NavItem>
            <TabButton
              active={activeSection === "places" ? 1 : 0}
              onClick={() => this.setState({ activeSection: "places" })}
            >
              <TabIcon className="fas fa-map-marker-alt" />
              Places &amp; restaurants
            </TabButton>
          </NavItem>
          <NavItem>
            <TabButton
              active={activeSection === "menus" ? 1 : 0}
              onClick={() => this.setState({ activeSection: "menus" })}
            >
              <TabIcon className="fas fa-utensils" />
              Menus
            </TabButton>
          </NavItem>
        </Nav>
        {activeSection === "register" && (
          <Fragment>
            <Register event={event} />
            <UnRegister event={event} participants={event.participants} />
          </Fragment>
        )}
        {activeSection === "dates" && (
          <VoteTable
            type="dates"
            event={event}
            participants={event.participants}
            mutation={UPDATE_PARTICIPANT_DATES}
          />
        )}
        {activeSection === "places" && (
          <VoteTable
            type="places"
            event={event}
            participants={event.participants}
            mutation={UPDATE_PARTICIPANT_PLACES}
          />
        )}
        {activeSection === "menus" && (
          <VoteTable
            type="menus"
            event={event}
            participants={event.participants}
            mutation={UPDATE_PARTICIPANT_MENUS}
          />
        )}
      </div>
    );
  }
}

const UPDATE_PARTICIPANT_DATES = gql`
  mutation UpdateParticipantDates($id: ID!, $dates: [ID]) {
    updateParticipant(id: $id, dates: $dates) {
      id
      dates
    }
  }
`;

const UPDATE_PARTICIPANT_PLACES = gql`
  mutation UpdateParticipantPlaces($id: ID!, $places: [ID]) {
    updateParticipant(id: $id, places: $places) {
      id
      places
    }
  }
`;

const UPDATE_PARTICIPANT_MENUS = gql`
  mutation UpdateParticipantMenus($id: ID!, $menus: [ID]) {
    updateParticipant(id: $id, menus: $menus) {
      id
      menus
    }
  }
`;

export default Vote;
