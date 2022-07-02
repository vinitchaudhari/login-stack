import { View, Text, SafeAreaView, Image, FlatList, Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { avtarURL } from '../../common/constants/url';
import { storeJson } from '../../data_store/hardcoded/other';
import { appFontBlack, appFontBold, appFontBook, appFontLight, appFontMedium } from '../../common/constants';
import DrawerButton from '../../components/DrawerButton';




const { width, height } = Dimensions.get('screen')

const DATA = [{

    "offers": [{
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg'
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg'
    },
    {
        id: 3,
        imageUrl: 'https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?cs=srgb&dl=pexels-pixabay-255501.jpg&fm=jpg'
    },
    {
        id: 4,
        imageUrl: 'https://images.pexels.com/photos/364984/pexels-photo-364984.jpeg?cs=srgb&dl=pexels-asim-alnamat-364984.jpg&fm=jpg'
    },
    {
        id: 5,
        imageUrl: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?cs=srgb&dl=pexels-gabriel-freytez-341523.jpg&fm=jpg'
    },
    {
        id: 5,
        imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg'
    }]
}];



const AppUI = (props) => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        setUserData(props.userData)
    }, [props.userData])


    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        )
    }
    // item.products.map(element => {

    // })


    const renderOffers = ({ item }) => (
        item.offers.map(element => {
            return (
                <>
                    <ImageItem item={element} />
                </>
            )
        })
    )
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: moderateScale(12) }}>
            <View style={{ flexDirection: "row", width: '100%', height: moderateScale(50), justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        width: moderateScale(30)
                    }}
                >
                    <DrawerButton
                        navigation={props.navigation}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text style={{ textAlign: "center", fontSize: moderateScale(22), fontWeight: 'bold' }}>Dashboard</Text>
                </View>

            </View>
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: moderateScale(12) }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: moderateScale(80),
                            height: moderateScale(80),
                            borderRadius: moderateScale(50)
                        }}
                        source={{ uri: avtarURL }}
                    />
                </View>
                <View style={{ flex: 3, paddingHorizontal: moderateScale(12) }}>
                    <Text style={{
                        fontSize: moderateScale(22),
                        fontFamily: appFontMedium
                    }}>
                        Welcome,
                    </Text>
                    <Text style={{
                        fontSize: moderateScale(22),
                        fontFamily: appFontLight
                    }}>
                        {userData.name ? userData.name.charAt(0).toUpperCase() + userData.name.slice(1) : ""}
                    </Text>
                </View>
            </View>
            {/* vl */}
            <View style={{ flex: 3, width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: moderateScale(12) }}>
                <Text style={{ width: '100%', height: moderateScale(40), fontSize: moderateScale(24), fontWeight: 'bold', textAlign: 'center' }}>Products List</Text>
                <FlatList
                    style={{
                        width: '100%'
                    }}
                    data={storeJson}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            {/* hl */}
            <View
                style={{
                    flex: 1.5,
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        width: '100%',
                        height: moderateScale(40),
                        fontSize: moderateScale(24),
                        fontFamily: appFontBook,
                        textAlign: 'center'
                    }}
                >
                    Offers
                </Text>
                <FlatList
                    style={{
                        width: '100%'
                    }}
                    data={DATA}
                    renderItem={renderOffers}
                    keyExtractor={item => item.id}
                    horizontal
                />
            </View>
        </SafeAreaView>
    )
}

const Item = ({ item }) => (
    <View style={{
        width: '100%',
        backgroundColor: '#F5FFFA',
        padding: moderateScale(18),
        paddingTop: -15,
        marginVertical: moderateScale(25),
        borderRadius: moderateScale(20),
        borderWidth: moderateScale(1.2),
        borderColor: 'blue'
    }}>
        <View
            style={{
                marginTop: -35,
                alignSelf: "flex-end",
                // marginLeft: -50,
                // elevation: 5
                // backgroundColor: 'white',
                // height: 150
            }}
        >
            <Image
                style={{
                    width: moderateScale(120),
                    height: moderateScale(120),
                    borderRadius: moderateScale(100)
                }}
                source={{ uri: item.image }}
            />
        </View>
        <View>
            <Text style={{
                fontSize: moderateScale(20),
                fontFamily: appFontMedium
            }}>
                {item.title}
            </Text>
            <Text style={{
                fontSize: moderateScale(15),
                marginVertical: 5
            }}>
                {item.description}
            </Text>
            <Text style={{
                fontSize: moderateScale(15),
                color: 'red'
            }}>
                {item.category}
            </Text>
            <Text style={{
                fontSize: moderateScale(15),
                color: 'cyan'
            }}>
                {"$ " + item.price}
            </Text>
        </View>
    </View>
);

const ImageItem = ({ item }) => (
    <Image
        style={{
            width: moderateScale(150),
            height: moderateScale(150),
            marginHorizontal: moderateScale(8),
            borderRadius: 15
        }}
        source={{ uri: item.imageUrl }}
    />
);

export default AppUI