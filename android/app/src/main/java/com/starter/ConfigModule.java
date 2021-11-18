package com.starter;
import android.util.Log;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class ConfigModule extends ReactContextBaseJavaModule {

    String baseUrl;

    ConfigModule(ReactApplicationContext context) {
        super(context);
        baseUrl = context.getResources().getString(R.string.base_url);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String,Object> con = new HashMap<>();
        con.put("evn",BuildConfig.FLAVOR);
        con.put("baseUrl",baseUrl);
        return con;
    }
}
