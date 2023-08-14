import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
    const [post, setPost] = useState({ id: 1, title: 'post one' });
    const handleNavigate = () => {
        navigation.navigate('Profile', { post });
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Button
                title='Click to change'
                onPress={handleNavigate}
            />
        </View>
    )
}

export default Home