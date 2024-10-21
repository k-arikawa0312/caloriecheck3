import React, { useState } from 'react';
import { View,Text, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SuggestMenu: React.FC = () => {
    const [menu, setMenu] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchMenu = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.example.com/suggest-menu'); // Replace with your API endpoint
            const data = await response.json();
            setMenu(data.menu);
        } catch (error) {
            console.error('Error fetching menu:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <Text>Suggested Menu</Text>
            <TouchableOpacity onPress={fetchMenu} disabled={loading}>
                {loading ? 'Loading...' : 'Get Menu'}
            </TouchableOpacity>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </View>
    );
};

export default SuggestMenu;