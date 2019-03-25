import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Title,
  Button,
  Icon,
  Body,
  Right,
  Footer,
  FooterTab
} from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://pbs.twimg.com/profile_images/915625091337211904/Ih0GPAfT_400x400.jpg"
                  }}
                />
                <Body>
                  <Text>SAUNIHON</Text>
                  <Text note>JAPAN</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://scontent-lhr3-1.cdninstagram.com/vp/52fdbe4b1e7fd7eec8a2e02fb573a044/5D2292A9/t51.2885-15/e35/51620325_370414623684745_8544371518373478650_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&ig_cache_key=MTk4NDkwNDI0ODIwODI2MzA5Mg%3D%3D.2"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://secure.meetupstatic.com/photos/member/e/3/f/6/member_283738358.jpeg"
                  }}
                />
                <Body>
                  <Text>SAUNIHON</Text>
                  <Text note>JAPAN</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://scontent-yyz1-1.cdninstagram.com/vp/e4c5f8ba90246bf516509f00be3c97f9/5D20E616/t51.2885-15/e35/s480x480/46920996_289864761875108_8661906872140652689_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&se=8"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>1M Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>500k Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
