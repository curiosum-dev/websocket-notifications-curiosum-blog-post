import { View, Text } from 'react-native';
import { useState } from 'react';
import { useChannel } from '../hooks/useChannel';
import { useEventHandler } from '../hooks/useEventHandler';

export const WSDisplay = (): JSX.Element => {
    const [wsMessage, setWSMessage] = useState<any>()
    const channel = useChannel('weather:lobby', {}, () => {})
    useEventHandler(channel, 'current_weather', (data: any) => {
      const response = JSON.parse(data)
      setWSMessage(response.data.base)
    })
    
    return (
        <View>
          <Text>WSMessage: {wsMessage}</Text>
       </View>
    )
}