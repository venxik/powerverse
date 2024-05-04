package com.powerverse

import android.os.Build
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class EmulatorDetectorModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "EmulatorDetector"
    }

    @ReactMethod()
    fun isEmulator(promise: Promise) {
        promise.resolve(
            Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic")
                    || Build.FINGERPRINT.startsWith("generic")
                    || Build.FINGERPRINT.startsWith("unknown")
                    || Build.HARDWARE.contains("goldfish")
                    || Build.HARDWARE.contains("ranchu")
                    || Build.MODEL.contains("google_sdk")
                    || Build.MODEL.contains("Emulator")
                    || Build.MODEL.contains("Android SDK built for x86")
                    || Build.MANUFACTURER.contains("Genymotion")
                    || Build.PRODUCT.contains("sdk_google")
                    || Build.PRODUCT.contains("google_sdk")
                    || Build.PRODUCT.contains("sdk")
                    || Build.PRODUCT.contains("sdk_x86")
                    || Build.PRODUCT.contains("sdk_gphone64_arm64")
                    || Build.PRODUCT.contains("vbox86p")
                    || Build.PRODUCT.contains("emulator")
                    || Build.PRODUCT.contains("simulator")
        )
    }
}