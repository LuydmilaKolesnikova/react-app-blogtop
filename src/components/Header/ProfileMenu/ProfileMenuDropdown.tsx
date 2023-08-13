import React, { useState } from "react";
import styles from "./ProfileMenu.module.css";
import ProfileMenuLink from "./ProfileMenuLink.tsx";
import {
  MyProfileIcon,
  SavedArticlesIcon,
  NotificationSettingsIcon,
  ChangePasswordIcon,
  SettingsIcon,
  PrivacyPolicyIcon,
  FAQIcon,
  LogOutIcon,
} from "../../SVG-icons/SVG-icons.tsx";

const data = [
  { icon: <MyProfileIcon />, text: "My profile", path: "my-profile" },
  {
    icon: <SavedArticlesIcon />,
    text: "Saved Articles",
    path: "saved-articles",
  },
  {
    icon: <NotificationSettingsIcon />,
    text: "Notification settings",
    path: "notificatons",
  },
  {
    icon: <ChangePasswordIcon />,
    text: "Change Password",
    path: "change-password",
  },
  { icon: <SettingsIcon />, text: "Settings", path: "settings" },
  {
    icon: <PrivacyPolicyIcon />,
    text: "Privacy Policy",
    path: "privacy-policy",
  },
  { icon: <FAQIcon />, text: "FAQ", path: "faq" },
  { icon: <LogOutIcon />, text: "Logout", path: "logout" },
];

export default function ProfileMenuDropdown() {
  let [links] = useState(data);

  return (
    <nav className={styles.menu}>
      <ul>
        {links.map((link, index) => (
          <ProfileMenuLink
            key={index}
            to={link.path}
            icon={link.icon}
            text={link.text}
          />
        ))}
      </ul>
    </nav>
  );
}
