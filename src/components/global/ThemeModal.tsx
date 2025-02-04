import { Fonts } from "@/constants/Fonts";
import { useSettingsStore } from "@/store/settingsStore";
import React, { FC } from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale } from "react-native-size-matters";
import { StyleSheet } from "react-native-unistyles";
import CustomText from "./CustomText";

interface ThemeModalProps {
  visible: boolean;
  onClose: () => void;
}

const ThemeModal: FC<ThemeModalProps> = ({ visible, onClose }) => {
  const setTheme = useSettingsStore((state) => state.setTheme);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onDismiss={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={[styles.circle, styles.lightCircle]}
              onPress={() => setTheme("light")}
            >
              <CustomText
                style={styles.lightCircleText}
                variant="h3"
                fontFamily={Fonts.SemiBold}
              >
                A
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.circle, styles.darkCircle]}
              onPress={() => setTheme("dark")}
            >
              <CustomText
                style={styles.darkCircleText}
                variant="h3"
                fontFamily={Fonts.SemiBold}
              >
                B
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.circle, styles.systemCircle]}
              onPress={() => setTheme("system")}
            >
              <CustomText variant="h3" fontFamily={Fonts.SemiBold}>
                SYS
              </CustomText>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default ThemeModal;

const styles = StyleSheet.create((theme) => ({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: theme.Colors.background,
    borderRadius: theme.border.xs,
    width: "70%",
    padding: 20,
    elevation: 5,
    maxHeight: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.Colors.typography,
  },

  circle: {
    width: moderateScale(70),
    aspectRatio: 1,
    borderRadius: moderateScale(35),
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lightCircle: {
    backgroundColor: theme.Colors.white,
    borderColor: theme.Colors.gray[500],
  },
  darkCircle: {
    backgroundColor: "#000",
    borderColor: theme.Colors.gray[500],
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  lightCircleText: {
    color: theme.Colors.black,
  },
  darkCircleText: {
    color: theme.Colors.white,
  },
  systemCircle: {
    backgroundColor: theme.Colors.gray[300],
    borderColor: theme.Colors.gray[500],
  },
}));
