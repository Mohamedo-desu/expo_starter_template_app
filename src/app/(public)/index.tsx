import CustomButton from "@/components/global/CustomButton";
import CustomText from "@/components/global/CustomText";
import LanguageModal from "@/components/global/LanguageModal";
import ThemeModal from "@/components/global/ThemeModal";
import { appName } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { useLanguage } from "@/hooks/useLanguage";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

const HEADER_ICON_SIZE = RFValue(12);

const OnboardingScreen = () => {
  const { t } = useTranslation();
  const { theme } = useUnistyles();
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const {
    selectedLanguage,
    setLanguageModalVisible,
    languageModalVisible,
    languages,
    handleChangeLanguage,
  } = useLanguage();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setLanguageModalVisible(true)}
          activeOpacity={0.8}
          style={styles.headerLanguage}
        >
          <CountryFlag
            isoCode={selectedLanguage.flag}
            size={HEADER_ICON_SIZE}
            style={styles.flagIcon}
          />
          <CustomText fontFamily={Fonts.Medium} style={styles.headerText}>
            {selectedLanguage.name}
          </CustomText>
          <AntDesign
            name="down"
            size={HEADER_ICON_SIZE}
            color={theme.Colors.gray[500]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setThemeModalVisible(true)}
          activeOpacity={0.8}
          hitSlop={20}
        >
          <Ionicons
            name="color-palette"
            size={RFValue(20)}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Image
        source={require("@/assets/images/adaptive-icon.png")}
        contentFit="cover"
        style={styles.image}
      />

      <CustomText fontFamily={Fonts.Bold} style={styles.appName}>
        {appName}
      </CustomText>
      <CustomText
        variant="h5"
        fontFamily={Fonts.Regular}
        style={styles.appDesc}
      >
        {t("onboarding.description")}
      </CustomText>

      <CustomButton
        text={t("onboarding.get_started")}
        onPress={() => router.navigate("/(public)/sign_in")}
        style={styles.button}
        textStyle={styles.buttonText}
      />

      {/* Language Modal */}
      <LanguageModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        languages={languages}
        onLanguageSelect={handleChangeLanguage}
      />
      <ThemeModal
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.background,
    paddingHorizontal: theme.margins.lg,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: rt.insets.bottom,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: rt.insets.top + 10,
    width: "100%",
    justifyContent: "space-between",
  },
  headerLanguage: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: moderateScale(200),
    aspectRatio: 1,
    marginVertical: 20,
  },
  headerText: {
    fontSize: RFValue(14),
    color: theme.Colors.gray[500],
  },
  appName: {
    fontSize: RFValue(32),
    textAlign: "center",
    marginVertical: 20,
  },
  appDesc: {
    color: theme.Colors.gray[500],
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: 35,
    borderRadius: theme.border.sm,
  },
  buttonText: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(16),
  },
  flagIcon: {},
}));
