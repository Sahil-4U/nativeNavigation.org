import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation, route }) => {
    const { post } = route.params;
    return (
        <View>
            <Text>Profile</Text>
            <Text>Post Id:{post.id}</Text>
            <Text>Post :{post.title}</Text>
            <Text>we end here</Text>

            <Button
                title='Click to change'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default Profile