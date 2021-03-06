import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import {
  Container,
  PartyIcon,
  StartTitle,
  CreateButton,
  CreateInput,
  List,
  Item,
  ItemIcon,
  ItemName,
  Events,
  Event,
  EventLink,
  EventUsers,
  EventUsersIcon,
  HeadingSeparator
} from "./styles";
import { IconLeft } from "../../styles/common.styles";
import slugify from "../../helpers";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    const { title } = this.state;

    return (
      <Container>
        <Mutation
          mutation={CREATE_EVENT_MUTATION}
          update={(cache, { data }) => {
            const { events } = cache.readQuery({ query: EVENTS_QUERY });
            data.createEvent.slug = slugify(title);
            cache.writeQuery({
              query: EVENTS_QUERY,
              data: { events: events.concat([data.createEvent]) }
            });
          }}
        >
          {(createEvent, { data, loading, error }) => {
            return (
              <Fragment>
                <PartyIcon />
                <StartTitle>
                  Start organising a meal with your friends!
                </StartTitle>
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    await createEvent({
                      variables: { title: title, slug: slugify(title) }
                    });
                    this.props.history.push(`${slugify(title)}/edit`);
                  }}
                >
                  <CreateInput
                    type="text"
                    value={title}
                    ref={input => {
                      this.titleInput = input;
                    }}
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder="Event name..."
                  />
                  <CreateButton type="submit" disabled={!title}>
                    Create event
                  </CreateButton>
                </form>
                <p>
                  <IconLeft className="fas fa-info-circle" />
                  TableFriends will help you plan and decide the following
                  details:
                </p>
                <List>
                  <Item>
                    <ItemIcon>
                      <i className="fas fa-user" />
                    </ItemIcon>
                    <ItemName>Attendants</ItemName>
                  </Item>
                  <Item>
                    <ItemIcon>
                      <i className="fas fa-calendar-alt" />
                    </ItemIcon>
                    <ItemName>Date</ItemName>
                  </Item>
                  <Item>
                    <ItemIcon>
                      <i className="fas fa-map-marker-alt" />
                    </ItemIcon>
                    <ItemName>Place</ItemName>
                  </Item>
                  <Item>
                    <ItemIcon>
                      <i className="fas fa-utensils" />
                    </ItemIcon>
                    <ItemName>Menus</ItemName>
                  </Item>
                  <Item>
                    <ItemIcon>
                      <i className="fas fa-cocktail" />
                    </ItemIcon>
                    <ItemName>Drinks</ItemName>
                  </Item>
                </List>
              </Fragment>
            );
          }}
        </Mutation>
        <Query query={EVENTS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) {
              return <Fragment>Loading ...</Fragment>;
            }

            if (error) {
              return <Fragment>An unexpected error occured.</Fragment>;
            }

            return (
              <Fragment>
                {data.events ? (
                  <Fragment>
                    <HeadingSeparator>Recent events</HeadingSeparator>
                    <Events>
                      {data.events.map(event => (
                        <Event key={event.id}>
                          <EventLink to={event.slug}>
                            {event.title ? event.title : "Untitled"}
                            <EventUsers>
                              <EventUsersIcon className="fas fa-user" />
                              {event.participants.length}
                            </EventUsers>
                          </EventLink>
                        </Event>
                      ))}
                    </Events>
                  </Fragment>
                ) : null}
              </Fragment>
            );
          }}
        </Query>
      </Container>
    );
  }
}

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($title: String!, $slug: String!) {
    createEvent(title: $title, slug: $slug) {
      id
      title
    }
  }
`;

export const EVENTS_QUERY = gql`
  query EventsQuery {
    events(orderBy: createdAt_DESC) {
      id
      title
      slug
      participants {
        id
      }
    }
  }
`;

export default withRouter(Home);
