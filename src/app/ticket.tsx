import { useState } from "react";

import { View, StatusBar, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Modal, Share } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker"
import { Redirect } from "expo-router";

import { useBadgeStore } from "@/store/badge-store"

import { Header } from "@/components/header";
import { Credential } from "@/components/credential";

import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { QRCode } from "@/components/qrcode";

export default function Ticket() {

    const [expandQRCode, setExpandQRCode] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleShare(){
        try{

            if(badgeStore.data?.checkInURL){
                await Share.share({
                    message: badgeStore.data.checkInURL
                })
            }

        }catch(error){
            console.log(error)
            Alert.alert("Compartilhar", "Não foi possível compartilhar")
        }
    }

    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4]
            })

            if (result.assets) {
                badgeStore.updateAvatar(result.assets[0].uri)
            }

        } catch (error) {
            console.log(error)
            Alert.alert("Foto", "Nao foi possivel selecionar a imagem")
        }
    }

    if (!badgeStore.data?.checkInURL) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Minha credencial" />

            <ScrollView className="-mt-28 -z-10" contentContainerClassName="px-8 pb-8" showsVerticalScrollIndicator={false}>
                <Credential
                    data={badgeStore.data}
                    onChangeAvatar={handleSelectImage}
                    onExpandQRCode={() => setExpandQRCode(true)}
                />

                <FontAwesome
                    name="angle-double-down"
                    size={24}
                    color={colors.gray[300]}
                    className="self-center my-6"
                />

                <Text className="text-white font-bold text-2xl mt-4">Compartilhar Credencial</Text>
                <Text className="text-white font-regular text-base mt-1 mb-6">Mostre ao mundo que você vai participar do evento {badgeStore.data.eventTitle}</Text>

                <Button title="Compartilhar" onPress={handleShare} />

                <TouchableOpacity activeOpacity={0.7} style={styles.touchable} onPress={() => badgeStore.remove()} >
                    <Text className="text-base text-white font-bold text-center">Remover Ingresso</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={expandQRCode} statusBarTranslucent animationType="slide" >
                <View className="flex-1 bg-green-500 items-center justify-center">

                    <QRCode
                        value="teste"
                        size={300}
                    />

                    <TouchableOpacity activeOpacity={0.7} onPress={() => setExpandQRCode(false)}>
                        <Text className="font-body text-orange-500 text-sm mt-10">Fechar QRCode</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        marginTop: 30
    }
})