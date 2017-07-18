import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card } from 'native-base';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        closeDrawer = this.closeDrawer.bind(this);
        openDrawer = this.openDrawer.bind(this);
    }

    closeDrawer = () => {
        this.drawerclose();
    }
    openDrawer = () => {
        alert('open');
        this.refs.drawer.open();
    }
    render() {
        return (
            <Container style={styles.containerStyle}>
                <Header style={styles.headerStyle}>
                    <Left>
                        <Button success style={styles.buttonStyle} onPress={() => this.openDrawer()} >
                            <Icon name='menu' />
                        </Button>
                    </Left>

                    <Body>
                        <Title>Shop</Title>
                    </Body>
                </Header>
                <Header searchBar rounded style={styles.headerStyle} >
                    <Item>
                        <Icon name='search' />
                        <Input placeholder=" Smartphone " />
                    </Item>

                </Header>
                <CardItem style={styles.carditemStyle}>
                    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Chalkboard' }}> Hot SALE {'\n'} </Text>
                    <Text style={{ fontSize: 50, color: 'white', fontFamily: 'Andale Mono', marginLeft: -100 }}> {'\n'} 50% </Text>
                </CardItem>


                <Card style={styles.carditemStyle2}>

                </Card>
                <Drawer ref="drawer"
                    type="static"
                    openDrawerOffset={DRAWER_OFFSET}
                    panOpenMash={.8}
                    content={<DrawerScene closeDrawer={this.closeDrawer} />}>

                    <MainView
                        drawerStatus={this.state.isDrawerOpened}
                        closeDrawer={this.closeDrawer}
                        openDrawer={this.openDrawer} />
                </Drawer>

            </Container>
        );
    };
}
const styles = {
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    buttonStyle: {
        width: 40,

    },
    carditemStyle: {
        width: 420,
        height: 150,
        backgroundColor: '#FFCC80'
    },
    carditemStyle2: {
        height: 0.5,
        width: 100,
    }
}


export default Dashboard;