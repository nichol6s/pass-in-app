import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ActivityIndicator } from "react-native"


type Props =  TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity 
        style={styles.touchable}
        disabled={isLoading}
        activeOpacity={0.7}
        {...rest}
        >
            {
                isLoading ? (
                    <ActivityIndicator className="text-green-500" />
                ) : (
            <Text className="text-green-500 text-base font-bold uppercase"> {title} </Text> )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable:{
        width: "100%",
        height: 50,
        backgroundColor: "rgb(244, 143, 86)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    }
})