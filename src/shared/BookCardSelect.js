import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
} from "react-native"
import { Select } from "../../assets/icons/Select"

export default function BookCardSelect({
    uri,
    name,
    authors,
    selected,
    setSelected
}) {
    const authorsList = authors.map(item => item.name).join(', ')

    return (
        <TouchableWithoutFeedback onPress={setSelected}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        width: 43,
                        height: 64,
                        borderRadius: 10,
                        backgroundColor: 'black'
                    }}
                />
                <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
                    <Image
                        source={{ uri: uri }}
                        style={{
                            width: 43,
                            height: 64,
                            borderRadius: 10
                        }}
                    />
                    <View>
                        <Text style={styles.name}>{name.length < 30 ? name : `${name.slice(0, 30)}...`}</Text>
                        {authorsList.length > 0 && (
                            <Text style={styles.author}>{`by ${authorsList.length < 35 ? authorsList : authorsList.slice(0, 35) + '...'}`}</Text>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 999,
                        borderWidth: !selected && 1.5,
                        borderColor: !selected && '#7E7974',
                        backgroundColor: selected && '#E6DFD9',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {selected && (
                        <Select
                            width={11}
                            height={8}
                            strokeWidth={7}
                            stroke='#7E7974'
                        />
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'as-regular',
        fontSize: 15,
        color: '#E6DFD9',
    },
    author: {
        fontFamily: 'as-regular',
        fontSize: 12,
        color: '#7E7974'
    }
})