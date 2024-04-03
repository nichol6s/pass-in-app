import { ReactNode } from "react"
import { TextInput, View } from "react-native"

function Input({ children }: {children: ReactNode}) {
    return (
        <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg" >
            {children}
        </View>
    )
}

function Field() {
    return <TextInput className="flex-1 text-white text-base font-regular" />
}

Input.Field = Field

export { Input }
