import React, { Component } from 'react';
import { Container, Segment, List, Header } from 'semantic-ui-react';

export default class Home extends Component {
  render() {
    return (
      <Container id="introduction-page">
        <Segment clearing textAlign="center">
          <Header as="h1" textAlign="center">
            Home
            <Header.Subheader>Projects page</Header.Subheader>
          </Header>
        </Segment>

        <Segment padded>
          <Header as="h2" dividing>
            Introduction
          </Header>
          <p>
            The list of the available pages on the <a href="/">site</a> .
          </p>
          <List>
            <List.Item icon="check" content="Authors page" />
            <List.Item icon="uncheck" content="Projects page" />
            <List.Item icon="uncheck" content="Books page" />
            <List.Item icon="uncheck" content="Areas page" />
            <List.Item icon="uncheck" content="D3 statistics page" />
            <List.Item icon="uncheck" content="Calendar view page" />
            <List.Item icon="uncheck" content="Login page" />
          </List>

          <p>
            Changelog page is available on the changelog page.
            {/* <Link to="/usage">Usage</Link> info section.  */}
          </p>
        </Segment>

        <Segment padded>
          <Header as="h2" dividing>
            Project Todos
          </Header>
          <p>Todo items list .</p>
          <List>
            <List.Item icon="uncheck" content="Add redux" />
            <List.Item icon="uncheck" content="Add styled-components" />
            <List.Item
              icon="uncheck"
              content="Implement pagination with a random data"
            />
            <List.Item
              icon="uncheck"
              content="Make all data driven by db, no hardcoded data"
            />
            <List.Item
              icon="uncheck"
              content="Make all workflow user and session based"
            />
            <List.Item icon="uncheck" content="Add JWT authorisation" />
          </List>
        </Segment>
      </Container>
    );
  }
}
