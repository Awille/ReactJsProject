package com.example.reatjsdemo.javamodule;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestJavaModule extends ReactContextBaseJavaModule {

    private static final String NAME = "TestJavaModule";

    public TestJavaModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void getNativeText(Promise promise) {
        promise.resolve("it is android app");
    }


}
