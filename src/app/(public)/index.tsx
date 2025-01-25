import CustomButton from "@/components/global/CustomButton";
import CustomText from "@/components/global/CustomText";
import LanguageModal from "@/components/global/LanguageModal";
import { appName } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { useLanguage } from "@/hooks/useLanguage";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native-unistyles";

const HEADER_ICON_SIZE = RFValue(12);

const OnboardingScreen = () => {
  const { t } = useTranslation();

  const {
    selectedLanguage,
    setLanguageModalVisible,
    languageModalVisible,
    languages,
    handleChangeLanguage,
  } = useLanguage();

  console.log(selectedLanguage);

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        onPress={() => setLanguageModalVisible(true)}
        style={styles.header}
        activeOpacity={0.8}
      >
        <CustomText
          fontFamily={Fonts.Medium}
          variant="h6"
          style={styles.headerText}
        >
          {selectedLanguage}
        </CustomText>
        <AntDesign
          name="down"
          size={HEADER_ICON_SIZE}
          color={Colors.darkGray[500]}
        />
      </TouchableOpacity>

      {/* Content */}
      <Image
        source={require("@/assets/images/icon.png")}
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
        onPress={() => undefined}
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
    top: rt.insets.top,
    gap: 5,
  },
  image: {
    width: moderateScale(300),
    aspectRatio: 1,
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
}));
