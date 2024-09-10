import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    manifest_version: 3,
    name: "Zenn Dark Reader",
    version: "0.1.0",
    description: "zenn.devをダークモードに対応させる拡張機能です。",
    browser_specific_settings: {
      gecko: {
        id: "zenndark@rasengun.dev",
      },
    },
  },
});
