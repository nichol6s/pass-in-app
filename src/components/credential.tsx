import { View, Image, ImageBackground, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons'

import { QRCode } from "@/components/qrcode";

import { colors } from "@/styles/colors";

import { BadgeStore } from "@/store/badge-store";

type Props = {
    data: BadgeStore
    image?: string
    onChangeAvatar?: () => void
    onExpandQRCode?: () => void
}

export function Credential({ data, onChangeAvatar, onExpandQRCode }: Props) {
    return (
        <View className="w-full self-stretch items-center">
            <Image source={require("@/assets/ticket/band.png")} className="w-24 h-52 z-10" />

            <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
                <ImageBackground
                    source={require("@/assets/ticket/header.png")}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row item-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold">{data.eventTitle}</Text>
                        <Text className="text-zinc-50 text-sm font-bold">{data.id}</Text>
                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                </ImageBackground>

                {
                    data.image ? (
                        <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
                            <Image
                                source={{ uri: data.image }}
                                className="w-36 h-36 rounded-full -mt-24"
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity activeOpacity={0.9} style={styles.touchableImage} onPress={onChangeAvatar}>
                            <Feather
                                name="camera"
                                color={colors.green[400]}
                                size={32}
                            />
                        </TouchableOpacity>
                    )
                }

                <Text className="font-bold text-2xl text-zinc-50 mt-4">{data.name}</Text>
                <Text className="font-regular text-base text-zinc-300 mb-4">{data.email}</Text>

                <QRCode 
                    value={data.checkInURL} size={120}
                />

                <TouchableOpacity activeOpacity={0.7} style={styles.touchableTxtQRCode} onPress={onExpandQRCode}>
                    <Text className="font-body text-orange-500 text-sm">Ampliar QRCode</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    touchableTxtQRCode: {
        marginTop: 18
    },
    touchableImage: {
        width: 125,
        height: 125,
        borderRadius: 65, 
        marginTop: -86,
        backgroundColor: 'rgb( 156, 163, 175 )', 
        alignItems: 'center', 
        justifyContent: 'center',
    }
})